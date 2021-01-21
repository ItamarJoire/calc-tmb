var gen = document.querySelector('input[name="genero"]');
var idade = document.getElementById("idade");
var pesoAtual = document.getElementById("peso-atual");
var altura = document.getElementById("altura");
var nivelAtividade = document.getElementById("atividade");

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
        console.log("Seu Taxa metabólica basal é: " + Math.trunc(TaxaMetabolicaBasal));
        
        addNivelAtividade(TaxaMetabolicaBasal);

    }else{
        let TaxaMetabolicaBasal = formulaFeminina;
        console.log("Sua Taxa Metabolica Basal é: " + Math.trunc(TaxaMetabolicaBasal));

        addNivelAtividade(TaxaMetabolicaBasal);
    }
}

function inputVazio(){
    alert("Peencha todos os campos, por favor!");
}

function addNivelAtividade(tmb){
    switch(nivelAtividade.value){
        case 'sedentario':
            console.log("Sua Taxa metabólica basal sem atividade física: " + Math.trunc(tmb * 1.375));
            break;
        case 'poucoativo':
            console.log("Sua Taxa metabólica basal sendo pouco ativo: " + Math.trunc(tmb * 1.55));
            break;
        case 'ativo':
            console.log("Sua Taxa metabólica basal sendo ativo: " + Math.trunc(tmb * 1.725));
            break;
        case 'muitoativo':
            console.log("Sua Taxa metabólica basal sendo muito ativo - Atleta: " + Math.trunc(tmb * 1.9));
            break;
        default:
            console.log("Não selecionou nenhum nível de atividade!");
    }
}

