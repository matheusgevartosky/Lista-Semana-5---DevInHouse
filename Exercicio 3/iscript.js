const dados = []
var nome = "";

//var ul = document.getElementsByClassName('retorno')

const DATA = "https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000";

fetch(DATA)
  .then(function (rawData) {
    return rawData.json();
  })
  .then(function (json) {
    trataDados(json)
  })   
const trataDados = (item) =>{
    for(let i of item){
        dados.push(i.nome)
    }
}


const input = document.querySelector('.search ')
input.addEventListener('keypress', (e) => {
     if(e.keyCode === 8 ){
        nome = nome.length(0, -1)
        console.log(nome)
    }else{
        nome = nome + e.key
        montaTela(nome)
        console.log(nome)
   
}})



function montaTela(){
    dados.filter((nome) => {
        console.log(nome)
    })
}


    



