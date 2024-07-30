let imunidade = 0
let buff=0
let autoparalizado=0
let paralizado=0


export function KizaruPoderes() {

    const botão_1 = document.getElementById("botão_ataque_1");
    const botão_2 = document.getElementById("botão_ataque_2");
    const botão_3 = document.getElementById("botão_ataque_3");
    const botão_4 = document.getElementById("botão_ataque_4");

    const Descrição_personagem = document.getElementById("Descrição_personagem");

    const gifPersonagem = document.getElementById("gif_principal");
    const srcGifPersonagem = 'personagens/Kizaru/Kizaru.Gif';










    botão_1.addEventListener('click', function() {

        gifPersonagem.src = 'personagens/Kizaru/KizaruChuteDeLuz.Gif';


        const verAumento = localStorage.getItem('buff');
        const VerAutoParalizado=localStorage.getItem('autoparalizado')
        const VerParalizado=localStorage.getItem('paralizado')

        

        const BarraDeVida = document.getElementById('VidaJogador2');
        let VidaAtual = parseFloat(BarraDeVida.style.width);
        let VidaPerdida = Math.floor(Math.random() * (15 - 8)) + 8;

        if (VerAutoParalizado>=1) {
            console.log("ta paralizado Porra");


        }
        else{
            if(verAumento>=1){
                VidaPerdida = Math.floor(Math.random() * (22 - 12)) + 12;
            }
            console.log(VidaPerdida);
            const NovaVida = VidaAtual - VidaPerdida;
    
            BarraDeVida.style.width = NovaVida + '%';
            BarraDeVida.textContent = NovaVida + '%';
    
            setTimeout(() => {
                gifPersonagem.src = srcGifPersonagem;
            }, 3000);}


    });


    botão_2.addEventListener('click', function() {

        gifPersonagem.src = 'personagens/Kizaru/KizaruVooIntangivel.gif';
        
         imunidade=imunidade+1
        
        localStorage.setItem('ImunePlayer1', imunidade);
        


        setTimeout(() => {
            gifPersonagem.src = srcGifPersonagem;
        }, 1400);

    });



    botão_3.addEventListener('click', function() {

        gifPersonagem.src = 'personagens/Kizaru/KizaruEspiralDeLuz';
        
        buff=buff+2
       
       localStorage.setItem('buff', buff);
       


       setTimeout(() => {
           gifPersonagem.src = srcGifPersonagem;
       }, 1400);

        


        setTimeout(() => {
            gifPersonagem.src = srcGifPersonagem;
        }, 1400);

    });

    
    botão_4.addEventListener('click', function() {
        gifPersonagem.src = 'personagens/Kizaru/KizaruChuteDeLuz.Gif';


        const verAumento = localStorage.getItem('buff');
        const VerAutoParalizado=localStorage.getItem('autoparalizado')
        const VerParalizado=localStorage.getItem('paralizado')

        

        const BarraDeVida = document.getElementById('VidaJogador2');
        let VidaAtual = parseFloat(BarraDeVida.style.width);
        let VidaPerdida = Math.floor(Math.random() * (26 - 20)) + 20;

        if (VerAutoParalizado>=1) {
            console.log("ta paralizado Porra");

            /*temporario*/
            VerAutoParalizado=VerAutoParalizado-1
            localStorage.setItem('autoparalizado',VerAutoParalizado=VerAutoParalizado);
        }
        else{
            if(verAumento>=1){
                VidaPerdida = Math.floor(Math.random() * (39 - 30)) + 30;
            }
            console.log(VidaPerdida);
            const NovaVida = VidaAtual - VidaPerdida;
    
            BarraDeVida.style.width = NovaVida + '%';
            BarraDeVida.textContent = NovaVida + '%';
    
            setTimeout(() => {
                gifPersonagem.src = srcGifPersonagem;
            }, 3000);}


    });





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
}

