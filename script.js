var randomNumber1 = prompt("Enter a number between 1 and 6");
if (randomNumber1 > 6 || randomNumber1 < 1) {
    alert("May be you enter a wrong number.\nRefresh the page to play again.");
} else {
    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
}

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
//console.log(randomNumber2);
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "You Win";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Computer Wins";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "Draw";
} else {
    alert("May be you enter wrong input.\nRefresh the page to play again.");
}