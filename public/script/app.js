var gen = document.querySelector('input[name="genero"]');
var idade = document.getElementById("idade");
var pesoAtual = document.getElementById("peso-atual");
var altura = document.getElementById("altura");
var nivelAtividade = document.getElementById("atividade");

var cards = document.querySelector(".hero-card");
cards.style.display = "none";

var cardOne = document.querySelector(".fundo-1");

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
        cardOne.innerHTML = `<p class="tmb">Sua taxa metabólica basal é de <strong class="name-white">${Math.trunc(TaxaMetabolicaBasal)} calorias por dia.</strong></p>`

        addNivelAtividade(TaxaMetabolicaBasal);
        
    }else{
        let TaxaMetabolicaBasal = formulaFeminina;
        cards.style.display = "block";
        cardOne.innerHTML = `<p class="tmb">Sua taxa metabólica basal é de <strong class="name-white">${Math.trunc(TaxaMetabolicaBasal)} calorias por dia.</strong></p>`

        addNivelAtividade(TaxaMetabolicaBasal);
    }
}

function inputVazio(){
    alert("Peencha todos os campos, por favor!");
}



function addNivelAtividade(tmb){
    switch(nivelAtividade.value){
        case 'sedentario':
            var caloriasSedentario = tmb * 1.2;
            var proteina = Math.trunc(2 * pesoAtual.value);
            var gordura = Math.trunc(0.6 * pesoAtual.value);
            var carboidrato = Math.trunc((caloriasSedentario - (proteina * 4) - (gordura * 9)) / 4);
            
            cardOne.innerHTML += `<p class="consumo"> Nível de atividade:<strong class="name-white"> Sedentário.</strong><br> Manter o peso: <strong class="name-white">${Math.trunc(caloriasSedentario)} calorias por dia.</strong><br> Perda de peso: <strong class="name-white">${Math.trunc(caloriasSedentario - 500)} calorias por dia.</p>
            <ul class="macros"> 
                <li>Macronutrientes</li>
                <li><strong class="name-white">${proteina}g</strong> de proteínas.</li>
                <li><strong class="name-white">${gordura}g</strong> de gorduras.</li>
                <li><strong class="name-white">${carboidrato}g</strong> de carboidratos.</li>
            </ul>`
            break;

            case 'leve':
                var caloriasLeve = tmb * 1.375;
                var proteina = Math.trunc(2.1 * pesoAtual.value);
                var gordura = Math.trunc(0.7 * pesoAtual.value);
                var carboidrato = Math.trunc((caloriasLeve - (proteina * 4) - (gordura * 9)) / 4);

                cardOne.innerHTML += `<p class="consumo"> Nível de atividade:<strong class="name-white"> Exercício leve.</strong><br> Manter o peso: <strong class="name-white">${Math.trunc(caloriasLeve)} calorias por dia.</strong><br> Perda de peso: <strong class="name-white">${Math.trunc(caloriasLeve - 500)} calorias por dia.</p>
            <ul class="macros"> 
                <li>Macronutrientes</li>
                <li><strong class="name-white">${proteina}g</strong> de proteínas.</li>
                <li><strong class="name-white">${gordura}g</strong> de gorduras.</li>
                <li><strong class="name-white">${carboidrato}g</strong> de carboidratos.</li>
            </ul>`
            break;

            case 'moderado':
                var caloriasModerado = tmb * 1.55;
                var proteina = Math.trunc(2.6 * pesoAtual.value);
                var gordura = Math.trunc(0.6 * pesoAtual.value);
                var carboidrato = Math.trunc((caloriasModerado - (proteina * 4) - (gordura * 9)) / 4);

                cardOne.innerHTML += `<p class="consumo"> Nível de atividade:<strong class="name-white"> Exercício moderado.</strong><br> Manter o peso: <strong class="name-white">${Math.trunc(caloriasModerado)} calorias por dia.</strong><br> Perda de peso: <strong class="name-white">${Math.trunc(caloriasModerado - 500)} calorias por dia.</p>
            <ul class="macros"> 
                <li>Macronutrientes</li>
                <li><strong class="name-white">${proteina}g</strong> de proteínas.</li>
                <li><strong class="name-white">${gordura}g</strong> de gorduras.</li>
                <li><strong class="name-white">${carboidrato}g</strong> de carboidratos.</li>
            </ul>`
            break;

            case 'pesado':
                var caloriasPesado = tmb * 1.725;
                var proteina = Math.trunc(3 * pesoAtual.value);
                var gordura = Math.trunc(0.9 * pesoAtual.value);
                var carboidrato = Math.trunc((caloriasPesado - (proteina * 4) - (gordura * 9)) / 4);

                cardOne.innerHTML += `<p class="consumo"> Nível de atividade:<strong class="name-white"> Exercício pesado.</strong><br> Manter o peso: <strong class="name-white">${Math.trunc(caloriasPesado)} calorias por dia.</strong><br> Perda de peso: <strong class="name-white">${Math.trunc(caloriasPesado - 500)} calorias por dia.</p>
            <ul class="macros"> 
                <li>Macronutrientes</li>
                <li><strong class="name-white">${proteina}g</strong> de proteínas.</li>
                <li><strong class="name-white">${gordura}g</strong> de gorduras.</li>
                <li><strong class="name-white">${carboidrato}g</strong> de carboidratos.</li>
            </ul>`
            break;

            default:
                console.log("Não selecionou nenhum nível de atividade!");
        }
}



