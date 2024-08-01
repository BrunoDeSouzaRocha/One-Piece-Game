import { KizaruPoderes } from "./PoderesPersonagens2.js";
import { NamiPoderes } from "./PoderesPersonagens2.js";






const NomePersonagem1 = localStorage.getItem('NomePersonagem1');
const NomePersonagem2 = localStorage.getItem('NomePersonagem2');
console.log(NomePersonagem1);

const Gifpersonagem1 = document.getElementById('gif_principal');
const Gifpersonagem2 = document.getElementById('gif_segundario');

Gifpersonagem1.src=`personagens/${NomePersonagem1}/${NomePersonagem1}.Gif`;
Gifpersonagem2.src=`personagens/${NomePersonagem2}/${NomePersonagem2}.Gif`;

localStorage.setItem('NomePersonagem1', NomePersonagem1);



const verbuff = localStorage.getItem('buff');
const VerAutoParalizado=localStorage.getItem('autoparalizado')
const VerParalizado=localStorage.getItem('paralizado')


const botão_1 = document.getElementById("botão_ataque_1");
const botão_2 = document.getElementById("botão_ataque_2");
const botão_3 = document.getElementById("botão_ataque_3");
const botão_4 = document.getElementById("botão_ataque_4");




if ("Kizaru"==NomePersonagem2) {
    KizaruPoderes()
    
}
else if ("Nami"==NomePersonagem2) {
    NamiPoderes()
} else {
    
}

/*
function runds(params) {
    
    if (verbuff>0) {
        verbuff=verbuff-1
        localStorage.setItem('buff',verbuff);
    
        
    }
    if (VerAutoParalizado>0) {
        VerAutoParalizado=VerAutoParalizado-1
        localStorage.setItem('autoparalizado',VerAutoParalizado);
    
        
    }
    if (verAumento>0) {
        
        VerParalizado=VerParalizado-1
        localStorage.setItem('paralizado',VerParalizado);
    }

    
}



botão_1.addEventListener('click', runds);
botão_2.addEventListener('click', runds);
botão_3.addEventListener('click', runds);
botão_4.addEventListener('click', runds);





*/


document.getElementById('infoBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.remove('hidden');
});

document.getElementById('closeBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.add('hidden');
});