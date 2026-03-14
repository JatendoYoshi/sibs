// Helper: returns interval in minutes based on peak/off-peak and user time
function getInterval(route, timeMinutes){
    let hour = Math.floor(timeMinutes/60);
    if(hour >= 7 && hour <= 9) return route.timetable.peak || 10;
    if(hour >= 16 && hour <= 18) return route.timetable.peak || 10;
    return route.timetable.offpeak || 15;
}

// Build graph with stop number for each route
function buildGraph(){
    let graph = {};
    routes.forEach(route=>{
        route.stops.forEach((stop, index)=>{
            if(!graph[stop]) graph[stop] = [];
            // add edge to next stop
            if(index < route.stops.length - 1){
                let next = route.stops[index+1];
                graph[stop].push({
                    to: next,
                    route: route.number,
                    stopIndex: index+2, // next stop number
                    indexFrom: index+1  // current stop number
                });
                graph[next].push({
                    to: stop,
                    route: route.number,
                    stopIndex: index+1, // current stop number for reverse
                    indexFrom: index+2
                });
            }
        });
    });
    return graph;
}

// Plan journey from start to end at a specific departure time
function planJourneyAtTime(){
    let start = document.getElementById("startStop").value.trim();
    let end = document.getElementById("endStop").value.trim();
    let departHour = parseInt(document.getElementById("departHour").value);
    let departMin = parseInt(document.getElementById("departMin").value);
    let results = document.getElementById("results");
    results.innerHTML = "";

    if(!start || !end || isNaN(departHour) || isNaN(departMin)){
        results.innerHTML = "Please enter start, destination, and departure time.";
        return;
    }

    let departTime = departHour*60 + departMin;
    let graph = buildGraph();

    if(!graph[start]){ results.innerHTML="Start stop not found."; return; }
    if(!graph[end]){ results.innerHTML="Destination stop not found."; return; }

    // BFS queue: [currentStop, pathSoFar, totalTime, currentRoute, currentTime]
    let queue = [[start, [], 0, null, departTime]];
    let visited = new Set();

    while(queue.length){
        queue.sort((a,b)=>a[2]-b[2]); // prioritize fastest total time
        let [current, path, timeTotal, currentRoute, currentTime] = queue.shift();

        if(current === end){
            displayJourneyAtTime(path, timeTotal);
            return;
        }

        let visitKey = current + "-" + currentRoute;
        if(visited.has(visitKey)) continue;
        visited.add(visitKey);

        for(let edge of graph[current]){
            let routeObj = routes.find(r=>r.number===edge.route);
            if(!routeObj) continue;

            // time to wait until next bus at current stop
            let interval = getInterval(routeObj, currentTime);
            let timeToWait = 0;
            if(currentRoute !== edge.route) timeToWait += interval; // transfer wait
            let stepTime = interval; // estimated travel to next stop

            queue.push([
                edge.to,
                [...path,{
                    from: current,
                    to: edge.to,
                    route: edge.route,
                    stopIndex: edge.stopIndex,
                    stepTime: stepTime
                }],
                timeTotal + stepTime + timeToWait,
                edge.route,
                currentTime + stepTime + timeToWait
            ]);
        }
    }

    results.innerHTML = "No route found.";
}

// Display journey with stop numbers and estimated time
function displayJourneyAtTime(path, totalTime){
    let results = document.getElementById("results");
    results.innerHTML = "";

    if(path.length === 0){
        results.innerHTML = "You are already at the destination.";
        return;
    }

    let cumulativeTime = 0;
    path.forEach(step=>{
        cumulativeTime += step.stepTime;
        let div = document.createElement("div");
        div.innerHTML = `${step.route} - ${step.stopIndex}. ${step.to} (Estimated +${step.stepTime} mins, Total: ${cumulativeTime} mins)`;
        results.appendChild(div);
    });

    let totalDiv = document.createElement("div");
    totalDiv.style.marginTop = "10px";
    totalDiv.innerHTML = `<b>Total estimated journey time: ${totalTime} mins</b>`;
    results.appendChild(totalDiv);
}
