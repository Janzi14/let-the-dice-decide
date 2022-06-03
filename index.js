//random numbers to select the dices
let numberPlayer1 = Math.floor(Math.random() * 6) + 1;
let numberPlayer2 = Math.floor(Math.random() * 6) + 1;

//using the numbers to create the right paths to the images
let image1Name = "images/dice" + numberPlayer1 + ".png";
let image2Name = "images/dice" + numberPlayer2 + ".png";

//set the images
document.querySelectorAll("img")[0].setAttribute("src", image1Name);
document.querySelectorAll("img")[1].setAttribute("src", image2Name);

//check who won, or if it was a tie
if (numberPlayer1 > numberPlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (numberPlayer1 < numberPlayer2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
    document.querySelector("h1").innerHTML = "It's a tie";
}