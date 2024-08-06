

export const Kizaru = {
    botao1: function() {

        localStorage.setItem('DanoP2',Math.floor(Math.random() * (15 - 8)) + 8);
        localStorage.setItem('AtackGifP1','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Kizaru Usou CHUTE DE LUZ')

    },
    botao2: function() {
        console.log("função de ataque do botao 2");
        
    },
    botao3: function() {

    },
    botao4: function() {

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

var chance = Math.random();




export const Nami = {
    botao1: function() {

        localStorage.setItem('DanoP1',Math.floor(Math.random() * (14 - 8)) + 8);
        localStorage.setItem('AtackGifP1','personagens/Kizaru/KizaruChuteDeLuz.Gif')
        localStorage.setItem('LogP2','Nami Coisou')

        if (chance <= 0.25) { 
        localStorage.setItem('ParalizamentoP1',localStorage.getItem('ParalizamentoP1')+1)
        } 

    },
    botao2: function() {
        console.log("função de ataque do botao 2");
        
    },
    botao3: function() {

    },
    botao4: function() {

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


