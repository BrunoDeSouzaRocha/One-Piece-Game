
let turno = parseInt(localStorage.getItem('turno'));
turno=Number(turno)

let paralizado1 = parseInt(localStorage.getItem('paralizado1'));
let paralizado2 = parseInt(localStorage.getItem('paralizado2'));



let buff1 = parseInt(localStorage.getItem('buff1'));
let buff2 = parseInt(localStorage.getItem('buff2'));

let VidaJogador1 = parseInt(localStorage.getItem('VidaJogador1'));
let VidaJogador2 = parseInt(localStorage.getItem('VidaJogador2'));
console.log("vida do jogador la em cima: " + VidaJogador2);



const BarraDeVida1 = document.getElementById('VidaJogador1');
let VidaAtual1 = parseFloat(BarraDeVida1.style.width);

const BarraDeVida2 = document.getElementById('VidaJogador2');
let VidaAtual2 = parseFloat(BarraDeVida2.style.width);

const botão_1 = document.getElementById("botão_ataque_1");
const botão_2 = document.getElementById("botão_ataque_2");
const botão_3 = document.getElementById("botão_ataque_3");
const botão_4 = document.getElementById("botão_ataque_4");

const Descrição_personagem = document.getElementById("Descrição_personagem");




let UltimaAção1=localStorage.getItem('UltimaAção1')
let UltimaAção2=localStorage.getItem('UltimaAção2')




export function KizaruPoderes() {

  
        
        const gifPersonagem = document.getElementById("gif_principal");
        const srcGifPersonagem = 'personagens/Kizaru/Kizaru.Gif';





        botão_1.addEventListener('click', function() {


            document.getElementById("botão_ataque_1").disabled=true
            document.getElementById("botão_ataque_2").disabled=true
            document.getElementById("botão_ataque_3").disabled=true
            document.getElementById("botão_ataque_4").disabled=true

            
            localStorage.setItem('UltimaAção1', 'true') 
            

            
            let VidaPerdida = Math.floor(Math.random() * (15 - 8)) + 8;

            if (paralizado1>0) {
                alert("ta paralizado");


            } 
            else{
                if(buff1>0){
                    VidaPerdida = Math.floor(Math.random() * (22 - 12)) + 12;
                }
                gifPersonagem.src = 'personagens/Kizaru/KizaruChuteDeLuz.Gif';

                const NovaVida = (parseInt(localStorage.getItem('VidaJogador2'))) - VidaPerdida;
            
            
                localStorage.setItem('VidaJogador2', NovaVida);
            
                BarraDeVida2.style.width = NovaVida + '%';
                BarraDeVida2.textContent = NovaVida + '%';
                

        
                setTimeout(() => {
                    gifPersonagem.src = srcGifPersonagem;
                }, 3000);}


                localStorage.setItem('UltimaAção2', 'false') 
            
        });


}



    botão_1.innerText = "CHUTE DE LUZ";
    botão_2.innerText = "VOO INTANGÍVEL";
    botão_3.innerText = "ESPIRAL DE LUZ";
    botão_4.innerText = "EXPLOSÃO LUMINOSA";

    Descrição_personagem.innerHTML = `
        KIZARU:
        <hr>
        CHUTE DE LUZ:
        Kizaru lança um poderoso chute de luz, causando entre 8 a 14 de dano.
        <hr>
        VOO INTANGÍVEL:
        Kizaru utiliza sua habilidade de voo para se tornar intangível por um turno, tornando-se imune a danos normais durante esse período.
        <hr>
        ESPIRAL DE LUZ:
        Kizaru cria uma espiral de luz ao redor de si mesmo, aumentando o seu poder de ataque em 50% por 2 turnos.
        <hr>
        EXPLOSÃO LUMINOSA (ULTIMATE):
        Kizaru concentra uma quantidade massiva de energia luminosa em suas mãos e a lança contra um inimigo, causando um dano explosivo. Causa 20-25 de dano a um único inimigo, mas ficando um turno sem poder fazer nada.
    `;
    window.addEventListener('storage', function(event) {
        if (event.key === 'VidaJogador1') {
    
            BarraDeVida1.style.width = parseInt(localStorage.getItem('VidaJogador1')) + '%';
            BarraDeVida1.textContent = parseInt(localStorage.getItem('VidaJogador1')) + '%';
        }
        if (event.key === 'VidaJogador2') {
    
            BarraDeVida2.style.width = parseInt(localStorage.getItem('VidaJogador2')) + '%';
            BarraDeVida2.textContent = parseInt(localStorage.getItem('VidaJogador2')) + '%';
        }
    });


