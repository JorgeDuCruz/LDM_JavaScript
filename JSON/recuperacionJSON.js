const generar = document.querySelector("#boton")
generar.addEventListener("click",generarPokemon)
let texto = document.querySelector("#pokemon")

let normal = document.querySelector("#normal")
let bug = document.querySelector("#bug")
let ice = document.querySelector("#ice")
let fire = document.querySelector("#fire")
let water = document.querySelector("#water")
let dark = document.querySelector("#dark")
let fairy = document.querySelector("#fairy")
let ghost = document.querySelector("#ghost")
let grass = document.querySelector("#grass")
let ground = document.querySelector("#ground")
let rock = document.querySelector("#rock")
let steel = document.querySelector("#steel")
let poison = document.querySelector("#poison")
let flying = document.querySelector("#flying")
let fighting = document.querySelector("#fighting")
let psychic = document.querySelector("#psychic")
let dragon = document.querySelector("#dragon")
let electric = document.querySelector("#electric")

let tipos = [normal,bug,ice,fairy,fighting,fire,flying,water,dark,dragon,ghost,grass,ground,rock,steel,poison,psychic,electric]


let tipoSeleccionado=""
function generarPokemon(){
    //Comprobacion del tipo elegido
    for (let tipo of tipos){
        if(tipo.checked==true){
            tipoSeleccionado=tipo.value
        }
    }

    console.log(tipoSeleccionado)
    //llamada a la API
    //fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`) no funciona con esta linea porque el formato no esta del todo bien, probablemente
    fetch('https://pokeapi.co/api/v2/type/'+tipoSeleccionado)
    .then(respuestaCorrecta)
    .catch(respuestaIncorrecta)
}



function respuestaCorrecta(respuesta){
    respuesta.json().then(imprimeData)
}

function respuestaIncorrecta(){
    console.log("NO Funcione")
}

function imprimeData(respuesta){
    texto.innerHTML=respuesta.pokemon[Math.floor(Math.random()*respuesta.pokemon.length)].pokemon.name
}

