

export const Kizaru = {
    botao1: function() {

        localStorage.setItem('DanoP2',Math.floor(Math.random() * (15 - 8)) + 8);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Kizaru Usou CHUTE DE LUZ')

    },
    botao2: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruVooIntangivel.Gif')
        localStorage.setItem('ImuniP2', parseInt(localStorage.getItem('ImuniP2'))+1)
        localStorage.setItem('LogP2','Kizaru Ficou intangivel por 1 turno')

    },
    botao3: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruVooIntangivel.Gif')
        localStorage.setItem('BuffP2', parseInt(localStorage.getItem('BuffP2'))+2)
        localStorage.setItem('LogP2','Kizaru Aumentou seu Dano em 50% por 2 turnos')

    },
    botao4: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (26 - 20)) + 20);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/ExplosãoLuminosa.Gif')
        localStorage.setItem('ParalizamentoP2',parseInt(localStorage.getItem('ParalizamentoP2'))+1)
        localStorage.setItem('LogP2','Kizaru Lançou uma grande explosao de luz cusando muito dano')

    },

    info:function () {
        const info = `
            <strong>KIZARU:</strong>
            <hr>
            <strong>CHUTE DE LUZ:</strong>
            Kizaru lança um poderoso chute de luz, causando entre 8 a 14 de dano.
            <hr>
            <strong>VOO INTANGÍVEL:</strong>
            Kizaru utiliza sua habilidade de voo para se tornar intangível por um turno, tornando-se imune a danos normais durante esse período.
            <hr>
            <strong>ESPIRAL DE LUZ:</strong>
            Kizaru cria uma espiral de luz ao redor de si mesmo, aumentando o seu poder de ataque em 50% por 2 turnos.
            <hr>
            <strong>EXPLOSÃO LUMINOSA (ULTIMATE):</strong>
            Kizaru concentra uma quantidade massiva de energia luminosa em suas mãos e a lança contra um inimigo, causando um dano explosivo. Causa 20-25 de dano a um único inimigo, mas ficando um turno sem poder fazer nada.
                    `;

        localStorage.setItem('infoP2',info)
    }

    




};





export const Nami = {
    botao1: function() {
        var chance = Math.random();


        localStorage.setItem('DanoP2',Math.floor(Math.random() * (14 - 8)) + 8);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Nami Lançou um raio no inimigo')

        if (chance <= 0.25) { 
        localStorage.setItem('ParalizamentoP1',parseInt(localStorage.getItem('ParalizamentoP1'))+1)
        localStorage.setItem('LogP2','Nami Lançou um raio no inimigo e paralizou o inimigo por 1 turno')
        } 

    },
    botao2: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Nami curou 10 de vida')
        localStorage.setItem('CuraP2',10);
    },
    botao3: function() {
        localStorage.setItem('DanoP2',0);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Nami deixou o Inimigo queimando por causa do seu trovão')
        localStorage.setItem('QueimaduraP1',parseInt(localStorage.getItem('QueimaduraP1'))+3);
    },
    botao4: function() {
        localStorage.setItem('DanoP2',Math.floor(Math.random() * (25 - 18)) + 18);
        localStorage.setItem('AtackGifP2','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Nami Lançou um Raio poderoso causando muito dano mas ficando paralizada por 1 turno')
        localStorage.setItem('ParalizamentoP2',parseInt(localStorage.getItem('ParalizamentoP2'))+1)

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
    ataque 4- Relâmpago Celestial(ultimate): Nami invoca um raio poderoso do céu, que atinge um inimigo com precisão fulminante causando entre 18-24 de dano deixando o inimgo Mas ficando um turno sem poder fazer nada
   `;

        localStorage.setItem('infoP2',info)  
    }





};


