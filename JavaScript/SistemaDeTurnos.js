
//pega o Nome dos persoangens a vai usar 
const NomePersonagem1 = localStorage.getItem('NomePersonagem1');
const NomePersonagem2 = localStorage.getItem('NomePersonagem2');


//Esse negocio faz com que seja possivel usar o import em uma variavel
let PersonagemP1;
let PersonagemP2;




//Define o local dos gifs 
const Gifpersonagem1 = document.getElementById('gif_principal');
const Gifpersonagem2 = document.getElementById('gif_segundario');

//gifs principais
Gifpersonagem1.src=`personagens/${NomePersonagem1}/${NomePersonagem1}.Gif`;
Gifpersonagem2.src=`personagens/${NomePersonagem2}/${NomePersonagem2}.Gif`;
const gifPrincipalP1= Gifpersonagem1.src=`personagens/${NomePersonagem1}/${NomePersonagem1}.Gif`;
const gifPrincipalP2 =Gifpersonagem2.src=`personagens/${NomePersonagem2}/${NomePersonagem2}.Gif`;

//pega o local storage pra ver se 
const cliqueP1= localStorage.getItem('cliqueP1')
const cliqueP2= localStorage.getItem('cliqueP2')



//valores/informações necessarias para o game 


//P1
let DanoP1 = localStorage.getItem('DanoP1')
const AtackGifP1 =localStorage.getItem('AtackGifP1')
const LogP1 = localStorage.getItem('LogP1')
const ParalizamentoP1=localStorage.getItem('ParalizamentoP1')
const QueimaduraP1=localStorage.getItem('QueimaduraP1')
const DebuffP1=localStorage.getItem('DebuffP1')
const BuffP1=localStorage.getItem('BuffP1')

//P2
let DanoP2 = localStorage.getItem('DanoP2')
const AtackGifP2 =localStorage.getItem('AtackGifP2')
const LogP2 = localStorage.getItem('LogP2')
const ParalizamentoP2=localStorage.getItem('ParalizamentoP2')
const QueimaduraP2=localStorage.getItem('QueimaduraP2')
const DebuffP2=localStorage.getItem('DebuffP2')
const BuffP2=localStorage.getItem('BuffP2')





//pega qual o botao foi apertado
const ataqueP1 = localStorage.getItem('ataqueP1')
const ataqueP2 = localStorage.getItem('ataqueP2')

//Log
const Log = document.getElementById('Log');
const LogGeral = localStorage.getItem('LogGeral')

//Barra de vida dos jogares
let VidaJogador1 = parseInt(localStorage.getItem('VidaJogador1'));
let VidaJogador2 = parseInt(localStorage.getItem('VidaJogador2'));



const BarraDeVida1 = document.getElementById('VidaJogador1');
const BarraDeVida2 = document.getElementById('VidaJogador2');


    
let VidaNovaP2;
let VidaNovaP1;





if (cliqueP1=="true" && cliqueP2=="true") {
    
    //P1
    if(ParalizamentoP1>0){
        localStorage.setItem('LogGeral', LogGeral + '--<hr>Jogador 1 Esta Paralizado--')
        localStorage.setItem('ParalizamentoP1',ParalizamentoP1-1 )
    } else{

        if (BuffP1>0) {
            DanoP1=DanoP1*1.5
            localStorage.setItem('BuffP1',BuffP1-1 )

        }
        if (DebuffP1>0) {
            DanoP1=DanoP1*0.5
            
        }
        if (QueimaduraP2>0) {
            DanoP1=DanoP1+5
            localStorage.setItem('QueimaduraP2',QueimaduraP2-1 )

            
        }

         VidaNovaP2= VidaJogador2-DanoP1
    }

    //P2
    if(ParalizamentoP2>0){
        localStorage.setItem('LogGeral', LogGeral + '--<hr>Jogador 2 Esta Paralizado--')
        localStorage.setItem('ParalizamentoP2',ParalizamentoP2-1 )
    } else{

        if (BuffP2>0) {
            DanoP2=DanoP2*1.5
            localStorage.setItem('BuffP2',BuffP2-1 )

        }
        if (DebuffP2>0) {
            DanoP2=DanoP2*0.5
            
        }
        if (QueimaduraP1>0) {
            DanoP2=DanoP2+5
            localStorage.setItem('QueimaduraP1',QueimaduraP1-1 )

            
        }

         VidaNovaP1= VidaJogador1-DanoP2
    }



    localStorage.setItem('cliqueP1','false')
    localStorage.setItem('cliqueP2','false')

        





    //Esse Negocio vai fazer com que tudo atualize ao mesmo tempo (espero q funcione)
    window.addEventListener('load', function(event) {
        //Log Geral 
        Log.innerHTML=LogGeral+

        //Muda a vida do P1
        localStorage.setItem('VidaJogador1', VidaNovaP1);
        BarraDeVida1.style.width = VidaNovaP1 + '%';
        BarraDeVida1.textContent = VidaNovaP1 + '%';

        //Muda a vida do P2
        localStorage.setItem('VidaJogador2', VidaNovaP2);
        BarraDeVida2.style.width = VidaNovaP2 + '%';
        BarraDeVida2.textContent = VidaNovaP2 + '%';

        
    });

    }



