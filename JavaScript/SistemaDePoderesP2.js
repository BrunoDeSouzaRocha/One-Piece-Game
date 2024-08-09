

export const Kizaru = {
    botao1: function() {

        localStorage.setItem('DanoP2',Math.floor(Math.random() * (15 - 8)) + 8);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','<br>Kizaru Usou CHUTE DE LUZ <br>')

    },
    botao2: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruVooIntangivel.Gif')
        localStorage.setItem('ImuneP2', parseInt(localStorage.getItem('ImuneP2'))+1)
        localStorage.setItem('LogP2','<br>Kizaru Ficou intangivel por 1 turno<br>')

    },
    botao3: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruBuff.Gif')
        localStorage.setItem('BuffP2', parseInt(localStorage.getItem('BuffP2'))+3)
        localStorage.setItem('LogP2','<br>Kizaru Aumentou seu Dano em 50% por 3 turnos<br>')

    },
    botao4: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (26 - 20)) + 20);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruExplosãoLuminosa.Gif')
        localStorage.setItem('LogP2','<br>Kizaru Lançou uma grande explosao de luz cusando muito dano<br>')

    },

    info:function () {
        const info = `
            <strong>KIZARU:</strong>
            <hr>
            <strong>CHUTE DE LUZ:</strong>
            Kizaru lança um poderoso chute de luz, causando entre 8 a 14 de dano.
            <hr>
            <strong>VOO INTANGÍVEL:</strong>
            Kizaru utiliza sua habilidade de voo para se tornar intangível pelo  turno, tornando-se imune.
            <hr>
            <strong>ESPIRAL DE LUZ:</strong>
            Kizaru cria uma espiral de luz ao redor de si mesmo, aumentando o seu poder de ataque em 50% por 3 turnos.
            <hr>
            <strong>EXPLOSÃO LUMINOSA (ULTIMATE):</strong>
            Kizaru concentra uma quantidade massiva de energia luminosa em suas mãos e a lança contra um inimigo, causando um dano explosivo. Causa 20-25 de dano a um único inimigo.
                    `;

        localStorage.setItem('infoP2',info)
    }

    




};





export const Nami = {
    botao1: function() {
        var chance = Math.random();


        localStorage.setItem('DanoP2',Math.floor(Math.random() * (14 - 8)) + 8);
        localStorage.setItem('AtackGifP2','personagens/Nami/NamiAtaque1.gif')
        localStorage.setItem('LogP2','Nami Lançou um raio no inimigo<br>')

        if (chance <= 0.25) { 
        localStorage.setItem('ParalizamentoP1',parseInt(localStorage.getItem('ParalizamentoP1'))+1)
        } 

    },
    botao2: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Nami/NamiAtaque2.gif')
        localStorage.setItem('LogP2','<br>Nami curou 10 de vida<br>')
        localStorage.setItem('CuraP2',10);
    },
    botao3: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Nami/NamiAtaque3.gif')
        localStorage.setItem('LogP2','<br>Nami deixou o Inimigo queimando por causa do seu trovão<br>')
        localStorage.setItem('QueimaduraP1',parseInt(localStorage.getItem('QueimaduraP1'))+3);
    },
    botao4: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (25 - 18)) + 18);
        localStorage.setItem('AtackGifP2','personagens/Nami/NamiAtaque4.gif')
        localStorage.setItem('LogP2','<br>Nami Lançou um Raio poderoso causando muito dano <br>')

    },

    info:function () {        
    const info = `
    NAMI:
    <hr>
    RELÂMPAGO DEVASTADOR: NAMI CONVOCA UM PODEROSO RAIO ELÉTRICO, CAUSANDO ENTRE 8 A 13 DE DANO E COM 25% DE CHANCE DE PARALISAR O INIMIGO POR 1 TURNO.
    <hr>
    NÉVOA REVIGORANTE: NAMI CRIA UMA NÉVOA CURATIVA, RESTAURANDO 10% DE SUA SAÚDE.
    <hr>
    TEMPESTADE FURIOSA: NAMI CONVOCA UMA PODEROSA TEMPESTADE ELÉTRICA, CAUSANDO 5 DE DANO POR 3 TURNOS CONSECUTIVOS.
    <hr>
    ataque 4- Relâmpago Celestial(ultimate): Nami invoca um raio poderoso do céu, que atinge um inimigo com precisão fulminante causando entre 18-24 de dano`;

        localStorage.setItem('infoP2',info)  
    }


};


