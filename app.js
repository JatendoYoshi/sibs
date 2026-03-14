function showDepartures(){

let stop=document.getElementById("stopBoard").value.trim()
let board=document.getElementById("departureBoard")

board.innerHTML=""

if(!stop){
board.innerHTML="Enter a stop."
return
}

let now=new Date()
let minutesNow=now.getHours()*60+now.getMinutes()

routes.forEach(route=>{

if(route.stops.includes(stop)){

let routeDiv=document.createElement("div")

routeDiv.innerHTML=`<h3>Route ${route.number}</h3>`

// realtime departures
let departures=document.createElement("div")

for(let i=1;i<=5;i++){

let mins=i*route.interval
let dep=document.createElement("div")

dep.innerHTML=`Bus in <b>${mins}</b> mins`

departures.appendChild(dep)

}

routeDiv.appendChild(departures)


// timetable section
let timetable=document.createElement("div")

timetable.style.marginTop="10px"

timetable.innerHTML=
`
<b>Timetable</b><br>
Morning: every ${route.interval} mins<br>
Daytime: every ${route.interval} mins<br>
Evening: every ${route.interval*2} mins
`

routeDiv.appendChild(timetable)

board.appendChild(routeDiv)

}

})

if(board.innerHTML===""){
board.innerHTML="No routes serve this stop."
}

}
