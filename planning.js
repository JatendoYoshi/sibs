function buildGraph(){

let graph={}

routes.forEach(route=>{

let stops=["Central","Southern","Northern Interchange","Sunshine Station","Norton Town Center"]

for(let i=0;i<stops.length-1;i++){

if(!graph[stops[i]]) graph[stops[i]]=[]

graph[stops[i]].push({
to:stops[i+1],
route:route.number,
time:5
})

}

})

return graph
}

function planJourney(){

let start=document.getElementById("startStop").value
let end=document.getElementById("endStop").value

let graph=buildGraph()

let queue=[[0,start,[]]]
let visited={}

while(queue.length){

queue.sort((a,b)=>a[0]-b[0])

let [time,node,path]=queue.shift()

if(node===end){
displayJourney(path)
return
}

if(visited[node]) continue
visited[node]=true

for(let edge of (graph[node]||[])){

queue.push([
time+edge.time,
edge.to,
[...path,edge]
])

}

}

alert("No route found")

}

function displayJourney(path){

let div=document.getElementById("results")
div.innerHTML=""

path.forEach(step=>{

let el=document.createElement("div")

el.innerHTML=
`Take <span class="routeBadge">${step.route}</span>
from ${step.from||""} → ${step.to}`

div.appendChild(el)

})

}
