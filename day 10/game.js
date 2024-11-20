

let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trun0 = true;// player X, player 0
let count =0;

const winPattens = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],

];
const resetGame = () => {
    trun0 = true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const disableBoxes = () => {
    for (let box of boxex) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxex) {
        box.disabled = false;
        box.innerText = "";
    }
}

boxex.forEach((box) => {
    box.addEventListener("click", () => {

        if (trun0) {
            box.innerText = "0";
            trun0 = false;
        } else {
            box.innerText = "X";
            trun0 = true;
        }
        box.disabled = true;
        count++;

        let isWinner= checkWinner();

        if(count===9 && !isWinner){
            gameDraw();
        }
    })
})

const gameDraw = () =>{
    msg.innerText= `game was a gameDraw.`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for (let patten of winPattens) {

        let pos1Val = boxex[patten[0]].innerText;
        let pos2Val = boxex[patten[1]].innerText;
        let pos3Val = boxex[patten[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos3Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

