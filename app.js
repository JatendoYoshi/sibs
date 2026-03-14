function showDepartures(){

let stop=document.getElementById("stopBoard").value.trim()
let board=document.getElementById("departureBoard")

board.innerHTML=""

let servicesFound=false

routes.forEach(route=>{

if(route.stops.includes(stop)){

servicesFound=true

for(let i=1;i<=5;i++){

let minutes=i*route.interval

let el=document.createElement("div")

el.innerHTML=
`Bus <b>${route.number}</b> – ${minutes} mins`

board.appendChild(el)

}

}

})

if(!servicesFound){

board.innerHTML="No buses found at this stop."

}

}

function toggleTheme(){

document.body.classList.toggle("dark")

}
