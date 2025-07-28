let computerScore=0;
let userScore=0;

const choices=document.querySelectorAll('.choice');
const userScore1=document.querySelector('#user-score');
const computerScore1=document.querySelector('#computer-score');
const message=document.querySelector('#msg');
const reset=document.querySelector('#reset-Btn');
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        const playerChoice=choice.getAttribute("id");
        const computerChoice=getComputerChoice();
        const result=getResult(playerChoice,computerChoice);
        getScore(result);
        getWinner(playerChoice,computerChoice,result);
        
    });
});
const getComputerChoice=()=>{
    const options=['rock','paper','scissors'];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
const getResult=(player,computer)=>{
    if(player===computer){
        return 'draw';
    }
    else if((player==='rock' && computer==='paper')||
            (player==='paper' && computer==='scissors') ||
            (player==='scissors' && computer==='rock')
){
    return 'win';
    }
    else{
        return 'lose';
    }
}
const getScore=(result)=>{
    if(result==='win'){
        userScore++;
        userScore1.textContent=userScore;
    }
    else if(result==='lose'){
        computerScore++;
        computerScore1.textContent=computerScore;
    }
}
const getWinner=(player,computer,result)=>{
    if(result==='draw'){
        msg.textContent=`Both Choose ${player}, Its Draw!`;
    }
    else if(result==='win'){
        msg.textContent=`You win! ${player} beats ${computer}`;
    }
    else{
        msg.textContent=`Computer win! ${computer} beats ${player}`;
    }
}
reset.addEventListener("click",()=>{
    userScore=0;
    userScore1.textContent=0;
    computerScore=0;
    computerScore1.textContent=0;
    msg.textContent="";
})
