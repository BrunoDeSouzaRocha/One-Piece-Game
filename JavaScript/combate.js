import {nomeDoBoneco1} from './Seleção.js';
import {nomeDoBoneco2} from './Seleção.js';


function bonecoescolhido() {

    console.log(nomeDoBoneco1);
    console.log(nomeDoBoneco2);

    /*
    const personagem1 = document.getElementById('gif_principal');
    console.log('personagem1:', personagem1);

    const jogador1 = document.getElementById('Nomepersonagem1');
    console.log('jogador1:', jogador1);
  
    const jogadornome1 = jogador1.textContent.charAt(0).toUpperCase() + jogador1.textContent.slice(1).toLowerCase();
    console.log('jogadornome1:', jogadornome1);
  

    const caminho = `personagens/${jogadornome1}/${jogadornome1}.Gif`;
    console.log('caminho:', caminho);
    personagem1.src = caminho;
    console.log('personagem1.src:', personagem1.src);




    const personagem2 = document.getElementById('gif_segundario');
    console.log('personagem1:', personagem2);    

    const jogador2 = document.getElementById('Nomepersonagem2');
    console.log('jogador2:', jogador2);
  
    const jogadornome2 = jogador2.textContent.charAt(0).toUpperCase() + jogador2.textContent.slice(1).toLowerCase();
    console.log('jogadornome1:', jogadornome1);
  

    const lugar = `personagens/${jogadornome2}/${jogadornome2}.Gif`;
    console.log('caminho:', lugar);
  
  

 


        personagem1.src = lugar;
        console.log('personagem1.src:', personagem2.src);

  

*/

 
    
}




// JavaScript para alterar o número e o conteúdo da div
document.getElementById('botão_ataque_1').addEventListener('click', function() {
    // Obtenha o elemento da barra de progresso e o valor atual
    var barra = document.getElementById('Vida');
    var valorAtual = parseInt(barra.style.width);

    var gif_padrão= document.getElementById('gif_principal')

    var barra = document.getElementById('Vida');

    // Calcule o novo valor (diminua 10%)
    var novoValor = valorAtual - 10;
    if (novoValor < 0) novoValor = 0;

    // Atualize a barra de progresso e o texto
    barra.style.width = novoValor + '%';
    barra.textContent = novoValor + '%';
    gif_padrão.src = 'personagens/kizaru/kizaruChute.gif';
    setTimeout(() => {
        gif_padrão.src='personagens/kizaru/kizaru.gif'; // Simula o clique no segundo botão
    }, 300);

});