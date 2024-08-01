let player1 = {
    health: 100,
    damageOverTime: { turns: 0, damage: 0 },
    immune: 0
};

let player2 = {
    health: 100,
    damageOverTime: { turns: 0, damage: 0 },
    immune: 0
};

let currentPlayer = 'player1';
let nextPlayer = 'player2';

function attack(player, attackType) {
    if (player !== currentPlayer) {
        alert("Não é o seu turno!");
        return;
    }

    let opponent = player === 'player1' ? 'player2' : 'player1';

    switch (attackType) {
        case 1:
            if (player === 'player1') {
                player2.damageOverTime = { turns: 3, damage: 5 };
            } else {
                player1.damageOverTime = { turns: 3, damage: 5 };
            }
            break;
        case 2:
            if (player === 'player1') {
                player2.health -= 15;
                player1.damageOverTime = { turns: 1, damage: 1 };
            } else {
                player1.health -= 15;
                player2.damageOverTime = { turns: 1, damage: 1 };
            }
            break;
        case 3:
            if (player === 'player1') {
                player1.immune = 2;
            } else {
                player2.immune = 2;
            }
            break;
    }

    updateHealth();
    logAction(player, attackType);

    if (currentPlayer === 'player1') {
        currentPlayer = 'player2';
        nextPlayer = 'player1';
    } else {
        currentPlayer = 'player1';
        nextPlayer = 'player2';
        applyDamageOverTime();
        decrementImmunity();
    }
}

function applyDamageOverTime() {
    if (player1.damageOverTime.turns > 0) {
        player1.health -= player1.damageOverTime.damage;
        player1.damageOverTime.turns--;
    }
    if (player2.damageOverTime.turns > 0) {
        player2.health -= player2.damageOverTime.damage;
        player2.damageOverTime.turns--;
    }
    updateHealth();
}

function decrementImmunity() {
    if (player1.immune > 0) player1.immune--;
    if (player2.immune > 0) player2.immune--;
}

function updateHealth() {
    document.getElementById('health1').innerText = player1.health;
    document.getElementById('health2').innerText = player2.health;
}

function logAction(player, attackType) {
    const log = document.getElementById('log');
    const action = document.createElement('p');
    action.innerText = `${player} usou ataque ${attackType}`;
    log.appendChild(action);
}
