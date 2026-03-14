function showDepartures(){

let stop=document.getElementById("stopBoard").value
let board=document.getElementById("departureBoard")

board.innerHTML=""

let now=new Date()

routes.forEach(route=>{

for(let i=0;i<5;i++){

let time=new Date(now.getTime()+i*route.interval*60000)

let el=document.createElement("div")

el.innerHTML=
`Bus <b>${route.number}</b> – ${time.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}`

board.appendChild(el)

}

})

}

function toggleTheme(){

document.body.classList.toggle("dark")

}
