//for 1st dice

var randomnumber1 = Math.floor(Math.random() * 6) + 1;

var randomsource1 = "images/"+"dice"+randomnumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src", randomsource1);

//for 2nd dice

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

var randomsource2 = "images/"+"dice"+randomnumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomsource2);

//final result

if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "player 1 wins!!";
}
else if (randomnumber1 < randomnumber2) {
  document.querySelector("h1").innerHTML = "player 2 wins!!";
}
else{
  document.querySelector("h1").innerHTML = "it's a draw.";
}
