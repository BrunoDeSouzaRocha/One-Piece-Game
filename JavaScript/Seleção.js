let primarySelected = false;

function selectCharacter(characterName) {
    const primaryCharacterImg = document.getElementById('primary-character-img');
    const secondaryCharacterImg = document.getElementById('secondary-character-img');
    const proceedButton = document.getElementById('proceed-button');
    const NomePersonagem1 = document.getElementById('Nomepersonagem1')
    const NomePersonagem2 = document.getElementById('Nomepersonagem2')
    const characterSrc = `personagens/${characterName}/${characterName}.Gif`;

    



    
    

    if (!primarySelected) {
        primaryCharacterImg.src = characterSrc;
        primaryCharacterImg.alt = characterName;
        NomePersonagem1.textContent = characterName.toUpperCase()
        primarySelected = true;
        localStorage.setItem('NomePersonagem1', characterName);


    } else {
        secondaryCharacterImg.src = characterSrc;
        secondaryCharacterImg.alt = characterName;
        primarySelected = false;
        NomePersonagem2.textContent = characterName.toUpperCase()
        proceedButton.style.display = 'block';
        localStorage.setItem('NomePersonagem2', characterName);




        

    }

    
}


function ZerandoStatus() {



    // Inicializando o turno
    localStorage.setItem('turno', 1);

    localStorage.setItem('paralizado1', 0);
    localStorage.setItem('paralizado2', 0);


    localStorage.setItem('buff1', 0);
    localStorage.setItem('buff2', 0);


// Atualizando o estilo e o texto das barras de vida    
    localStorage.setItem('VidaJogador1', 100);
    localStorage.setItem('VidaJogador2', 100);

    const BarraDeVida1 = document.getElementById('VidaJogador1');
    const BarraDeVida2 = document.getElementById('VidaJogador2');

    
        BarraDeVida1.style.width = '100%';
        BarraDeVida1.textContent = '100%';

        BarraDeVida2.style.width = '100%';
        BarraDeVida2.textContent = '100%';

        window.open('./combate2.html', '_blank');  // Abre a segunda página


};
