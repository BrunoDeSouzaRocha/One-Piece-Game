let primarySelected = false;
export let nomeDoBoneco1=''
export let nomeDoBoneco2=''


function selectCharacter(characterName) {
    const primaryCharacterImg = document.getElementById('primary-character-img');
    const secondaryCharacterImg = document.getElementById('secondary-character-img');
    const proceedButton = document.getElementById('proceed-button');
    const NomePersonagem1 = document.getElementById('Nomepersonagem1')
    const NomePersonagem2 = document.getElementById('Nomepersonagem2')
    const characterSrc = `personagens/${characterName}/${characterName}.Gif`;


    const personagem2 = document.getElementById('gif_segundario');
    console.log('personagem1:', personagem2);
    
    const personagem1 = document.getElementById('gif_principal');
    console.log('personagem1:', personagem1);

    
    

    if (!primarySelected) {
        primaryCharacterImg.src = characterSrc;
        primaryCharacterImg.alt = characterName;
        NomePersonagem1.textContent = characterName.toUpperCase()
        primarySelected = true;
        nomeDoBoneco1=characterName
        console.log(nomeDoBoneco1);

    } else {
        secondaryCharacterImg.src = characterSrc;
        secondaryCharacterImg.alt = characterName;
        primarySelected = false;
        NomePersonagem2.textContent = characterName.toUpperCase()
        proceedButton.style.display = 'block';
        nomeDoBoneco2=characterName
        console.log(nomeDoBoneco2);


        

    }

    
}
