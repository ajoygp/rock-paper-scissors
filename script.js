hand=["rock", "paper", "scissors"];
wins={"rock":"scissors",
     "paper": "rock",
     "scissors": "paper"
};


function getComputerChoice (){
    choice=Math.floor(Math.random()*3);
    return(hand[choice]);
}



function getUserChoice(){
    let choice;
        while(!hand.includes(choice)){
            choice=prompt("Enter Your Choice").toLowerCase();    
        }
    return(choice)

}


function gameRound(){
    computerChoice=getComputerChoice();
    let userChoice= getUserChoice();

    if(computerChoice==userChoice){
        console.log(`Draw! Both ${userChoice}`)
    }
    else if(wins[userChoice]==computerChoice){
        console.log(`You Win! ${userChoice} beats ${computerChoice}`)
        return(1);
    }
    else if (wins[computerChoice]==userChoice){
        console.log(`You Lose! ${computerChoice} beats ${userChoice}`)
        return(2);
    }

  

}

function winner(one, two){
    if(one==two){
        return ("Its a tie");
    }
    else{
        return (one>two? "You win":"Computer wins");
    }
}

function game(){
    
    let comScore=0;
    let userScore=0;
    for(let i=0; i<5;i++){
        
        score=gameRound();
        if(score==1){
            userScore++;
        }
        else if(score==2){
            comScore++;
        }
        score=0;
    }
    
    console.log(`You: ${userScore}| Computer: ${comScore} \n ${winner(userScore,comScore)}`)
}

game()