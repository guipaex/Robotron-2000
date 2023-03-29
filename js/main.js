const operatorBtn = document.querySelectorAll("[data-controle]")
const stats = document.querySelectorAll("[data-stats]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

operatorBtn.forEach( btn => {
    //on click, capture the content of clicked target
    btn.addEventListener('click', (e) => {
        manipulaDados(e.target.dataset.controle, e.target.parentNode)
        statsUpdate(e.target.dataset.peca)
    })
})


function manipulaDados(operacao, controle){
    const inputs = controle.querySelector("[data-contador]")

    if(operacao === "-" && inputs.value > 0){
        inputs.value = parseInt(inputs.value) - 1 ;
    }else if (operacao === "+"){
        inputs.value = parseInt(inputs.value) + 1 ;
    }
}

function statsUpdate(peca){
    console.log(peca)
}