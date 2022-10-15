const buttonselect = document.querySelectorAll('.button');
const resultdiv = document.querySelector('.resultcont');
const plyaerscoredisp = document.querySelector('.playerscore');
const compscoredisp = document.querySelector('.compscore');
let playerscore = 0;
let computerscore = 0;
const winnerdisp = document.querySelector('.winner');

function getComputerChoice(){
    let compChoiceNum = Math.floor(Math.random()*3)+1;

    if(compChoiceNum === 1){
        console.log('rock');
        return('rock');
    } else if(compChoiceNum === 2){
        console.log('paper');
        return('paper');
    } else{
        console.log('sicssors');
        return('scissors');
    }
}

function getPlayerSelection(selection){
    console.log(selection);
    return(selection);
}

function playRound(playerselect, compChoice){
    if(playerselect === 'rock' && compChoice == 'paper'){
        resultdiv.textContent = 'You Lose! Paper beats Rock';
        computerscore++;
    } else if(playerselect === 'rock' && compChoice === 'scissors'){
        resultdiv.textContent = 'You Win! Rock beats Scissors';
        playerscore++;
    } else if(playerselect === 'paper' && compChoice === 'rock'){
        resultdiv.textContent = 'You Win! Paper beats Rock';
        playerscore++;
    } else if(playerselect === 'paper' && compChoice === 'scissors'){
        resultdiv.textContent = 'You Lose! Scissors beats Paper';
        computerscore++;
    } else if(playerselect === 'scissors' && compChoice === 'rock'){
        resultdiv.textContent = 'You Lose! Rock beats Scissors';
        computerscore++;
    } else if(playerselect === 'scissors' && compChoice === 'paper'){
        resultdiv.textContent = 'You Win! Scissors Beats Paper';
        playerscore++
    }else{
        resultdiv.textContent = 'It\'s a Tie!';
    }
}

buttonselect.forEach((button)=>{
    button.addEventListener('click', (e) => {
        playRound(getPlayerSelection(e.target.id), getComputerChoice());
        plyaerscoredisp.textContent = `Your Score ${playerscore}`;
        compscoredisp.textContent = `Computer Score ${computerscore}`;
        if(playerscore == 5){
            winnerdisp.textContent = 'You Win!';
            computerscore = 0;
            playerscore = 0;
        } else if(computerscore == 5){
            winnerdisp.textContent = 'You Lose';
            computerscore = 0;
            playerscore = 0;
        }
    });
});