function buildGraph(){

let graph={}

routes.forEach(route=>{

for(let i=0;i<route.stops.length-1;i++){

let a=route.stops[i]
let b=route.stops[i+1]

if(!graph[a]) graph[a]=[]
if(!graph[b]) graph[b]=[]

graph[a].push({stop:b,route:route.number})
graph[b].push({stop:a,route:route.number})

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
results.innerHTML="Please enter both stops."
return
}

let graph=buildGraph()

if(!graph[start]){
results.innerHTML="Start stop not recognised."
return
}

if(!graph[end]){
results.innerHTML="Destination stop not recognised."
return
}

let queue=[[start,[]]]
let visited=new Set()

while(queue.length){

let [current,path]=queue.shift()

if(current===end){
displayJourney(path)
return
}

if(visited.has(current)) continue
visited.add(current)

let edges=graph[current]||[]

edges.forEach(edge=>{

queue.push([
edge.stop,
[...path,{from:current,to:edge.stop,route:edge.route}]
])

})

}

results.innerHTML="No route found."
}

function displayJourney(path){

let results=document.getElementById("results")
results.innerHTML=""

if(path.length===0){
results.innerHTML="You are already there."
return
}

path.forEach(step=>{

let div=document.createElement("div")

div.innerHTML=
`Take <span class="routeBadge">${step.route}</span>
from <b>${step.from}</b> → <b>${step.to}</b>`

results.appendChild(div)

})

}
