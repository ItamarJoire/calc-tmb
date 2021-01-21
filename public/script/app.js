var gen = document.querySelector('input[name="genero"]');
var idade = document.getElementById("idade");
var pesoAtual = document.getElementById("peso-atual");
var altura = document.getElementById("altura");
var nivelAtividade = document.getElementById("atividade");

function calc(){
    var formulaMasculina = ((10 * pesoAtual.value) + (6.25 * altura.value) - (5 * idade.value) + 5); 
    var formulaFeminina = ((10 * pesoAtual.value) + (6.25 * altura.value) - (5 * idade.value) - 161); 

    if(gen.checked){
       let tmb = formulaMasculina;
       console.log("Seu tmb é: " + tmb);

        switch(nivelAtividade.value){
            case 'sedentario':
                console.log("Seu TMB sem atividade física: " + Math.trunc(tmb * 1.375));
                break;
            case 'poucoativo':
                console.log("Seu TMB sendo pouco ativo: " + Math.trunc(tmb * 1.55));
                break;
            case 'ativo':
                console.log("Seu TMB sendo Ativo: " + Math.trunc(tmb * 1.725));
                break;
            case 'muitoativo':
                console.log("Seu TMB sendo Muito ativo - Atleta: " + Math.trunc(tmb * 1.9));
                break;
            default:
                console.log("Não selecionou nenhum nível de atividade!");
        }
    }else{
        let tmb = formulaFeminina;
        console.log("Sem tmb fem é: " + tmb);

        switch(nivelAtividade.value){
            case 'sedentario':
                console.log("Seu TMB sem atividade física: " + Math.trunc(tmb * 1.375));
                break;
            case 'poucoativo':
                console.log("Seu TMB sendo pouco ativo: " + Math.trunc(tmb * 1.55));
                break;
            case 'ativo':
                console.log("Seu TMB sendo Ativo: " + Math.trunc(tmb * 1.725));
                break;
            case 'muitoativo':
                console.log("Seu TMB sendo Muito ativo - Atleta: " + Math.trunc(tmb * 1.9));
                break;
            default:
                console.log("Não selecionou nenhum nível de atividade!");
        }
    }
}
