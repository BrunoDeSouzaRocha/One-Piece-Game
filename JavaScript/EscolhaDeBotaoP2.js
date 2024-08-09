import { Kizaru } from "./SistemaDePoderesP2.js";
import { Nami } from "./SistemaDePoderesP2.js";
import { Ace } from "./SistemaDePoderesP2.js";
import { Zoro } from "./SistemaDePoderesP2.js";
import { Luffy } from "./SistemaDePoderesP2.js";
import { Shanks } from "./SistemaDePoderesP2.js";
import {turno} from "./SistemaDeTurnos.js"
import { atualizar } from "./SistemaDeTurnos.js";


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
   
   botão_1.innerText = "RAIO DEVASTADOR";
   botão_2.innerText = "NÉVOA REVIGORANTE";
   botão_3.innerText = "TEMPESTADE FURIOSA";
   botão_4.innerText = "RAIO CELESTIAL";
}
if (NomePersonagem2=='Ace') {
   
   PersonagemP2=Ace
   
   botão_1.innerText = "Kyokaen";
   botão_2.innerText = "MURALHA DE FOGO";
   botão_3.innerText = "Kagero";
   botão_4.innerText = "Hiken";
}
if (NomePersonagem2=='Zoro') {
   
   PersonagemP2=Zoro
   
   botão_1.innerText = "Santoryu ";
   botão_2.innerText = "Flying Slash Attack";
   botão_3.innerText = "Haki da Observação";
   botão_4.innerText = "Kyutoryu Asura";
}
if (NomePersonagem2=='Luffy') {
   
   PersonagemP2=Luffy
   
   botão_1.innerText = "GOMU GOMU NO PISTOL";
   botão_2.innerText = "Gomu Gomu no Rifle";
   botão_3.innerText = "Red hawk";
   botão_4.innerText = "Haki Do Rei";
}if (NomePersonagem2=='Shanks') {
   
   PersonagemP2='Shanks'
   
   botão_1.innerText = " Busoshoku Haki";
   botão_2.innerText = "Kenbunshoku Haki";
   botão_3.innerText = "Haoshoku Haki";
   botão_4.innerText = "Kamusari";
}





let cliqueP2= localStorage.getItem('cliqueP2')


botão_1.addEventListener('click', function() {
    PersonagemP2['botao1']()
    localStorage.setItem('cliqueP2','true')
    modificarbotao()
    turno()

});

botão_2.addEventListener('click', function() {
    PersonagemP2['botao2']()
    localStorage.setItem('cliqueP2','true')
    modificarbotao()
    turno()


});

botão_3.addEventListener('click', function() {
    PersonagemP2['botao3']()
    localStorage.setItem('cliqueP2','true')
    modificarbotao()
    turno()


});

botão_4.addEventListener('click', function() {
    PersonagemP2['botao4']()
    localStorage.setItem('cliqueP2','true')
    modificarbotao()
    turno()



});

document.getElementById('infoBotão').addEventListener('click', function() {    
    
    PersonagemP2['info']()
    document.getElementById("Descrição_personagem").innerHTML=localStorage.getItem('infoP2')

});



function modificarbotao() {


        botão_1.disabled = true;
        botão_2.disabled = true;
        botão_3.disabled = true;
        botão_4.disabled = true;        
        
        
    
    
}

window.addEventListener('storage', function(event) {
    if (cliqueP2=='false') {
        botão_1.disabled = false;
        botão_2.disabled = false;
        botão_3.disabled = false;
        botão_4.disabled = false;    

    }
 
});

  



// para funcionar o infobox
setInterval(atualizar, 1000);



document.getElementById('infoBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.remove('hidden');
});

document.getElementById('closeBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.add('hidden');
});


