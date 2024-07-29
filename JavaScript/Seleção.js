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


    } else {
        secondaryCharacterImg.src = characterSrc;
        secondaryCharacterImg.alt = characterName;
        primarySelected = false;
        NomePersonagem2.textContent = characterName.toUpperCase()
        proceedButton.style.display = 'block';



        

    }

    
}
