var gen = document.querySelector('input[name="genero"]');
var idade = document.getElementById("idade");
var pesoAtual = document.getElementById("peso-atual");
var altura = document.getElementById("altura");
var nivelAtividade = document.getElementById("atividade");

var resultado = document.getElementById("view");

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
        resultado.innerHTML = `<tr><td> Sua TMB é:</td><td>${Math.trunc(TaxaMetabolicaBasal)}</td>`

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
            resultado.innerHTML += `<tr><td> Sua Taxa metabólica basal sem atividade física é: </td><td>${Math.trunc(tmb * 1.375)}</td>`
            break;
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



