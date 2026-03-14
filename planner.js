function getInterval(route){
    let hour = new Date().getHours();
    if(hour>=7 && hour<=9) return route.timetable.peak || 10;
    if(hour>=16 && hour<=18) return route.timetable.peak || 10;
    return route.timetable.offpeak || 15;
}

// Build a graph of stops including route info
function buildGraph(){
    let graph = {};
    routes.forEach(route=>{
        for(let i=0;i<route.stops.length-1;i++){
            let a = route.stops[i];
            let b = route.stops[i+1];
            if(!graph[a]) graph[a] = [];
            if(!graph[b]) graph[b] = [];

            graph[a].push({to:b, route:route.number, index:i+1, wait:getInterval(route)});
            graph[b].push({to:a, route:route.number, index:i+2, wait:getInterval(route)}); // bidirectional
        }
    });
    return graph;
}

// Plan journey from start to end
function planJourney(){
    let start = document.getElementById("startStop").value.trim();
    let end = document.getElementById("endStop").value.trim();
    let results = document.getElementById("results");
    results.innerHTML = "";

    if(!start || !end){
        results.innerHTML = "Please enter both stops.";
        return;
    }

    let graph = buildGraph();
    if(!graph[start]){ results.innerHTML="Start stop not found."; return; }
    if(!graph[end]){ results.innerHTML="Destination stop not found."; return; }

    // BFS queue: [currentStop, pathSoFar, totalTime, currentRoute]
    let queue = [[start, [], 0, null]];
    let visited = new Set();

    while(queue.length){
        queue.sort((a,b)=>a[2]-b[2]); // prioritize shortest estimated time
        let [current, path, time, currentRoute] = queue.shift();

        if(current === end){
            displayJourney(path, time);
            return;
        }

        if(visited.has(current+"-"+currentRoute)) continue;
        visited.add(current+"-"+currentRoute);

        for(let edge of graph[current]){
            let extraTime = edge.wait;
            // if route changed, add wait time for transfer
            if(currentRoute && currentRoute !== edge.route) extraTime += edge.wait; 

            queue.push([
                edge.to,
                [...path, {from:current, to:edge.to, route:edge.route, stopIndex:edge.index, time:extraTime}],
                time + extraTime,
                edge.route
            ]);
        }
    }

    results.innerHTML = "No route found.";
}

// Display journey with stop numbers and estimated times
function displayJourney(path, totalTime){
    let results = document.getElementById("results");
    results.innerHTML = "";

    if(path.length === 0){
        results.innerHTML = "You are already at the destination.";
        return;
    }

    let cumulativeTime = 0;
    path.forEach((step, idx)=>{
        cumulativeTime += step.time;
        let div = document.createElement("div");
        div.innerHTML = `${step.route} - ${step.stopIndex}. ${step.to} (Estimated +${step.time} mins, Total: ${cumulativeTime} mins)`;
        results.appendChild(div);
    });

    let totalDiv = document.createElement("div");
    totalDiv.style.marginTop = "10px";
    totalDiv.innerHTML = `<b>Total estimated journey time: ${totalTime} mins</b>`;
    results.appendChild(totalDiv);
}
