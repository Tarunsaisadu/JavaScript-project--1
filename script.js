let playerCount=0;
let computerScore=0;


function chooseRock(playerSelection,computerSelection){
    playerSelection==="rock";
    computerSelection=computerPlay();
    if(playerSelection===computerSelection){
        
        tempwinner.innerHTML="Game is Draw"
    }
    else if(computerSelection==="paper"){
        tempwinner.innerHTML="paper wins";
       computerscore.innerHTML= `${computerScore++}`
    }
    else if(computerSelection==="scissors"){
        tempwinner.innerHTML="rock wins"
       playerScore.innerHTML= `${playerCount++}`
    }
console.log(computerSelection)
}

function choosePaper(playerSelection,computerSelection){
    playerSelection==="paper";
    computerSelection=computerPlay();
    if(playerSelection===computerSelection){
        
        tempwinner.innerHTML="Game is Draw"
    }
    else if(computerSelection==="rock"){
        tempwinner.innerHTML="paper wins"
        computerscore.innerHTML=`${computerScore++}`
    }
    else if(computerSelection==="scissors"){
        tempwinner.innerHTML="scissors wins"
        playerScore.innerHTML=`${playerCount++}`
    }
    console.log(computerSelection)
}
function chooseScissors(playerSelection,computerSelection){

    playerSelection==="scissors";
    computerSelection=computerPlay();
    if(playerSelection===computerSelection){
        
        tempwinner.innerHTML="Game is Draw"
    }
    else if(computerSelection==="rock"){
        tempwinner.innerHTML="rock wins"
        computerscore.innerHTML=`${computerScore++}`
    }
    else if(computerSelection==="paper"){
        tempwinner.innerHTML="scissors wins"
        playerScore.innerHTML=`${playerCount++}`
    }
    console.log(computerSelection)
}


document.getElementById("rock").addEventListener("click",chooseRock)
document.getElementById("paper").addEventListener("click",choosePaper)
document.getElementById("scissor").addEventListener("click",chooseScissors)

let tempwinner=document.getElementById("temp-winner");
let playerScore=document.getElementsByClassName("player-score");
let computerscore=document.getElementsByClassName("computer-score");





function computerPlay() {

    let arr = ["rock", "paper", "scissor"];

    let result = arr[Math.floor(Math.random() * arr.length)];
    return result;
}





