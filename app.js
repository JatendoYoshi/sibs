function showDepartures(){

let stop=document.getElementById("stopBoard").value.trim()
let board=document.getElementById("departureBoard")

board.innerHTML=""

if(!stop){
board.innerHTML="Enter a stop."
return
}

let now=new Date()
let currentMinutes=now.getHours()*60+now.getMinutes()

let departures=[]

routes.forEach(route=>{

if(route.stops.includes(stop)){

for(let i=1;i<=3;i++){

let depTime=currentMinutes + (route.interval*i)

departures.push({
route:route.number,
minutes:route.interval*i
})

}

}

})

if(departures.length===0){
board.innerHTML="No routes serve this stop."
return
}

departures.sort((a,b)=>a.minutes-b.minutes)

departures.forEach(dep=>{

let div=document.createElement("div")

div.innerHTML=
`Bus <span class="routeBadge">${dep.route}</span> – ${dep.minutes} mins`

board.appendChild(div)

})

}