export function NamiPoderes() {

    const gifPersonagem = document.getElementById("gif_principal");
    const srcGifPersonagem = 'personagens/Nami/Nami.Gif';



    botão_1.addEventListener('click', function() {

        gifPersonagem.src = 'personagens/Kizaru/KizaruChuteDeLuz.Gif';

        var chance = Math.random(); // Gera um número aleatório entre 0 e 1  

        let VidaPerdida = Math.floor(Math.random() * (14 - 8)) + 8;

        if (paralizado1>0) {
            alert("ta paralizado");
            


        } 
        else{

            if (chance <= 0.25) { // 25% de chance

                const paralizado= (parseInt(localStorage.getItem('paralizado2'))) + 1;
                localStorage.setItem('paralizado2', paralizado);

                alert("Nami Paralizou o Inimigo!!!");
    
            } 

            console.log("Vida perdida: " + VidaPerdida);
            console.log("vida do jogador: " + (parseInt(localStorage.getItem('VidaJogador2'))));
        
            const NovaVida = (parseInt(localStorage.getItem('VidaJogador2'))) - VidaPerdida;
        
            console.log("Nova vida: " + NovaVida);
        
            localStorage.setItem('VidaJogador2', NovaVida);
        
            BarraDeVida2.style.width = NovaVida + '%';
            BarraDeVida2.textContent = NovaVida + '%';
            

    
            setTimeout(() => {
                gifPersonagem.src = srcGifPersonagem;
            }, 3000);}


    });

    


    botão_1.innerText = "RAIO DEVASTADOR";
    botão_2.innerText = "NÉVOA REVIGORANTE";
    botão_3.innerText = "TEMPESTADE FURIOSA";
    botão_4.innerText = "RAIO CELESTIAL";

    Descrição_personagem.innerHTML = `
    NAMI:
    <hr>
RELÂMPAGO DEVASTADOR: NAMI CONVOCA UM PODEROSO RAIO ELÉTRICO, CAUSANDO ENTRE 8 A 13 DE DANO E COM 25% DE CHANCE DE PARALISAR O INIMIGO POR 1 TURNO.
<hr>
NÉVOA REVIGORANTE: NAMI CRIA UMA NÉVOA CURATIVA, RESTAURANDO 10% DE SUA SAÚDE.
<hr>
TEMPESTADE FURIOSA: NAMI CONVOCA UMA PODEROSA TEMPESTADE ELÉTRICA, CAUSANDO 5 DE DANO POR 3 TURNOS CONSECUTIVOS.
<hr>
ataque 4- Relâmpago Celestial(ultimate): Nami invoca um raio poderoso do céu, que atinge um inimigo com precisão fulminante causando entre 18-24 de dano deixando o inimgo Mas ficando um turno sem poder fazer nada



`;

window.addEventListener('storage', function(event) {
    if (event.key === 'VidaJogador1') {

        BarraDeVida1.style.width = parseInt(localStorage.getItem('VidaJogador1')) + '%';
        BarraDeVida1.textContent = parseInt(localStorage.getItem('VidaJogador1')) + '%';
    }
    if (event.key === 'VidaJogador2') {

        BarraDeVida1.style.width = parseInt(localStorage.getItem('VidaJogador2')) + '%';
        BarraDeVida1.textContent = parseInt(localStorage.getItem('VidaJogador2')) + '%';
    }
});
}