export const Ace = {
    botao1: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (17 - 10)) + 10);
        localStorage.setItem('AtackGifP2','personagens/Ace/AceAtaque1.gif')
        localStorage.setItem('QueimaduraP1',parseInt(localStorage.getItem('QueimaduraP1'))+2);
    },
    botao2: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Ace/AceAtaque2.gif')
        localStorage.setItem('BuffP2',parseInt(localStorage.getItem('BuffP2'))+3);
    },
    botao3: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Ace/AceAtaque3.gif')
        localStorage.setItem('QueimaduraP1',parseInt(localStorage.getItem('QueimaduraP1'))+4);
    },
    botao4: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (27 - 20)) + 20);
        localStorage.setItem('AtackGifP2','personagens/Ace/AceAtaque4.gif')

    },

    info:function () {        
    const info = `
    Ace:
    <hr>
    Kyokaen : Ace lança uma onda de fogo em direção ao inimigo, causando entre 10 a 16 de dano e aplicando queimadura por 2 turnos.
    <hr>
    MURALHA DE FOGO: Ace cria uma barreira de chamas ao redor de si mesmo, se Buffando por 3 turnos
    <hr>
    Kagero : Ace arremessa uma esfera de fogo que explode ao atingir o inimigo, Deixando ele queimando por 4 turnos
    <hr>
    Hiken : Ace lança uma bola de fogo, causando entre 20 a 26 de dano ao inimigo`

        localStorage.setItem('infoP2',info)  
    }


};

export const Zoro = {
    botao1: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (18 - 14)) + 14);
        localStorage.setItem('AtackGifP2','personagens/Zoro/ZoroAtaque1.gif')
    },
    botao2: function() {
        localStorage.setItem('DanoP2',6);
        localStorage.setItem('AtackGifP2','personagens/Zoro/ZoroAtaque2.gif')
        localStorage.setItem('BuffP2',parseInt(localStorage.getItem('BuffP2'))+2);
    },
    botao3: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Zoro/ZoroAtaque3.gif')
        localStorage.setItem('ImuneP2',parseInt(localStorage.getItem('ImuneP2'))+1);
    },
    botao4: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (26 - 18)) + 18);
        localStorage.setItem('AtackGifP2','personagens/Zoro/ZoroAtaque4.gif')
        localStorage.setItem('DebuffP1',parseInt(localStorage.getItem('DebuffP1'))+1);

    },

    info:function () {        
    const info = `
    Zoro:
    <hr>
  CUTELARIA TRINÁRIA: Zoro utiliza um ataque de três espadas simultaneamente, causando entre 14 a 18 de dano ao inimigo.
    <hr>
    CORTA-VENTO: Zoro realiza um corte rápido que cria uma rajada de vento, causando 9 de dano e se buffando por 2 turnos    
    <hr>
    Haki da Observação: Zoro se esquiva do ataque usando seu Haki da Observação se tornando Imune ao ataque
    <hr>
    RÁFAGA TORNADO (ULTIMATE): Zoro executa um ataque devastador girando suas espadas em alta velocidade, causando entre 18 a 25 de dano ao inimigo e causando um debuff por 1 turno`

        localStorage.setItem('infoP2',info)  
    }


};


