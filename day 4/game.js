let gameNum=25;
let userNum= prompt("guess the game number : ");

while(userNum != gameNum){
    userNum = prompt(" you entered wrong number. gues again :");
}

console.log("Congratulation , you entered the right number");