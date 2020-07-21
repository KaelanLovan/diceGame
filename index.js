//Dice 1 random img
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "dice" + randomNumber1 + ".png";
var dice1img = "images/" + dice1;
var img1 = document.querySelectorAll("img")[0];
//Image set
img1.setAttribute("src", dice1img);


//Dice 2 random img
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "dice" + randomNumber2 + ".png";
var dice2img = "images/" + dice2;
var img2 = document.querySelectorAll("img")[1];
//Image Set
img2.setAttribute("src", dice2img);


//Win Statement
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML= "Player 1 Wins!!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML= "Player 2 Wins!!!";
}
else {
    document.querySelector("h1").innerHTML= "It's a tie!!!";
}
