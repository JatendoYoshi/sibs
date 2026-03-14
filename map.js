const canvas=document.getElementById("mapCanvas")
const ctx=canvas.getContext("2d")

canvas.width=900
canvas.height=400

function drawMap(){

ctx.clearRect(0,0,canvas.width,canvas.height)

routes.forEach((route,i)=>{

ctx.beginPath()

let y=20+i*10

ctx.moveTo(50,y)
ctx.lineTo(850,y)

ctx.stroke()

ctx.fillText(route.number,20,y)

})

}

drawMap()
