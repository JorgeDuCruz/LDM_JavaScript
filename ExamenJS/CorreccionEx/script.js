let aciertos = document.querySelector("#aciertos")
let fallos = document.querySelector("#fallos")

let reset = document.querySelector("#reset")

let vaso1 = document.querySelector("#vaso1")
let vaso2 = document.querySelector("#vaso2")
let vaso3 = document.querySelector("#vaso3")

let xogou = false
let posicionMoeda = agocharMoeda()
let contadorAcertos = 0
let contadorFallos = 0

console.log(posicionMoeda)

let vasos= [vaso1,vaso2,vaso3]

for (vaso of vasos){
    vaso.addEventListener("click",comprobarVaso)
}

// vaso1.addEventListener("click",comprobarVaso1)
// vaso2.addEventListener("click",comprobarVaso2)
// vaso3.addEventListener("click",comprobarVaso3)
reset.addEventListener("click",resetear)

function agocharMoeda(){
    return (Math.floor(Math.random()*3))
}


function comprobarVaso(){
    if(xogou==false){
        if(vasos[posicionMoeda].id==this.id){
            contadorAcertos++
            aciertos.innerHTML = "ACIERTOS: "+contadorAcertos
            this.src="moneda.png"
        }
        else{
            contadorFallos++
            fallos.innerHTML = "FALLOS: "+contadorFallos
            this.style.visibility = "hidden"
        }
        xogou= true
    }
}
// function comprobarVaso1(){
//     if(xogou==false){
//         if (posicionMoeda==0){
//             contadorAcertos++
//             aciertos.innerHTML = "ACIERTOS: "+contadorAcertos
//             vaso1.src="moneda.png"
//         }
//         else{
//             contadorFallos++
//             fallos.innerHTML = "FALLOS: "+contadorFallos
//             vaso1.style.visibility = "hidden"
//         }
//         xogou=true
//     }
// }

// function comprobarVaso2(){
//     if(xogou==false){
//         if (posicionMoeda==1){
//             contadorAcertos++
//             aciertos.innerHTML = "ACIERTOS: "+contadorAcertos
//             vaso2.src="moneda.png"
//         }
//         else{
//             contadorFallos++
//             fallos.innerHTML = "FALLOS: "+contadorFallos
//             vaso2.style.visibility = "hidden"
//         }
//         xogou=true
//     }
// }

// function comprobarVaso3(){
//     if(xogou==false){
//         if (posicionMoeda==2){
//             contadorAcertos++
//             aciertos.innerHTML = "ACIERTOS: "+contadorAcertos
//             vaso3.src="moneda.png"
//         }
//         else{
//             contadorFallos++
//             fallos.innerHTML = "FALLOS: "+contadorFallos
//             vaso3.style.visibility = "hidden"
//         }
//         xogou=true
//     }
// }

function resetear(){
    posicionMoeda=agocharMoeda()
    xogou=false

    vaso1.src="vaso.jpg"
    vaso2.src="vaso.jpg"
    vaso3.src="vaso.jpg"

    vaso1.style.visibility = "visible"
    vaso2.style.visibility = "visible"
    vaso3.style.visibility = "visible"

}