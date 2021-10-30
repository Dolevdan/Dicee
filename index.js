var x = 6;
var started = false;
var countP1 = 0;
var countP2 = 0;


function createRand() // NOTE: between 1 to X
{
var num = Math.floor(Math.random()*x)+1;
var randomDiceNumber= "images/dice"+num+".png";
return randomDiceNumber;
}

    // fetch if button was clicked

document.getElementById("Role").onclick= function(){
  let randomSource1 =createRand(x);
  let randomSource2 =createRand(x);
  setNewImage(0,randomSource1);
  setNewImage(1,randomSource2);
  roundCheck(randomSource1,randomSource2);
}

document.getElementById("Finish").onclick= function(){
  started = false;
  checkWinner();
  setTimeout(function () {
    startOver();
  }, 2000);

}



function roundCheck(randomSource1,randomSource2){
  if (randomSource1 > randomSource2)
    countP1+=1;
  else if (randomSource1 < randomSource2)
    countP2+=1;
}

function startOver(){
  document.querySelector("h1").innerHTML = "First Player:"+countP1+", Second Player:"+countP2;
  setTimeout(function () {
    document.querySelector("h1").innerHTML = "Role The Dice";
  }, 1500);
  countP1 = 0;
  countP2 = 0;
  started =  false;
}



function setNewImage(num, randomSource)
{
//setting the dice into the image tag
  var image = document.querySelectorAll("img")[num];
  image.setAttribute("src",randomSource);
}


function checkWinner(){
  //check's who is the winner

  if (countP1 > countP2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 👏";
  }

  else if (countP1 < countP2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 👏";
  }

  else {
    document.querySelector("h1").innerHTML = "Its A Draw!";
  }

}
