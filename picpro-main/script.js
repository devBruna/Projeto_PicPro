//1 ADICIONAR IDS NOS BOTÕES
//2 SELECIONAR OS BOTÕES
//3 INTERCEPTAR O EVENTO DE CLIQUE
//4 RECUPERAR O ID ADICIONADO

//SELECIONANDO UL(LISTA)
const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes")

//ADICIONANDO ESCUTADOR DE EVENTOS
listaOpcoes.addEventListener("click", identificarOpcoes)

//EXECUTANDO AÇÃO DEPOIS DO CLIQUE 
function identificarOpcoes(event){
    
    //IDENTIFICANDO ONDE OCORREU O CLIQUE
    const elemento  = event.target

    //VERIFICANDO SE É UM LI 
    if(elemento.tagName == "LI"){

        //RECUPERANDO O ID
        const id = elemento.id
        
        //SELECIONANDO UMA SEÇÃO UTILIZANDO O ID(ESCOLHA DO USUÁRIO)
        const secaoEscolha  = document.querySelector(`div[data-id="${id}"]`)

        //REMOCENDO CLASSE MOSTRAR
        removeClasseShow()
        
        //ADICIONAR UMA CLASSE 
        secaoEscolha.classList.add("show")
    }
}

//FUNÇÃO PARA REMOVER AS CLASSES DAS DIVS  
function removeClasseShow(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("show")

    }
}