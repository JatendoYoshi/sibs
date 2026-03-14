function buildGraph(){

let graph = {}

routes.forEach(route => {

for(let i = 0; i < route.stops.length - 1; i++){

let from = route.stops[i]
let to = route.stops[i+1]

if(!graph[from]) graph[from] = []
if(!graph[to]) graph[to] = []

// forward direction
graph[from].push({
to: to,
route: route.number,
time: 5
})

// reverse direction
graph[to].push({
to: from,
route: route.number,
time: 5
})

}

})

return graph
}


function planJourney(){

let start = document.getElementById("startStop").value.trim()
let end = document.getElementById("endStop").value.trim()

let results = document.getElementById("results")
results.innerHTML = ""

if(!start || !end){
results.innerHTML = "Please enter both stops."
return
}

let graph = buildGraph()

if(!graph[start]){
results.innerHTML = "Start stop not found."
return
}

if(!graph[end]){
results.innerHTML = "Destination stop not found."
return
}

let queue = [[0,start,[]]]
let visited = {}

while(queue.length){

queue.sort((a,b)=>a[0]-b[0])

let [time,node,path] = queue.shift()

if(node === end){
displayJourney(path)
return
}

if(visited[node]) continue
visited[node] = true

let edges = graph[node] || []

edges.forEach(edge => {

queue.push([
time + edge.time,
edge.to,
[...path,{from:node,to:edge.to,route:edge.route}]
])

})

}

results.innerHTML = "No route found."
}


function displayJourney(path){

let div = document.getElementById("results")
div.innerHTML = ""

if(path.length === 0){
div.innerHTML = "You are already at the destination."
return
}

path.forEach(step => {

let el = document.createElement("div")

el.innerHTML =
`Take <span class="routeBadge">${step.route}</span> 
from <b>${step.from}</b> → <b>${step.to}</b>`

div.appendChild(el)

})

}
