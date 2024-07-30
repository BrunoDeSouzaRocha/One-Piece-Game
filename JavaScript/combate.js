import { KizaruPoderes } from "./PoderesPersonagens.js";

const NomePersonagem1 = localStorage.getItem('NomePersonagem1');
const NomePersonagem2 = localStorage.getItem('NomePersonagem2');
console.log(NomePersonagem1);

const Gifpersonagem1 = document.getElementById('gif_principal');
const Gifpersonagem2 = document.getElementById('gif_segundario');

Gifpersonagem1.src=`personagens/${NomePersonagem1}/${NomePersonagem1}.Gif`;
Gifpersonagem2.src=`personagens/${NomePersonagem2}/${NomePersonagem2}.Gif`;

document.getElementById('infoBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.remove('hidden');
});

document.getElementById('closeBotão').addEventListener('click', function() {
    document.getElementById('infoBox').classList.add('hidden');
});

const verbuff = localStorage.getItem('buff');
const VerAutoParalizado=localStorage.getItem('autoparalizado')
const VerParalizado=localStorage.getItem('paralizado')


const botão_1 = document.getElementById("botão_ataque_1");
const botão_2 = document.getElementById("botão_ataque_2");
const botão_3 = document.getElementById("botão_ataque_3");
const botão_4 = document.getElementById("botão_ataque_4");




if ("Kizaru"==NomePersonagem1) {
    KizaruPoderes()
    
}
else if ("nami"==NomePersonagem1) {
    
} else {
    
}


botão_1.addEventListener('click', function() {


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


})

botão_2.addEventListener('click', function() {

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


})

botão_3.addEventListener('click', function() {

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


})

botão_4.addEventListener('click', function() {

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


})

