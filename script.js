//Set up color changes for each section when clicked
function mouseDownB() {
  document.getElementById("blue").style.background = "blue";
}

function mouseUpB() {
  document.getElementById("blue").style.background = "#094A8F";
}

function mouseDownR() {
  document.getElementById("red").style.background = "red";
}

function mouseUpR() {
  document.getElementById("red").style.background = "#9F0F17";
}

function mouseDownG() {
  document.getElementById("green").style.background = "#00A74A";
}

function mouseUpG() {
  document.getElementById("green").style.background = "green";
}

function mouseDownY() {
  document.getElementById("yellow").style.background = "yellow";
}

function mouseUpY() {
  document.getElementById("yellow").style.background = "#CCA707";
}

$(document).ready(function() {
  //Set up sounds for each section
  var objBlue = document.createElement("audio");
  objBlue.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
  $(".playSoundBlue").click(function() {
    objBlue.play();
  });
  var objRed = document.createElement("audio");
  objRed.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
  $(".playSoundRed").click(function() {
    objRed.play();
  });
  var objGreen = document.createElement("audio");
  objGreen.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
  $(".playSoundGreen").click(function() {
    objGreen.play();
  });
  var objYellow = document.createElement("audio");
  objYellow.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
  $(".playSoundYellow").click(function() {
    objYellow.play();
  });

});