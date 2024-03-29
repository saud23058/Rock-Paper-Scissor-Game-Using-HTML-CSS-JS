let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genComputerChoice=()=>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Game was draw, play again"
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin){
         userScore++;
        userScorePara.innerText=userScore;
         msg.innerText=`You win ${userChoice} beats ${computerChoice}`
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose ${computerChoice} beats ${userChoice}`
    }
}

const playGame =(userChoice)=>{
//Generate computer Random number
const computerChoice= genComputerChoice();


if(userChoice===computerChoice){
    //Draw Game
    drawGame();
}{
    let userWin=true;
    if(userChoice==="rock"){
       userWin= computerChoice=== "paper"?false : true;
    }else if(userChoice==="paper"){
       userWin= computerChoice==="scissor"?false:true;
    }else{
        computerChoice==="rock"?false : true;
    }
    showWinner(userWin,userChoice,computerChoice);
}
}


choices.forEach((choice)=>{
choice.addEventListener("click", ()=>{
   const userChoice=choice.getAttribute("id");
   playGame(userChoice) 
})
})
