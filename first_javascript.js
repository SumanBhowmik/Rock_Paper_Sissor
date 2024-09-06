let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll((".choice"));

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    let options = ["rock","paper","sissor"];
    //rock,paper,sissor
    const randomIndx = Math.floor(Math.random()*3);
    return options[randomIndx];
    
}

const drawGame = () =>{
    console.log("Game was Draw.");
    msg.innerText = "Game was Draw.Play Again.";
    msg.style.backgroundColor ="#081b31";
}
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText =`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("Computer Win");
        msg.innerText =`Computer Win! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    //Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("comp choice =" ,compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //siccor,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,sissor
            userWin = compChoice === "sissors" ?false : true;
        }
        else{
            //rock,paper
            userWin = compChoice === "rock" ?false : true;
        }
        showWinner(userWin ,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
       const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})