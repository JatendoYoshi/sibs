function getInterval(route){
    let hour=new Date().getHours();
    if(hour>=7 && hour<=9) return route.timetable.peak || 10;
    if(hour>=16 && hour<=18) return route.timetable.peak || 10;
    return route.timetable.offpeak || 15;
}

function buildGraph(){
    let graph={};
    routes.forEach(route=>{
        for(let i=0;i<route.stops.length-1;i++){
            let a=route.stops[i];
            let b=route.stops[i+1];
            if(!graph[a]) graph[a]=[];
            if(!graph[b]) graph[b]=[];
            graph[a].push({to:b,route:route.number,wait:getInterval(route)});
            graph[b].push({to:a,route:route.number,wait:getInterval(route)});
        }
    });
    return graph;
}

function planJourney(){
    let start=document.getElementById("startStop").value.trim();
    let end=document.getElementById("endStop").value.trim();
    let results=document.getElementById("results");
    results.innerHTML="";
    if(!start||!end){results.innerHTML="Please enter both stops."; return;}
    let graph=buildGraph();
    if(!graph[start]){results.innerHTML="Start stop not found."; return;}
    if(!graph[end]){results.innerHTML="Destination stop not found."; return;}

    let queue=[[start,[],0]];
    let visited=new Set();
    while(queue.length){
        let [current,path,time]=queue.shift();
        if(current===end){displayJourney(path,time); return;}
        if(visited.has(current)) continue;
        visited.add(current);
        for(let edge of graph[current]){
            queue.push([edge.to,[...path,{from:current,to:edge.to,route:edge.route}],time+edge.wait]);
        }
    }
    results.innerHTML="No route found.";
}

function displayJourney(path,time){
    let results=document.getElementById("results");
    results.innerHTML="";
    if(path.length===0){results.innerHTML="You are already at the destination."; return;}
    path.forEach(step=>{
        let div=document.createElement("div");
        div.innerHTML=`Take <span class="routeBadge">${step.route}</span> <b>${step.from}</b> → <b>${step.to}</b>`;
        results.appendChild(div);
    });
    let timeDiv=document.createElement("div");
    timeDiv.style.marginTop="10px";
    timeDiv.innerHTML=`<b>Total estimated time: ${time} mins</b>`;
    results.appendChild(timeDiv);
}
