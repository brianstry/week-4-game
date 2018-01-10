
var wins = 0;
var lose = 0;
var numberToGuess = 1;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var currentNumber = 0;

document.getElementById("win-number").innerHTML = "Wins:  " + wins;
document.getElementById("lose-number").innerHTML = "Lose:  " + lose;

function nextRound(){
    if (currentNumber == numberToGuess){
        document.getElementById("win-lose").innerHTML = "You Win!";
        wins++;
        game();
    } else if(currentNumber > numberToGuess){
        document.getElementById("win-lose").innerHTML = "You lose!";
        loss++;
        game();
    }
}

function game(){
    numberToGuess = Math.floor(Math.random() * 120) + 19;
    currentNumber = 0;
    crystalOne = Math.floor(Math.random() * 12) + 1;
    crystalTwo = Math.floor(Math.random() * 12) + 1;
    crystalThree = Math.floor(Math.random() * 12) + 1;
    crystalFour = Math.floor(Math.random() * 12) + 1;
    document.getElementById("number-to-hit").innerHTML = "Number to match: " + numberToGuess;
    document.getElementById("player-number").innerHTML = "Your number: " + currentNumber;


    $("#gem-1").on("click", function() {
        currentNumber = currentNumber + crystalOne;
        document.getElementById("player-number").innerHTML = "Your number: " + currentNumber;
        console.log(currentNumber);
        nextRound();
    })
    $("#gem-2").on("click", function() {
        currentNumber = currentNumber + crystalTwo;
        document.getElementById("player-number").innerHTML = "Your number: " + currentNumber;
        console.log(currentNumber);
        nextRound();
    })
    $("#gem-3").on("click", function() {
        currentNumber = currentNumber + crystalThree;
        document.getElementById("player-number").innerHTML = "Your number: " + currentNumber;
        console.log(currentNumber);
        nextRound();
    })
    $("#gem-4").on("click", function() {
        currentNumber = currentNumber + crystalFour;
        document.getElementById("player-number").innerHTML = "Your number: " + currentNumber;
        console.log(currentNumber);
        nextRound();
    })

    

}


$(document).ready(function(){
    game();
});





