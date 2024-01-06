const c1 = 'rock';
const c2 = 'paper';
const c3 = 'scissors';

let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

function ifRock() {
    playerChoice = c1;
    document.querySelector('.p1').setAttribute("src", "/images/rock.png");
    computerChoice = getComputerChoice();
    updateComputerImages();
    gameplay(playerChoice, computerChoice);
    updateScore();

}

function ifPaper() {
    playerChoice = c2;
    document.querySelector('.p1').setAttribute("src", "/images/paper.png");
    computerChoice = getComputerChoice();
    updateComputerImages();
    gameplay(playerChoice, computerChoice);
    updateScore();

}

function ifScissors() {
    playerChoice = c3;
    document.querySelector('.p1').setAttribute("src", "/images/scissors.png");
    computerChoice = getComputerChoice();
    updateComputerImages();
    gameplay(playerChoice, computerChoice);
    updateScore();

}

document.getElementById('rock').addEventListener('click', ifRock);
document.getElementById('paper').addEventListener('click', ifPaper);
document.getElementById('scissors').addEventListener('click', ifScissors);


function getComputerChoice() {
    let choiceNumber = Math.floor(Math.random() * 3);
    if (choiceNumber === 0) {
        return c1;
    } else if (choiceNumber === 1) {
        return c2;
    } else {
        return c3;
    }
}

function updateComputerImages() {
    if (computerChoice == c1) {
        document.querySelector('.p2').setAttribute("src", "/images/rock.png");

    } else if (computerChoice == c2) {
        document.querySelector('.p2').setAttribute("src", "/images/paper.png");

    } else if (computerChoice == c3) {
        document.querySelector('.p2').setAttribute("src", "/images/scissors.png");

    }
}

function gameplay(playerS, compS) {
    if (
        (playerS === c1 && compS === c3) ||
        (playerS === c2 && compS === c1) ||
        (playerS === c3 && compS === c2)

    ) {
        document.querySelector('#resultBox').textContent = `You win! ${playerS} beats ${compS}.`;
        playerScore++;
    } else if (
        (compS === c1 && playerS === c3) ||
        (compS === c2 && playerS === c1) ||
        (compS === c3 && playerS === c2)
    ) {
        document.querySelector('#resultBox').textContent = `You lose! ${compS} beats ${playerS}.`;
        computerScore++;

    } else if (playerS === compS) {
        console.log("It's a tie!!!");

    }

}

function updateScore() {
    document.querySelector('#psc').textContent = playerScore;
    document.querySelector('#csc').textContent = computerScore;
}