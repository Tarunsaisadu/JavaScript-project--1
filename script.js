let computerPlay =()=>{

 let arr=["rock", "paper", "scissor"]

  let result= arr[Math.floor(Math.random() * arr.length)];
    return result;
};



let playRound = (playerSelection, computerSelection) =>{

    playerSelection = prompt("Choose from any 3").toLowerCase();
    computerSelection= computerPlay()
    
    if(playerSelection===computerSelection){
        alert("game is draw")
    }
    else if(playerSelection==="rock" && computerSelection==="paper"){
        alert("computer beats computer")
    }
    else if(playerSelection==="paper" && computerSelection==="rock"){
        alert("player beats computer")
    }
    else if(playerSelection==="scissors" && computerSelection==="rock"){
        alert("computer beats player")
    }
    else if(playerSelection==="rock" && computerSelection==="scissors"){
        alert("player beats computer")
    }
    else if(playerSelection==="paper" && computerSelection==="scissors"){
        alert("computer beats player")
    }
    else if(playerSelection==="scissors" && computerSelection==="paper"){
        alert("player beats computer")
    }
}

playRound()

