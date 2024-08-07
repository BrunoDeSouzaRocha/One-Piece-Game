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


function ResetDoLocalStorage() {

//P1
localStorage.setItem('cliqueP1','false')
localStorage.setItem('DanoP1',0)
localStorage.setItem('AtackGifP1','')
localStorage.setItem('LogP1','')
localStorage.setItem('ParalizamentoP1',0)
localStorage.setItem('QueimaduraP1',0)
localStorage.setItem('DebuffP1',0)
localStorage.setItem('BuffP1',0)
localStorage.setItem('ImuneP1',0)
localStorage.setItem('CuraP1',0)
localStorage.setItem('VidaJogador1',100)


//P2
localStorage.setItem('cliqueP2','false')
localStorage.setItem('DanoP2',0)
localStorage.setItem('AtackGifP2','')
localStorage.setItem('LogP2','')
localStorage.setItem('ParalizamentoP2',0)
localStorage.setItem('QueimaduraP2',0)
localStorage.setItem('DebuffP2',0)
localStorage.setItem('BuffP2',0)
localStorage.setItem('ImuneP2',0)
localStorage.setItem('CuraP2',0)
localStorage.setItem('VidaJogador2',100)




}

