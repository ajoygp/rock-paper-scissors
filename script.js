hand=["rock", "paper", "scissors"];
wins={"rock":"scissors",
     "paper": "rock",
     "scissors": "paper"
};

let comScore=0;
let userScore=0;
let computerScoreElm=document.querySelector(".computer-score")
let computerChoiceElm=document.querySelector(".computer-choice")
let userChoiceElm=document.querySelector(".user-choice")
let userScoreElm=document.querySelector(".user-score")
let result=document.querySelector(".result")
let roundResult=document.querySelector(".round-result")

let choices=document.querySelectorAll(".choice");
choices.forEach(choice => {
    choice.addEventListener("click",gameRound);
});


function getComputerChoice (){
    choice=Math.floor(Math.random()*3);
    return(hand[choice]);
}

function gameRound(){

    userChoice= this.getAttribute("data-key");
    computerChoice=getComputerChoice();
    computerChoiceElm.innerText=computerChoice;
    userChoiceElm.innerText=userChoice;
    userScoreElm.innerText=userScore;
    computerScoreElm.innerText=comScore;

    if(computerChoice==userChoice){
       
     roundResult.innerText=`Draw! Both ${userChoice}`;
    }

    else if(wins[userChoice]==computerChoice){
        userScore+=1;
        userScoreElm.innerText=userScore;
        roundResult.innerText=`You Win! ${userChoice} beats ${computerChoice}`
        
    }
    else if (wins[computerChoice]==userChoice){
        
        comScore+=1;
        computerScoreElm.innerText=comScore;
        roundResult.innerText=`You Lose! ${computerChoice} beats ${userChoice}`
    
    }
    winner(userScore,comScore);

}

function winner(one, two){
  
     if (one>=5){
        result.innerText ="You win";
        choices.forEach(choice => {
            choice.removeEventListener("click",gameRound);
        });
     }
     else if (two>=5){
        result.innerText = "Computer wins";
        choices.forEach(choice => {
            choice.removeEventListener("click",gameRound);
        });
     }
        
}

function game(){
    
    
    for(let i=0; i<5;i++){
        
    }
    
    console.log(`You: ${userScore}| Computer: ${comScore} \n ${winner(userScore,comScore)}`)
}


