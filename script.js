let playerselect = '';
let compChoice = '';

function getComputerChoice(){
    let compChoiceNum = Math.floor(Math.random()*3)+1;

    if(compChoiceNum === 1){
        compChoice = 'rock';
    } else if(compChoiceNum === 2){
        compChoice = 'paper';
    } else{
        compChoice = 'scissors'
    }
    console.log(compChoice);
}

function getPlayerSelection(){
    let options = /(rock|paper|scissors)/ig;
    playerselect = prompt('Your Choice?','');

    if(playerselect === ''){
        alert('You Must Enter and Option');
        getPlayerSelection();
    } else if(playerselect == null){
        alert('Game Cancled')
    }else if(!playerselect.match(options)){
        alert('You must enter Rock, Paper, or Scissors');
        getPlayerSelection();
    } 
    
    playerselect = playerselect.toLowerCase();
    console.log(playerselect);
}

function playRound(playerselect, compChoice){
    if(playerselect === 'rock' && compChoice == 'paper'){
        return('You Lose! Paper beats Rock');
    } else if(playerselect === 'rock' && compChoice === 'scissors'){
        return('You Win! Rock beats Scissors');
    } else if(playerselect === 'paper' && compChoice === 'rock'){
        return('You Win! Paper beats Rock');
    } else if(playerselect === 'paper' && compChoice === 'scissors'){
        return('You Lose! Scissors beats Paper');
    } else if(playerselect === 'scissors' && compChoice === 'rock'){
        return('You Lose! Rock beats Scissors');
    } else if(playerselect === 'scissors' && compChoice === 'paper'){
        return('You Win! Scissors Beats Paper');
    }else{
        return('It\'s a Tie!');
    }
}

function game(){
    for (let i = 0; i<5; i++){
        getPlayerSelection();
        getComputerChoice();
        if(playerselect === null){
            return;
        }
        console.log(playRound(playerselect, compChoice));
    }
}