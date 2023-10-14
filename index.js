var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDice = "/images/dice" + randomNumber1 + ".png"
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDice2 = "/images/dice" + randomNumber2 + ".png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDice);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDice2);

if(randomDice>randomDice2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}
else if(randomDice<randomDice2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"
} else{
    document.querySelector("h1").innerHTML = "Its a draw!"
}

