let numDados = document.querySelector("#numDados")
let bTirar = document.querySelector("#Tirar")
let dados = document.querySelector("#dados")
let Total = document.querySelector("#Total")

bTirar.addEventListener("click",TirarDadoAuxiliar)

function TirarDadoAuxiliar(){
    console.log(numDados)
    TirarDados(numDados.value)
}

function TirarDados(numDados){
    console.log(2)
    dados.innerHTML=""
    let dado
    let borrador
    let total=0
    for (i=0;i<numDados;i++){
        dado = Math.floor(Math.random()*6)+1
        total=total+dado
        dado = "<img id = \"dado"+i+"\"src=\"Dice/diceRedAlt"+dado+".png\" style=\"width: 128px;height: 128px;margin: 5px;\">"
        dados.innerHTML = dados.innerHTML + dado
    }
    Total.innerHTML = "<h1>Total = "+total+"</h1>"
}