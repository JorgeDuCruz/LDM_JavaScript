let generador = document.querySelector("#generador")
let excusa = document.querySelector("#excusa")

generador.addEventListener("click",generarExcusa)

function generarExcusa(){
    let quien = ["un pato","Pedro","mi tio","un borracho"]
    let que = ["se comio", "cago","me robo"]
    let como = ["una gallina","5€", "mis partituras de zelda", "un dedo del pie"]
    let comentario =["Fue increible","Fue asqueroso","Nunca vi nada igual"]

   
    excusa.innerHTML="Falté a clase porque "+quien[Math.floor(Math.random()*quien.length)]+" "+que[Math.floor(Math.random()*que.length)]+" "+como[Math.floor(Math.random()*como.length)]+". "+comentario[Math.floor(Math.random()*comentario.length)]
    excusa.style.border="1px solid black"
}