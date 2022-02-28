//SELETORES
// pode colocar ".secaoDetalhesConta_sobreSaldo button" que é a classe ou "#btnExtrato" que é o id do botão Extrato;
// para mudar o valor do botão, ex. -> buttonExtrato.innerText = "Bruna", mudará o nome dentro do botão;
//const button = document.querySelector()
//const button = document.querySelectorAll()
//const button = document.getElementById()

//CRIANDO ELEMENTOS NO JS
//const body = document.querySelector("body")
//const tagButton = document.createElement("button")
//tagButton.innerText = "Extrato 2"

//body.appendChild(tagButton)


//CRIANDO LISTA DE NOMES
/*let filaAtendimento = ["Vitor", "Hugo", "Bruna", "Maria", "Daniel"]

//listaNomes é o nome da classe do ul onde vai ser inserida a lista
const lista = document.querySelector(listaNomes)


for(let i=0; i<filaAtendimento.length; i++) {
    //CRIANDO UMA LI
    const liNome = document.createElement("li")

    //ALIMENTO ESSA LI COM CADA NOME
    liNome.innerText = filaAtendimento[i]

    lista.appendChild(liNome)

}
*/

//EVENTOS
// para pegar um dado que entra no input que está na tela: 
//1 SELECIONAR INPUT
    // A) PEGAR O VALOR DO CAMPO
//2 ADD UM EVENTO NO BOTÃO/CLIQUE
//3 GUARDAR O VALOR EM ALGUM LUGAR
//4 SELECIONAR A LISTA
//5 CRIAR A LI(ITEM DA LISTA)
//6 ALIMENTAR COM O VALOR DO INPUT
//7 JOGAR PARA DENTRO DA LISTA

//SELECIONANDO O BUTTON DO HTML
const btnAdicionar = document.querySelector(".btnAdicionar")

//SELECIONANDO A LISTA DE NOMES
const ol = document.querySelector("ol")

//INTERCEPTANDO EVENTO NO BUTTON
btnAdicionar.addEventListener("click", pegarValores)

//FUNÇÃO QUE VAI EXECUTAR
function pegarValores() {

    //SELECIONA O INPUT
    const inputTexto = document.querySelector(".inputText")

    //PEGANDO O VALOR DO INPUT
    const valorInput = inputTexto.value

    //CRIANDO LI PARA ALIMENTAR A LISTA
    const li = document.createElement("li")

    //ALIMENTAR COM O VALOR DO CAMPO
    li.innerText = valorInput

    //ADICIONAR O LI COM AS INFORMAÇÕES NA LISTA
    ol.appendChild(li)


}
