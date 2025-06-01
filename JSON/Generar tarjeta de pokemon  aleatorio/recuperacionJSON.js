//Variables para acceder a las distintas partes de la terjeta de resultado
const generar = document.querySelector("#boton")
generar.addEventListener("click",generarPokemon)
let nombrePokemon = document.querySelector("#pokemon-name")
let fotoPokemon = document.querySelector("#pokemon-sprite")
let generacionPokemon = document.querySelector("#pokemon-generation")
let vidaPokemon = document.querySelector("#stat-hp")
let ataquePokemon = document.querySelector("#stat-attack")
let ataqueEsPokemon = document.querySelector("#stat-special-attack")
let defensaPokemon = document.querySelector("#stat-defense")
let defensaEsPokemon = document.querySelector("#stat-special-defense")
let velocidadPokemon = document.querySelector("#stat-speed")
let totalPokemon = document.querySelector("#stat-total")
let tiposPokemon = document.querySelector("#pokemon-types")

//Variables para comprobar los botones de los tipos
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

let tipos = [normal,bug,ice,fairy,fighting,fire,flying,water,dark,dragon,ghost,grass,ground,rock,steel,poison,psychic,electric]//array con los botones de los distintos tipos 

let tipoSeleccionado="" // variable para guardar que tipo fue seleccionado
function generarPokemon(){
    //Comprobacion del tipo elegido
    for (let tipo of tipos){
        if(tipo.checked==true){
            tipoSeleccionado=tipo.value
        }
    }

    //console.log(tipoSeleccionado)
    //llamada a la API
    //fetch(`https://pokeapi.co/api/v2/type/${tipoSelecionado}`) no funciona con esta linea porque el formato no esta del todo bien, probablemente
    fetch('https://pokeapi.co/api/v2/type/'+tipoSeleccionado)
    .then(respuestaCorrecta)
    .catch(respuestaIncorrecta)
}


//Funcion para confirmar los datos del tipo elegido proporcionados por la API
function respuestaCorrecta(respuesta){
    respuesta.json().then(elegirPokemon)
}

//Funcion para llamar cuando una llamada a la API no se conecte
function respuestaIncorrecta(){
    console.log("NO Funcione")
}

let pokemon // variable para guardar el pokemon elegido
function elegirPokemon(respuesta){
    pokemon = respuesta.pokemon[Math.floor(Math.random()*respuesta.pokemon.length)] // elige un pokemon de la lista proporcionada por el tipo elegido
    nombrePokemon.innerHTML=pokemon.pokemon.name //Escribe en la tarjeta el nombre de pokemon seleccionado
    buscarPokemon(pokemon)//Buscar el resto de datos del pokemon
}

//Funcion que llama a la API para recibir los datos del pokemon elegido
function buscarPokemon(pokemon){
    fetch(pokemon.pokemon.url).then(confirmarPokemon).catch(respuestaIncorrecta)
}

//Funcion que confirma los datos del pokemon proporcionados por la API 
function confirmarPokemon(respuesta){
    respuesta.json().then(escribirPokemon)
}

//Funcion para escribir los datos del pokemon en la tarjeta del pokemon
function escribirPokemon(pokemonRespuesta){
    //console.log(pokemonRespuesta)
    let stats = pokemonRespuesta.stats // Crea un Array con las estadisticas base del pokemon elegido

    vidaPokemon.innerHTML = stats[0].base_stat //Escribe los puntos base de la estadistica de PS del pokemon
    ataquePokemon.innerHTML = stats[1].base_stat //Escribe los puntos base de la estadistica de Ataque del pokemon
    defensaPokemon.innerHTML = stats[2].base_stat //Escribe los puntos base de la estadistica de Defensa del pokemon
    ataqueEsPokemon.innerHTML = stats[3].base_stat //Escribe los puntos base de la estadistica de Ataque especial del pokemon
    defensaEsPokemon.innerHTML = stats[4].base_stat //Escribe los puntos base de la estadistica de Defensa especial del pokemon
    velocidadPokemon.innerHTML = stats[5].base_stat //Escribe los puntos base de la estadistica de Velocidad del pokemon

    let stats_total=0
    for (let stat of stats){
        stats_total+=stat.base_stat
    }
    totalPokemon.innerHTML=stats_total//Escribe la suma de todos los puntos de las estadisticas base

    fotoPokemon.src = pokemonRespuesta.sprites.front_default // Escribe el sprite del pokemon en la tarjeta
    
    tiposPokemon.innerHTML='' // vacia los tipos en caso de que haya habido un tipo antes
    buscarTipos(pokemonRespuesta) // Busca los nombres en español de los tipos del pokemon

    buscarFormaPokemon(pokemonRespuesta) // Busca la generacion en la que se introdujo la especie base del pokemon
     // Esto hace que si el pokemon es una forma regional, megaEvolucion o similares establecera la generacion del pokemon original
}

// Funcion que llama a la API para recibir la informacion de los tipos del pokemon
function buscarTipos(pokemon){
    for (let tipo of pokemon.types){// For que recorre los tipos del pokemon en caso de que tenga mas de uno
        fetch(tipo.type.url).then(confirmarTipo).catch(respuestaIncorrecta)//Llamda a la API
    }
}

//Funcion para confirmar los datos del tipo proporcionados por la API
function confirmarTipo(tipoRespuesta){
    tipoRespuesta.json().then(escrbirTipos)
}

//Funcion que escribe los tipos del pokemon en español
function escrbirTipos(tipo){
    tiposPokemon.innerHTML += "<span class=\"pokemon-type\">"+tipo.names[5].name+"</span>"//Crea un span dentro de un div del html que tiene un estilo asociado en el css
    //Tipo.names es un array que contiene objetos con los nombres del tipo elegido en diferentes idiomas y el objeto con indice 5 es el español
    //El .name es la clave del objeto donde esta el nombre
}

//Funcion para llamar a la API de la forma de un pokemon para hallar su generacion
function buscarFormaPokemon(pokemon){
    console.log(pokemon)
    fetch(pokemon.forms[0].url).then(confirmarForma).catch(respuestaIncorrecta) //forms es siempre un array con la posicion 0 siendo la posicion de la forma que buscamos
}

//Funcion que confirma los datos de la forma del pokemon proporcionados por la API
function confirmarForma(forma){
    //console.log(forma.json())
    forma.json().then(buscarVersion)
}

//Funcion que busca en que version fue introducida la forma del pokemon
function buscarVersion(forma){
    //console.log(forma.version_group.url)
    fetch(forma.version_group.url).then(confirmarVersion).catch(respuestaIncorrecta)// llamamos a la API para ver en que version se introdujo la forma
}

//Funcion que confirma los datos de la version proporcionados por la API 
function confirmarVersion(version){
    //console.log(version.json())
    version.json().then(escribirGeneracion)
    //console.log("Despues de version")
}

//Funcion que escribe en que generacion fue introducido el pokemon
function escribirGeneracion(version){
    //console.log("Antes de version")
    let generacion = (version.generation.name).toUpperCase().split("-")[1] /*Separa la informacion de la API en un Array que contien: la palabra generation y
                                                                            la generacion en la que el pokemon fue introducido en numeros romanos y en mayusculas.
                                                                            Finalmente elige la parte donde está la generacion en numeros romanos*/
    generacionPokemon.innerHTML = "Generación "+generacion //Escribe la generacion en la que fue introducida la especie del pokemon en la tarjeta del pokemon
}