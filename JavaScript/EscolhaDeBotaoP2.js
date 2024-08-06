import { Kizaru } from "./SistemaDePoderesP2.js";
import { Nami } from "./SistemaDePoderesP2.js";


const NomePersonagem2 = localStorage.getItem('NomePersonagem2');

let PersonagemP2;
const botão_1 = document.getElementById("botão_ataque_1");
const botão_2 = document.getElementById("botão_ataque_2");
const botão_3 = document.getElementById("botão_ataque_3");
const botão_4 = document.getElementById("botão_ataque_4");


if (NomePersonagem2=='Kizaru') {
    
     PersonagemP2=Kizaru
     botão_1.innerText = "CHUTE DE LUZ";
     botão_2.innerText = "VOO INTANGÍVEL";
     botão_3.innerText = "ESPIRAL DE LUZ";
     botão_4.innerText = "EXPLOSÃO LUMINOSA";
    
}
if (NomePersonagem2=='Nami') {
    
    
    PersonagemP2=Nami
    console.log(PersonagemP2);
    
    botão_1.innerText = "RAIO DEVASTADOR";
    botão_2.innerText = "NÉVOA REVIGORANTE";
    botão_3.innerText = "TEMPESTADE FURIOSA";
    botão_4.innerText = "RAIO CELESTIAL";
}






const cliqueP2= localStorage.getItem('cliqueP2')


botão_1.addEventListener('click', function() {
    localStorage.setItem('ataqueP2','botao1');
    localStorage.setItem('cliqueP2','true')
    
});

botão_2.addEventListener('click', function() {
    localStorage.setItem('ataqueP2','botao2');
    localStorage.setItem('cliqueP2','true')

});

botão_3.addEventListener('click', function() {
    localStorage.setItem('ataqueP2','botao3');
    localStorage.setItem('cliqueP2','true')


});

botão_4.addEventListener('click', function() {
    localStorage.setItem('ataqueP2','botao4');
    localStorage.setItem('cliqueP2','true')


});

document.getElementById('infoBotão').addEventListener('click', function() {
    
    PersonagemP2['info']()
    document.getElementById("Descrição_personagem").innerHTML=localStorage.getItem('infoP2')

});

if (cliqueP2=='true') {
    
    botão_1.disabled = true;
    botão_2.disabled = true;
    botão_3.disabled = true;
    botão_4.disabled = true;        
    
    
}







