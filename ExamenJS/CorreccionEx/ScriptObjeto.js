let Nombre = document.querySelector("#Nombre")
let Apelido = document.querySelector("#Apelido")
let Luchador = document.querySelector("#Luchador")
const boton = document.querySelector("#Boton")
let presentacion = document.querySelector("#presentacion")

// const listaNombres = ["Pantera","Muerte","Barriga","Tormenta","Máscara","Nalga","gacela","Tempestad","Sombra","Barba","Gacela","Bestia","Venganza","Capibara","Florecilla","Águila","Juventud","Estrella","Serpiente","Fuerza","Masacre","Niebla","Masa","Greña","Pesadilla","Quimera"]
// const listaApelidos = ["Desnuda","Dorada","Sanguinaria","Letal","sexy","Demoníaca","Flácida","Implacable","Destructora","Veloz","Plateada","Suicida","Bailonga","Mugrienta","Amorosa","Infernal","del Espacio","Salvaje","Fornida","Colosal","Feroz","del Abismo","Rocosa","Fiestera","Fantasmal","Voladora"]
// const Abecedario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

let objetoDatos = {
    A:{nome:"Pantera",apelido:"Desnuda"},
    B:{nome:"Muerte",apelido:"Dorada"},
    C:{nome:"Barriga",apelido:"Sanguinaria"}
}

boton.addEventListener("click",generarNombre)

function generarNombre(){
    let letra1 = Nombre.value[0].toUpperCase()
    let letra2 = Apelido.value.charAt(0).toUpperCase()

    
    let nombreLuchador = objetoDatos[letra1].nome
    let apelidoLuchador = objetoDatos[letra2].apelido
    
    
    Luchador.innerHTML=nombreLuchador+" "+apelidoLuchador
    presentacion.style="visibility: visible;"
    
}