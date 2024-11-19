let boxex = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let trun0 = true;// player X, player 0

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

boxex.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (trun0) {
            box.innerText = "0";
            trun0 = false;
        } else {
            box.innerText = "X";
            trun0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for (patten of winPattens) {
        console.log(patten[0], patten[1], patten[2])
        console.log(
            boxex[patten[0]].innerText, 
            boxex[patten[1]].innerText, 
            boxex[patten[2]].innerText
        )
    }
}