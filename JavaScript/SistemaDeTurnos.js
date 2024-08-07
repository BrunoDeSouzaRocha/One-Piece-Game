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


export  function turno() {

//pega o local storage pra ver se 
const cliqueP1= localStorage.getItem('cliqueP1')
const cliqueP2= localStorage.getItem('cliqueP2')



//valores/informações necessarias para o game 


//P1
const AtackGifP1 =localStorage.getItem('AtackGifP1')
const LogP1 = localStorage.getItem('LogP1')
let DanoP1 = parseInt(localStorage.getItem('DanoP1'));
const ParalizamentoP1 = parseInt(localStorage.getItem('ParalizamentoP1'));
const QueimaduraP1 = parseInt(localStorage.getItem('QueimaduraP1'));
const DebuffP1 = parseInt(localStorage.getItem('DebuffP1'));
const BuffP1 = parseInt(localStorage.getItem('BuffP1'));
const ImuneP1 = parseInt(localStorage.getItem('ImuneP1'));
const CuraP1 = parseInt(localStorage.getItem('CuraP1'));




//P2
const AtackGifP2 =localStorage.getItem('AtackGifP2')
const LogP2 = localStorage.getItem('LogP2')
let DanoP2 = parseInt(localStorage.getItem('DanoP2'));
const ParalizamentoP2 = parseInt(localStorage.getItem('ParalizamentoP2'));
const QueimaduraP2 = parseInt(localStorage.getItem('QueimaduraP2'));
const DebuffP2 = parseInt(localStorage.getItem('DebuffP2'));
const BuffP2 = parseInt(localStorage.getItem('BuffP2'));
const ImuneP2 = parseInt(localStorage.getItem('ImuneP2'));
const CuraP2 = parseInt(localStorage.getItem('CuraP2'));







//Log
const Log = document.getElementById('Log');
const LogGeral = localStorage.getItem('LogGeral')

//Barra de vida dos jogares
let VidaJogador1 = parseInt(localStorage.getItem('VidaJogador1'));
let VidaJogador2 = parseInt(localStorage.getItem('VidaJogador2'));









    

        if (localStorage.getItem('cliqueP1')=="true" && localStorage.getItem('cliqueP2')=="true") {
            
            
            //P1
            if(ParalizamentoP1>0){
                localStorage.setItem('LogGeral', LogGeral + '--<hr>Jogador 1 Esta Paralizado--')
                localStorage.setItem('ParalizamentoP1',ParalizamentoP1-1 )

                if (parseInt(localStorage.getItem('ImuneP2'))>0) {
                    localStorage.setItem('InumeP2',InumeP2-1 )
                }

            } else{

                if (ImuneP2>0) {
                    localStorage.setItem('LogGeral', LogGeral + '--<hr>Jogador 2 Esta Imune--')
                    localStorage.setItem('InumeP2',InumeP2-1 )

                    if (BuffP1>0) {
                        localStorage.setItem('BuffP1',BuffP1-1 )
                    }
                    if (DebuffP1>0) {
                        localStorage.setItem('DebuffP1',DebuffP1-1 )
                    }
                    if (QueimaduraP2>0) {
                        localStorage.setItem('QueimaduraP2',QueimaduraP2-1 )
                    }
                    
                    
                }else{

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
                        VidaJogador2= VidaJogador2-DanoP1
                        localStorage.setItem('LogGeral', LogGeral + LogP1)
                }
                if (CuraP1>0) {
                    VidaJogador1= VidaJogador1+CuraP1

                    localStorage.setItem('CuraP1',0)   
                }
                    }

                    
            //P2
            if(ParalizamentoP2>0){
                localStorage.setItem('LogGeral', LogGeral + '--<hr>Jogador 2 Esta Paralizado--')
                localStorage.setItem('ParalizamentoP2',ParalizamentoP2-1 )
                
                if (parseInt(localStorage.getItem('ImuneP1'))>0) {
                    localStorage.setItem('InumeP1',InumeP1-1 )

                                
                    if (BuffP2>0) {
                        localStorage.setItem('BuffP2',BuffP2-1 )
                    }
                    if (DebuffP2>0) {
                        localStorage.setItem('DebuffP2',DebuffP2-1 )
                    }
                    if (QueimaduraP1>0) {
                        localStorage.setItem('QueimaduraP1',QueimaduraP1-1 )
                    }
                    
                }

            } else{

                if (ImuneP1>0) {
                    localStorage.setItem('LogGeral', LogGeral + '--<hr>Jogador 1 Esta Imune--')
                    localStorage.setItem('InumeP1',InumeP1-1 )
                    
                }else{

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


                        VidaJogador1= VidaJogador1-DanoP2
                        localStorage.setItem('LogGeral', LogGeral + LogP2)

                    }
                if (CuraP2>0) {
                    VidaJogador2= VidaJogador2+CuraP2
                        
                    localStorage.setItem('CuraP1',0)

                        
                    }

                    }

                    

                
                localStorage.setItem('VidaJogador1', VidaJogador1);
                localStorage.setItem('VidaJogador2', VidaJogador2);
                      
                //Esse Negocio vai fazer com que tudo atualize ao mesmo tempo (espero q funcione)
                localStorage.setItem('atualizou','sim')
                location.reload();

            
}


    
    }

export function atualizar(params) {
    if (localStorage.getItem('atualizou')=='sim') {
        localStorage.setItem('atualizou','nao')
        location.reload();
        
    }
    
}
    

window.addEventListener('load', function(event) {



            const BarraDeVida1 = document.getElementById('VidaJogador1');

            const BarraDeVida2 = document.getElementById('VidaJogador2');


                        //Log Geral 
            
                    //Muda a vida do P1
                    
                    BarraDeVida1.style.width = parseInt(localStorage.getItem('VidaJogador1'))  + '%';
                    BarraDeVida1.textContent = parseInt(localStorage.getItem('VidaJogador1')) + '%';
            
                    //Muda a vida do P2
                    BarraDeVida2.style.width = parseInt(localStorage.getItem('VidaJogador2')) + '%';
                    BarraDeVida2.textContent = parseInt(localStorage.getItem('VidaJogador2')) + '%';
            
                    Gifpersonagem1.src =localStorage.getItem('AtackGifP1')
                    Gifpersonagem2.src =localStorage.getItem('AtackGifP2')
                    setTimeout(() => {
                        Gifpersonagem1.src = `personagens/${NomePersonagem1}/${NomePersonagem1}.Gif`;
                        Gifpersonagem2.src = `personagens/${NomePersonagem2}/${NomePersonagem2}.Gif`;
                    }, 3000);
                    localStorage.setItem('cliqueP1','false')
                    localStorage.setItem('cliqueP2','false')

});
