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
console.log(getComputerChoice())

function getHumanChoice (){
    const userChoice = prompt("Rock! Paper! Scissor!");
    return userChoice.toLowerCase();
}
console.log(getHumanChoice())

let humanScore = 0;
let compScore = 0;

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
        console.log(playRound(humanChoice, compChoice));
    }
    if (humanScore > compScore){
        console.log(`You win ${humanScore} by ${compScore} `);
    }
    else if (humanScore < compScore){
        console.log(`You loose ${humanScore} by ${compScore} `);
    }
    else{
      console.log(`Draw ${humanScore} by ${compScore}`)
    }
}

