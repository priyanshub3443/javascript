let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You win!");
        msg.innerText = "You Win.";
        userScore++;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    } else {
        console.log("You lose.");
        msg.innerText = "You Lose.";
        compScore++;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
};

const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "Game was a Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const playGame = (userchoice) => {
    console.log("User choice =", userchoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else if (
        (userchoice === "rock" && compChoice === "scissors") ||
        (userchoice === "paper" && compChoice === "rock") ||
        (userchoice === "scissors" && compChoice === "paper")
    ) {
        showWinner(true);
    } else {
        showWinner(false);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was clicked:", userchoice);
        playGame(userchoice);
    });
});
