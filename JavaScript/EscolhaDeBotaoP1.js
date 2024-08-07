import { Kizaru } from "./SistemaDePoderesP1.js";
import { Nami } from "./SistemaDePoderesP1.js";
import {turno} from "./SistemaDeTurnos.js";
import { atualizar } from "./SistemaDeTurnos.js";

const NomePersonagem1 = localStorage.getItem('NomePersonagem1');


let PersonagemP1;
const botão_1 = document.getElementById("botão_ataque_1");
const botão_2 = document.getElementById("botão_ataque_2");
const botão_3 = document.getElementById("botão_ataque_3");
const botão_4 = document.getElementById("botão_ataque_4");


if (NomePersonagem1=='Kizaru') {
    
     PersonagemP1=Kizaru
     botão_1.innerText = "CHUTE DE LUZ";
     botão_2.innerText = "VOO INTANGÍVEL";
     botão_3.innerText = "ESPIRAL DE LUZ";
     botão_4.innerText = "EXPLOSÃO LUMINOSA";
    
}
if (NomePersonagem1=='Nami') {
    
    PersonagemP1=Nami
    
    botão_1.innerText = "RAIO DEVASTADOR";
    botão_2.innerText = "NÉVOA REVIGORANTE";
    botão_3.innerText = "TEMPESTADE FURIOSA";
    botão_4.innerText = "RAIO CELESTIAL";
}






let cliqueP1= localStorage.getItem('cliqueP1')


botão_1.addEventListener('click', function() {
    PersonagemP1['botao1']()
    localStorage.setItem('cliqueP1','true')
    modificarbotao() 
    turno()
});


botão_2.addEventListener('click', function() {
    PersonagemP1['botao2']()
    localStorage.setItem('cliqueP1','true')
    modificarbotao() 
    turno()

});

botão_3.addEventListener('click', function() {
    PersonagemP1['botao3']()
    localStorage.setItem('cliqueP1','true')
    modificarbotao() 
    turno()


});

botão_4.addEventListener('click', function() {
    PersonagemP1['botao4']()
    localStorage.setItem('cliqueP1','true')
    modificarbotao() 
    turno()


});

document.getElementById('infoBotão').addEventListener('click', function() {
    PersonagemP1['info']()
    document.getElementById("Descrição_personagem").innerHTML=localStorage.getItem('infoP1')
    

});


        
function modificarbotao() {

        botão_1.disabled = true;
        botão_2.disabled = true;
        botão_3.disabled = true;
        botão_4.disabled = true;        
        
    
}




setInterval(atualizar, 1000);



// para funcionar o infobox

document.getElementById('infoBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.remove('hidden');
});

document.getElementById('closeBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.add('hidden');
});


