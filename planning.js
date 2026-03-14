function getInterval(route){

let hour = new Date().getHours()

if(hour>=7 && hour<=9) return route.timetable.peak
if(hour>=16 && hour<=18) return route.timetable.peak

return route.timetable.offpeak

}

function buildGraph(){

let graph={}

routes.forEach(route=>{

for(let i=0;i<route.stops.length-1;i++){

let a=route.stops[i]
let b=route.stops[i+1]

if(!graph[a]) graph[a]=[]
if(!graph[b]) graph[b]=[]

graph[a].push({
to:b,
route:route.number,
wait:getInterval(route)
})

graph[b].push({
to:a,
route:route.number,
wait:getInterval(route)
})

}

})

return graph
}

function planJourney(){

let start=document.getElementById("startStop").value.trim()
let end=document.getElementById("endStop").value.trim()
let results=document.getElementById("results")

results.innerHTML=""

let graph=buildGraph()

if(!graph[start]){
results.innerHTML="Start stop not found."
return
}

if(!graph[end]){
results.innerHTML="Destination stop not found."
return
}

let queue=[[start,0,[]]]
let visited={}

while(queue.length){

queue.sort((a,b)=>a[1]-b[1])

let [stop,time,path]=queue.shift()

if(stop===end){
displayJourney(path,time)
return
}

if(visited[stop]) continue
visited[stop]=true

for(let edge of graph[stop]){

queue.push([
edge.to,
time+edge.wait,
[...path,{from:stop,to:edge.to,route:edge.route}]
])

}

}

results.innerHTML="No route found."

}

function displayJourney(path,time){

let results=document.getElementById("results")

path.forEach(step=>{

let div=document.createElement("div")

div.innerHTML=
`Take <span class="routeBadge">${step.route}</span>
${step.from} → ${step.to}`

results.appendChild(div)

})

let timeDiv=document.createElement("div")
timeDiv.innerHTML=`<b>Total estimated time: ${time} minutes</b>`

results.appendChild(timeDiv)

}
