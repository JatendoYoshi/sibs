function getInterval(route){

let hour=new Date().getHours()

if(hour>=7 && hour<=9) return route.timetable.peak
if(hour>=16 && hour<=18) return route.timetable.peak

return route.timetable.offpeak

}

function showDepartures(){

let stop=document.getElementById("stopBoard").value.trim()
let board=document.getElementById("departureBoard")

board.innerHTML=""

let now=new Date()
let minutesNow=now.getHours()*60+now.getMinutes()

let departures=[]

routes.forEach(route=>{

if(route.stops.includes(stop)){

let interval=getInterval(route)

for(let i=1;i<=3;i++){

departures.push({
route:route.number,
minutes:interval*i,
interval:interval
})

}

}

})

departures.sort((a,b)=>a.minutes-b.minutes)

departures.forEach(dep=>{

let div=document.createElement("div")

div.innerHTML=
`Bus <span class="routeBadge">${dep.route}</span> – ${dep.minutes} mins`

board.appendChild(div)

})

if(departures.length===0){
board.innerHTML="No buses serve this stop."
}

showTimetable(stop)

}

function showTimetable(stop){

let board=document.getElementById("departureBoard")

routes.forEach(route=>{

if(route.stops.includes(stop)){

let interval=getInterval(route)

let div=document.createElement("div")

div.style.marginTop="10px"

div.innerHTML=
`<b>Route ${route.number} timetable</b><br>
First bus: ${Math.floor(route.timetable.first/60)}:${route.timetable.first%60}<br>
Last bus: ${Math.floor(route.timetable.last/60)}:${route.timetable.last%60}<br>
Peak interval: ${route.timetable.peak} mins<br>
Off-peak interval: ${route.timetable.offpeak} mins`

board.appendChild(div)

}

})

}
