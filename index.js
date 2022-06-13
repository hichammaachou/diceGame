var randomNum1= Math.floor(Math.random()*6)+1;
var randomNum2= Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src", "dice"+randomNum1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "dice"+randomNum2+".png");
if (randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML ="Draw!";
}else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 won!";
}else{
    document.querySelector("h1").innerHTML="Player 1 won!";
}