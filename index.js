var lst = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var player1 = Math.floor(Math.random()*5);
var player2 = Math.floor(Math.random()*5);
document.querySelector("img.img1").setAttribute("src", lst[player1]) ;
document.querySelector("img.img2").setAttribute("src",lst[player2]);
if (player1 > player2){
    document.querySelector("h1").textContent="Player 1 is the winner!";
}
else if(player2 > player1){
    document.querySelector("h1").textContent="Player 2 is the winner!";
}
else{
    document.querySelector("h1").textContent="It's a tie, try again!";
}