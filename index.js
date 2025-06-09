let humanScore = 0;
let compScore = 0;

function getComputerChoice(){
    const randomNumber = Math.floor (Math.random()* 3)

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber ===1) {
        return "paper";
    } else {
        return "scissor";
    }
}
//console.log(getComputerChoice())

function getHumanChoice (){
    const userChoice = prompt("Rock! Paper! Scissor!");
    return userChoice.toLowerCase();
}
//console.log(getHumanChoice())

function playRound(humanChoice, compChoice){ 
        if (humanChoice === compChoice) {
        return "It's a Draw!";
    } else if ((humanChoice === "rock" && compChoice=== "scissor") ||
                (humanChoice === "scissor" && compChoice === "paper") ||
                (humanChoice === "paper" && compChoice === "rock")
            ){
                    humanScore++;
                    return "You Win";
    } else {
        compScore++;
        return "You Lose";
    }         
}

function playGame() {
    for (let i=1; i<=5; i++) {
        const humanChoice = getHumanChoice();
        const compChoice = getComputerChoice();

        console.log (`You chose ${humanChoice}`);
        console.log(`Computer chose ${compChoice}`)
        console.log(playRound(humanChoice, compChoice));
    }
    if (humanScore > compScore){
        console.log(`You win ${humanScore} ${compScore} `);
    }
    else if (humanScore < compScore){
        console.log(`You lose ${humanScore} ${compScore} `);
    }
    else{
      console.log(`Draw ${humanScore} ${compScore}`)
    }
}

playGame()
