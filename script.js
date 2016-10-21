var count=0;
var turn="simon";
var playerScore=0;
var playerSeq = [];
var compSeq = [];
var moves=[triggerRed,triggerGreen,triggerBlue,triggerYellow];
var randMove = Math.floor((Math.random() * 4) + 1);
var a = 0;
console.log(randMove);
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

function triggerBlue() {
  mouseDownB();
 // document.getElementById("blue").style.background = "blue";
 setTimeout(mouseUpB, 300);
 objBlue.play();
}
function triggerRed() {
  mouseDownR();
 // document.getElementById("blue").style.background = "blue";
 setTimeout(mouseUpR, 300);
 objRed.play();
}
function triggerGreen() {
  mouseDownG();
 // document.getElementById("blue").style.background = "blue";
 setTimeout(mouseUpG, 300);
 objGreen.play();
}
function triggerYellow() {
  mouseDownY();
 // document.getElementById("blue").style.background = "blue";
 setTimeout(mouseUpY, 300);
 objYellow.play();
}
function sequence() {
   var randMove = Math.floor((Math.random() * 4) +1) ;
  var x = randMove - 1;
  a = 0;
  console.log(moves[x]);
  compSeq.push(moves[x]);
  //setTimeout(moves[x], a += 500);
  console.log(compSeq);
  count ++;
 for(var i=0; i <= count; i++) {
   setTimeout(compSeq[i], a += 1000); 
   console.log("compSeq "+ compSeq[i]);
 }
 // a = a * 2;
  //setTimeout(triggerGreen, 1000);
  //setTimeout(triggerYellow, 1500);
  //setTimeout(triggerBlue, 2000);
  //var randMove = Math.floor((Math.random() * 4) +1) ;
  //count ++;
  //var x = randMove - 1;
  //console.log(a);
  //console.log(count);
  $("#display").html(count);
}
//$(document).ready(function() {
  //Set up sounds for each section
  var objBlue = document.createElement("audio");
  objBlue.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
  $(".playSoundBlue").click(function() {
    objBlue.play();
    playerSeq.push(moves[2]);
  });
  var objRed = document.createElement("audio");
  objRed.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
  $(".playSoundRed").click(function() {
    objRed.play();
    playerSeq.push(moves[0]);
  });
  var objGreen = document.createElement("audio");
  objGreen.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
  $(".playSoundGreen").click(function() {
    objGreen.play();
    playerSeq.push(moves[1]);
  });
  var objYellow = document.createElement("audio");
  objYellow.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
  $(".playSoundYellow").click(function() {
    objYellow.play();
    playerSeq.push(moves[3]);
    console.log("Player "+ playerSeq);
    console.log("Comp "+ compSeq)
  });
 
// });