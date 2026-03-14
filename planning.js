function buildGraph(){

let graph = {}

routes.forEach(route=>{

for(let i=0;i<route.stops.length-1;i++){

let a = route.stops[i]
let b = route.stops[i+1]

if(!graph[a]) graph[a]=[]
if(!graph[b]) graph[b]=[]

graph[a].push({to:b,route:route.number})
graph[b].push({to:a,route:route.number})

}

})

return graph
}

function planJourney(){

let start=document.getElementById("startStop").value.trim()
let end=document.getElementById("endStop").value.trim()

let results=document.getElementById("results")
results.innerHTML=""

if(!start||!end){
results.innerHTML="Enter both stops."
return
}

let graph=buildGraph()

if(!graph[start]){
results.innerHTML="Start stop not found."
return
}

if(!graph[end]){
results.innerHTML="Destination stop not found."
return
}

let queue=[[start,[]]]
let visited=new Set()

while(queue.length){

let [stop,path]=queue.shift()

if(stop===end){
displayJourney(path)
return
}

if(visited.has(stop)) continue
visited.add(stop)

for(let edge of graph[stop]){

queue.push([
edge.to,
[...path,{from:stop,to:edge.to,route:edge.route}]
])

}

}

results.innerHTML="No route found."
}

function displayJourney(path){

let results=document.getElementById("results")
results.innerHTML=""

path.forEach(step=>{

let div=document.createElement("div")

div.innerHTML=
`Take <span class="routeBadge">${step.route}</span>
from <b>${step.from}</b> → <b>${step.to}</b>`

results.appendChild(div)

})

}
