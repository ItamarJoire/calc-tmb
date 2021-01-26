var gen = document.querySelector('input[name="genero"]');
var idade = document.getElementById("idade");
var pesoAtual = document.getElementById("peso-atual");
var altura = document.getElementById("altura");
var nivelAtividade = document.getElementById("atividade");

var cards = document.querySelector(".hero-card");
cards.style.display = "none";

var cardOne = document.querySelector(".fundo-1");
var cardTwo = document.querySelector(".fundo-2");
var cardThree = document.querySelector(".fundo-3");

function calc(){
    checkInputs(); 
}

function checkInputs(){
    if((idade.value != '') && (pesoAtual.value != '') && (altura.value != '')){
        calcPermitido();
    }else{
        inputVazio();
    }
}

function calcPermitido(){

    var formulaMasculina = ((10 * pesoAtual.value) + (6.25 * altura.value) - (5 * idade.value) + 5); 
    var formulaFeminina = ((10 * pesoAtual.value) + (6.25 * altura.value) - (5 * idade.value) - 161); 

    if(gen.checked){
        let TaxaMetabolicaBasal = formulaMasculina;
        cards.style.display = "block";
        cardOne.innerHTML = `<p class="tmb">Sua taxa metabólica basal é de <strong class="name-white">${Math.trunc(TaxaMetabolicaBasal)} calorias por dia</strong></p>`

        cardTwo.innerHTML = `<p class="tmb">Sua taxa metabólica basal é de <strong class="name-white">${Math.trunc(TaxaMetabolicaBasal)} calorias por dia</strong></p>`

        cardThree.innerHTML = `<p class="tmb">Sua taxa metabólica basal é de <strong class="name-white">${Math.trunc(TaxaMetabolicaBasal)} calorias por dia</strong></p>`

        addNivelAtividade(TaxaMetabolicaBasal);
        
    }else{
        let TaxaMetabolicaBasal = formulaFeminina;
        resultado.innerHTML = `<tr><td> Sua TMB é:</td><td>${Math.trunc(TaxaMetabolicaBasal)}</td>`

        addNivelAtividade(TaxaMetabolicaBasal);
    }
}

function inputVazio(){
    alert("Peencha todos os campos, por favor!");
}


function addNivelAtividade(tmb){
    switch(nivelAtividade.value){
        case 'sedentario':
            let proteina = Math.trunc(2.3 * pesoAtual.value);
            let gordura = Math.trunc(0.8 * pesoAtual.value);
            let carboidrato = Math.trunc((tmb - (proteina * 4) - (gordura * 9)) / 4);
            cardOne.innerHTML += `<p class="consumo"> Consumir <strong class="name-white">${Math.trunc(tmb * 1.2)} calorias por dia</strong> para manter o peso com os seguintes macronutrientes:</p>
            <ul class="macros"> 
                <li><strong class="name-white">${proteina}g</strong> de proteínas</li>
                <li><strong class="name-white">${gordura}g</strong> de gorduras</li>
                <li><strong class="name-white">${carboidrato}g</strong> de carboidratos</li>
            </ul>
            `
            cardTwo.innerHTML += `<p class="consumo"> Consumir <strong class="name-white">${Math.trunc(tmb * 1.2)} calorias por dia</strong> para perder peso com os seguintes macronutrientes:</p>
            <ul class="macros"> 
                <li><strong class="name-white">${Math.trunc(2 * pesoAtual.value)}g</strong> de proteínas</li>
                <li><strong class="name-white">${Math.trunc(0.8 * pesoAtual.value)}g</strong> de gorduras</li>
                <li><strong class="name-white">${Math.trunc(3 * pesoAtual.value)}g</strong> de carboidratos</li>
            </ul>
            `

            cardThree.innerHTML += `<p class="consumo"> Consumir <strong class="name-white">${Math.trunc(tmb * 1.2)} calorias por dia</strong> para perder peso com os seguintes macronutrientes:</p>
            <ul class="macros"> 
                <li><strong class="name-white">${Math.trunc(2 * pesoAtual.value)}g</strong> de proteínas</li>
                <li><strong class="name-white">${Math.trunc(0.8 * pesoAtual.value)}g</strong> de gorduras</li>
                <li><strong class="name-white">${Math.trunc(3 * pesoAtual.value)}g</strong> de carboidratos</li>
            </ul>
            `




        case 'poucoativo':
            resultado.innerHTML += `<tr><td> Sua Taxa metabólica basal sendo POUCO ATIVO é: </td><td>${Math.trunc(tmb * 1.55)}</td>`
            break;
        case 'ativo':
            resultado.innerHTML += `<tr><td> Sua Taxa metabólica basal sendo ATIVO é: </td><td>${Math.trunc(tmb * 1.725)}</td>`
            break;
        case 'muitoativo':
            resultado.innerHTML += `<tr><td> Sua Taxa metabólica basal sendo MUITO ATIVO é: </td><td>${Math.trunc(tmb * 1.9)}</td>`
            break;
        default:
            console.log("Não selecionou nenhum nível de atividade!");
    }
}



