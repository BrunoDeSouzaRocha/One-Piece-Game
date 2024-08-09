
function selectCharacter(characterName) {
    const primaryCharacterImg = document.getElementById('primary-character-img');
    const NomePersonagem1 = document.getElementById('Nomepersonagem1')
    const characterSrc = `personagens/${characterName}/${characterName}.Gif`;
    const InfoPersoangem=document.getElementById('InfoPersoangem');


    if (characterName=='Kizaru') {
        InfoPersoangem.innerHTML=`
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
                    `        
    }
    if (characterName=='Nami') {
        InfoPersoangem.innerHTML=  ` NAMI:
        <hr>
        RELÂMPAGO DEVASTADOR: NAMI CONVOCA UM PODEROSO RAIO ELÉTRICO, CAUSANDO ENTRE 8 A 13 DE DANO E COM 25% DE CHANCE DE PARALISAR O INIMIGO POR 1 TURNO.
        <hr>
        NÉVOA REVIGORANTE: NAMI CRIA UMA NÉVOA CURATIVA, RESTAURANDO 10% DE SUA SAÚDE.
        <hr>
        TEMPESTADE FURIOSA: NAMI CONVOCA UMA PODEROSA TEMPESTADE ELÉTRICA, CAUSANDO 5 DE DANO POR 3 TURNOS CONSECUTIVOS.
        <hr>
        Relâmpago Celestial(ultimate): Nami invoca um raio poderoso do céu, que atinge um inimigo com precisão fulminante causando entre 18-24 de dano deixando o inimgo Mas ficando um turno sem poder fazer nada
       `;
        
    }
    if (characterName=='Ace') {
        InfoPersoangem.innerHTML=  `
    Ace:
    <hr>
    Kyokaen : Ace lança uma onda de fogo em direção ao inimigo, causando entre 10 a 16 de dano e aplicando queimadura por 2 turnos.
    <hr>
    MURALHA DE FOGO: Ace cria uma barreira de chamas ao redor de si mesmo, se Buffando por 3 turnos
    <hr>
    Kagero : Ace arremessa uma esfera de fogo que explode ao atingir o inimigo, Deixando ele queimando por 4 turnos
    <hr>
    Hiken : Ace lança uma bola de fogo, causando entre 20 a 26 de dano ao inimigo`
;
        
    }    if (characterName=='Zoro') {
        InfoPersoangem.innerHTML=  `
    Zoro:
    <hr>
  CUTELARIA TRINÁRIA: Zoro utiliza um ataque de três espadas simultaneamente, causando entre 14 a 18 de dano ao inimigo.
    <hr>
    CORTA-VENTO: Zoro realiza um corte rápido que cria uma rajada de vento, causando 9 de dano e se buffando por 2 turnos    
    <hr>
    Haki da Observação: Zoro se esquiva do ataque usando seu Haki da Observação se tornando Imune ao ataque
    <hr>
    RÁFAGA TORNADO (ULTIMATE): Zoro executa um ataque devastador girando suas espadas em alta velocidade, causando entre 18 a 25 de dano ao inimigo e causando um debuff por 1 turno`;
        
    }    if (characterName=='Luffy') {
        InfoPersoangem.innerHTML=  `
    Luffy:
    <hr>
    GOMU GOMU NO PISTOL: Luffy utiliza um soco poderoso com a força de seu poder de borracha, causando entre 9 a 15 de dano e com 30% de chance de  paralizar o inimigo por 1 turno.
        <hr>
    Gomu Gomu no Rifle:  Luffy estica seus membros para realizar um ataque de longo alcance, causando 14 de dano e aplicando um debuff por 2 turnos.  
    <hr>
    Red hawk: Luffy da um soco de fogo causando entre 10 a 15 de Dano e deixando uma queimadura por 2 turnos
    <hr>
    Haki Do Rei: Luffy Causa 24 de Dano e  tem 38% de chance de deixar o inimigo  paralizado por 1 turno`;
        
    }    if (characterName=='Shanks') {
        InfoPersoangem.innerHTML=  `
    Shanks:
    <hr>
    Busoshoku Haki: Utiliza um Soco com Haki do armamento causando 15 de Dano
        <hr>
    Kenbunshoku Haki:  Fica imune por 1 turnos e causa Debuff por 2 turnos
    <hr>
   Haoshoku Haki: tem 50% de chance de paralizar o Inimigo e buffa seu Dano por 3 turnos 
    <hr>
   Kamusari :Com Gryphon Shanks causa 20 De Dano e causa queimadura por 2 turnos  `;
        
    }

    primaryCharacterImg.src = characterSrc;
    primaryCharacterImg.alt = characterName;
    NomePersonagem1.textContent = characterName.toUpperCase()
    }

    



function ResetDoLocalStorage() {



}

