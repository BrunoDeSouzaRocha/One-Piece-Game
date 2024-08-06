import { Ataques1 } from './teste1.js';

const paragrafo = document.getElementById("paragrafo");



function executarAcoes() {
    const botao1Clicado = localStorage.getItem('ultimaAcao1');
    const botao2Clicado = localStorage.getItem('ultimaAcao2');
    console.log(botao1Clicado);

    document.getElementById("botao11").disabled = true;
    document.getElementById("botao22").disabled = true;
    document.getElementById("botao33").disabled = true;
    document.getElementById("botao44").disabled = true;




    if (botao1Clicado =='true' && botao2Clicado =='true') {
        const acaoP1 = localStorage.getItem('acaoP1');
        const acaoP2 = localStorage.getItem('acaoP2');

        localStorage.setItem('funconanmrl', 'true');

        Ataques1[acaoP1]();
        Ataques2[acaoP2]();

        localStorage.setItem('ultimaAcao1', 'false');
        localStorage.setItem('ultimaAcao2', 'false');

        document.getElementById("botao1").disabled = false;
        document.getElementById("botao2").disabled = false;
        document.getElementById("botao3").disabled = false;
        document.getElementById("botao4").disabled = false;
    }
}








export const Ataques2 = {
    botao1: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 1 do p2; ";
        localStorage.setItem('paragrafo', paragrafo.innerHTML);
    },
    botao2: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 2 do p2; ";
        localStorage.setItem('paragrafo', paragrafo.innerHTML);
    },
    botao3: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 3 do p2; ";
        localStorage.setItem('paragrafo', paragrafo.innerHTML);
    },
    botao4: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 4 do p2; ";
        localStorage.setItem('paragrafo', paragrafo.innerHTML);
    }
};








document.getElementById('botao1').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao2', 'true');
    localStorage.setItem('acaoP2', 'botao1');
    executarAcoes();
});

document.getElementById('botao2').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao2', 'true');
    localStorage.setItem('acaoP2', 'botao2');
    executarAcoes();
});

document.getElementById('botao3').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao2', 'true');
    localStorage.setItem('acaoP2', 'botao3');
    executarAcoes();
});

document.getElementById('botao4').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao2', 'true');
    localStorage.setItem('acaoP2', 'botao4');
    executarAcoes();
});







window.addEventListener('storage', function(event) {
    if (event.key === 'funconanmrl') {
        paragrafo.innerHTML = localStorage.getItem('paragrafo');
    }
});
