import { Ataques2 } from './teste2.js';

const paragrafo = document.getElementById("paragrafo");

function executarAcoes() {
    const botao1Clicado = localStorage.getItem('ultimaAcao1') ;
    const botao2Clicado = localStorage.getItem('ultimaAcao2') ;

    document.getElementById("botao11").disabled = true;
    document.getElementById("botao22").disabled = true;
    document.getElementById("botao33").disabled = true;
    document.getElementById("botao44").disabled = true;

    if (botao1Clicado=='false') {
        console.log('é pra ir');
        
        
    }

    
    

    if (botao1Clicado==="true" && botao2Clicado==='true') {
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








export const Ataques1 = {
    botao1: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 1 do p1; ";
        const paragrafo2 = localStorage.getItem('paragrafo') + " botao 1 do p1; ";
        localStorage.setItem('paragrafo', paragrafo2);
    },
    botao2: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 2 do p1; ";
        const paragrafo2 = localStorage.getItem('paragrafo') + " botao 2 do p1; ";
        localStorage.setItem('paragrafo', paragrafo2);
    },
    botao3: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 3 do p1; ";
        const paragrafo2 = localStorage.getItem('paragrafo') + " botao 3 do p1; ";
        localStorage.setItem('paragrafo', paragrafo2);
    },
    botao4: function() {
        paragrafo.innerHTML = localStorage.getItem('paragrafo') + " botao 4 do p1; ";
        const paragrafo2 = localStorage.getItem('paragrafo') + " botao 4 do p1; ";
        localStorage.setItem('paragrafo', paragrafo2);
    }
};













document.getElementById('botao11').addEventListener('click', function() {
        localStorage.setItem('ultimaAcao1','true');
        localStorage.setItem('acaoP1', 'botao1');
        executarAcoes();
    });

document.getElementById('botao22').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao1','true');
    localStorage.setItem('acaoP1','botao2');
    executarAcoes();
});

document.getElementById('botao33').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao1', 'true');
    localStorage.setItem('acaoP1', 'botao3');
    executarAcoes();
});

document.getElementById('botao44').addEventListener('click', function() {
    localStorage.setItem('ultimaAcao1', 'true');
    localStorage.setItem('acaoP1', 'botao4');
    executarAcoes();
});










window.addEventListener('storage', function(event) {
    if (event.key === 'funcionaAi') {
        paragrafo.innerHTML= localStorage.getItem('paragrafo')
    }
});
