const player1 = (player1) => {
    randomNumber1 = Math.floor(Math.random() * 3 + 1);
switch (randomNumber1) {
    case 1:
    return 'rock';
    case 2:
    return 'scissors';
    case 3:
    return 'paper';
    };
}

const player2 = () => {
    randomNumber2 = Math.floor(Math.random() * 3 + 1);
    switch (randomNumber2) {
    case 1:
    return 'rock';
    case 2:
        return 'scissors';
    case 3:
        return 'paper';
    };
}

function determineWinner(player1, player2) {
    if (player1 === player2) {
        return 'the game is tie';
    } else if (player1 === 'rock' && player2 === 'paper') {
        return 'the computer won';
    } else if (player1 === 'scissors' && player2 === 'paper') {
        return 'you won';
    } else if (player1 === 'paper' && player2 === 'rock') {
        return 'you won';
    } else if (player1 === 'rock' && player2 === 'scissors') {
        return 'you won';
    } else if (player1 === 'scissors' && player2 === 'rock') {
        return 'the computer won';
    } else if (player2 === 'rock' && player1 === 'paper') {
        return 'the computer won';
    } else if (player2 === 'scissors' && player1 === 'paper') {
        return 'the computer won';
    }
}

const playGame = () => {
let player1 = getPlayer1();
let player2 = getPlayer2();
console.log ('You threw: ' + userChoice);
console.log('The computer threw: ' + computerChoice);

console.log(determineWinner(player1, player));
};

playGame();