export const Luffy = {
    botao1: function() {
        var chance = Math.random();
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (16 - 9)) + 9);
        localStorage.setItem('AtackGifP2','personagens/Luffy/LuffyAtaque1.gif')
        if (chance <= 0.30) { 
            localStorage.setItem('ParalizamentoP1',parseInt(localStorage.getItem('ParalizamentoP1'))+1)
            }     
    },
    botao2: function() {
        localStorage.setItem('DanoP2',14);
        localStorage.setItem('AtackGifP2','personagens/Luffy/LuffyAtaque2.gif')
        localStorage.setItem('DebuffP1',parseInt(localStorage.getItem('DebuffP1'))+2);
    },
    botao3: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (16 - 10)) + 10);
        localStorage.setItem('AtackGifP2','personagens/Luffy/LuffyAtaque3.gif')
        localStorage.setItem('QueimaduraP1',parseInt(localStorage.getItem('QueimaduraP1'))+2);
    },
    botao4: function() {
        var chance = Math.random();

        localStorage.setItem('DanoP2',24);
        localStorage.setItem('AtackGifP2','personagens/Luffy/LuffyAtaque4.gif')
        if (chance <= 0.38) { 
            localStorage.setItem('ParalizamentoP1',parseInt(localStorage.getItem('ParalizamentoP1'))+1)
            }     
        },

    info:function () {        
    const info = `
    Luffy:
    <hr>
    GOMU GOMU NO PISTOL: Luffy utiliza um soco poderoso com a força de seu poder de borracha, causando entre 9 a 15 de dano e com 30% de chance de  paralizar o inimigo por 1 turno.
        <hr>
    Gomu Gomu no Rifle:  Luffy estica seus membros para realizar um ataque de longo alcance, causando 14 de dano e aplicando um debuff por 2 turnos.  
    <hr>
    Red hawk: Luffy da um soco de fogo causando entre 10 a 15 de Dano e deixando uma queimadura por 2 turnos
    <hr>
    Haki Do Rei: Luffy Causa 24 de Dano e  tem 38% de chance de deixar o inimigo  paralizado por 1 turno`

        localStorage.setItem('infoP2',info)  
    }


};



export const Shanks = {
    botao1: function() {
        localStorage.setItem('DanoP2',15);
        localStorage.setItem('AtackGifP2','personagens/Shanks/ShanksAtaque1.gif')
       
    },
    botao2: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Shanks/ShanksAtaque2.gif')
        localStorage.setItem('ImuneP2',parseInt(localStorage.getItem('ImuneP2'))+1);
        localStorage.setItem('DebuffP1',parseInt(localStorage.getItem('DebuffP1'))+2);

    },
    botao3: function() {
       var chance = Math.random();

        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Shanks/ShanksAtaque3.gif')
        if (chance <= 0.5) { 
            localStorage.setItem('ParalizamentoP1',parseInt(localStorage.getItem('ParalizamentoP1'))+1)
        }
        localStorage.setItem('BuffP2',parseInt(localStorage.getItem('BuffP2'))+3);

    },
    botao4: function() {

        localStorage.setItem('DanoP2',20);
        localStorage.setItem('AtackGifP2','personagens/Shanks/ShanksAtaque4.gif')
        localStorage.setItem('QueimaduraP1',parseInt(localStorage.getItem('QueimaduraP1'))+2);

     
        },

    info:function () {        
    const info = `
    Shanks:
    <hr>
    Busoshoku Haki: Utiliza um Soco com Haki do armamento causando 15 de Dano
        <hr>
    Kenbunshoku Haki:  Fica imune por 1 turnos e causa Debuff por 2 turnos
    <hr>
   Haoshoku Haki: tem 50% de chance de paralizar o Inimigo e buffa seu Dano por 3 turnos 
    <hr>
   Kamusari :Com Gryphon Shanks causa 20 De Dano e causa queimadura por 2 turnos  `

        localStorage.setItem('infoP2',info)  
    }


};