import { Kizaru_ataques } from "./PersonagensPoderes/Kizaru.js";

const NomePersonagem1 = localStorage.getItem('NomePersonagem1');
const NomePersonagem2 = localStorage.getItem('NomePersonagem2');

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



if ("Kizaru"==NomePersonagem1) {
    Kizaru_ataques()
    
}







