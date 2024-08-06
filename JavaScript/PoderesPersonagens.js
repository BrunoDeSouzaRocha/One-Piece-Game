
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


