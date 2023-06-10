var randomNumber1 = Math.floor(Math.random()*6)+1;
var diceno = "dice "+randomNumber1+".png";
var imagedice = diceno;
var image1 =document.querySelectorAll("img")[0];
image1.setAttribute("src",imagedice);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var diceno2 = "dice "+randomNumber2+".png";
var imagedice2 = diceno2;
var image2 =document.querySelectorAll("img")[1];
image2.setAttribute("src",imagedice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Its a DRAW!!!!";
}
document.getElementById("h1").addEventListener("click",innerHTML);
