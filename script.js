var strict = "off";
var state = "off";
var count = 0;
var turn = "none";
var playerScore = 0;
var playerSeq = [];
var compSeq = [];
var comArr = [];
var moves = [triggerRed, triggerGreen, triggerBlue, triggerYellow];
var colors = [0, 1, 2, 3];
var test = 0;
var winCount = 0;
//var colors = [red1, green2, blue3, yellow4];
var randMove = Math.floor((Math.random() * 4) + 1);
var a = 0;
console.log(randMove);
//Set up color changes for each section when clicked
function mouseDownB() {
  if(state == "started"){
  document.getElementById("blue").style.background = "blue";
    objBlue.play();
  playerSeq.push(colors[2]);
  test++;
  gameTest();
  console.log("Player " + playerSeq);
  console.log("Comp " + comArr);
  }
}

function mouseUpB() {
  document.getElementById("blue").style.background = "#094A8F";
}

function mouseDownR() {
  if(state == "started"){
  document.getElementById("red").style.background = "red";
 //  objRed.play();
 // playerSeq.push(colors[0]);
 // test++;
 // gameTest();
 // console.log("Player " + playerSeq);
//  console.log("Comp " + comArr);
  }
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
  setTimeout(mouseUpB, 300);
  objBlue.play();
}

function triggerRed() {
  mouseDownR();
  setTimeout(mouseUpR, 300);
  objRed.play();
}

function triggerGreen() {
  mouseDownG();
  setTimeout(mouseUpG, 300);
  objGreen.play();
}

function triggerYellow() {
  mouseDownY();
  setTimeout(mouseUpY, 300);
  objYellow.play();
}
function pressStart(){
  if(state == "on"){
  $("#start1").css("border", "3px solid");
    state = "started";
  }
}
function unPressStart(){
  $("#start1").css("border", "5px solid");
}
function pressStrict(){
  if(state == "on"){
  $("#strict").css("border", "3px solid");
    if(strict == "off"){
    $("#light").css("background", "red");
      strict = "on";
    }else{
      $("#light").css("background", "black");
      strict = "off";
    }
  }
}
function unPressStrict(){
  $("#strict").css("border", "5px solid");
}
function start() {
  if(state == "started"){ 
  init();  
    state = "started";
 setTimeout(sequence, 200); 
  }
}
function init(){
  $("#win").html("Simon<sup>&reg</sup>");
  $("#display").html("--");
  winCount = 0;
   count = 0;
 turn = "simon";
 playerScore = 0;
 playerSeq = [];
 compSeq = [];
 comArr = [];
  state = "on";
}
function onOffSwitch(){
  if(state == "off"){
    $("#togSw").css("left", "50%");
    $("#display").html("--");
    init();
    state = "on";
  }else{
    $("#togSw").css("left", "0%");
    init();
    state = "off";
    $("#display").html("");
  }
}
function sequence() {
  if(turn == "simon") {
  var randMove = Math.floor((Math.random() * 4) + 1);
  var x = randMove - 1;
  a = 0;
  console.log(moves[x]);
  compSeq.push(moves[x]);
  comArr.push(colors[x]);

  count++;
  for (var i = 0; i <= count; i++) {
    setTimeout(compSeq[i], a += 1000);
  }
  console.log("compSeq " + compSeq[i]);
  $("#display").html(count);
  playerSeq = [];
  test = [];
  turn = "player";
}
}
function rePlayMoves() {
  a = 0;
  $("#display").html(count);
  for (var i = 0; i <= count; i++) {
    setTimeout(compSeq[i], a += 1000);
    turn = "player";
    playerSeq = [];

  }

}

function gameTest() {
  if(turn = "player") {
  for (j = 0; j <= playerSeq.length - 1; j++) {
    if (comArr[j] != playerSeq[j]) {
      $("#display").html("!!!");
      console.log("Error");
      turn = "simonReplay";
      setTimeout(rePlayMoves, 800);
    } else if (playerSeq.length == comArr.length) {
      console.log("Ok!");
      winCount++;
      turn = "simon";
      if(count > 3){
        winner();
      }
      setTimeout(sequence, 500);
    }
  }
  }
}
function winner() {
  turn = "end";
  compSeq = [];
  $("#win").html("Winner");
 // $("#display").html("Win");
  setTimeout(init, 3000);
}
//Set up sounds for each section

var objBlue = document.createElement("audio");
objBlue.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
//$(".playSoundBlue").click(function() {
 // objBlue.play();
 // playerSeq.push(colors[2]);
 // test++;
 // gameTest();
  //console.log("Player " + playerSeq);
  //console.log("Comp " + comArr);
//});

var objRed = document.createElement("audio");
objRed.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
//$(".playSoundRed").click(function() {
//   objRed.play();
 // playerSeq.push(colors[0]);
 // test++;
 // gameTest();
 // console.log("Player " + playerSeq);
 // console.log("Comp " + comArr);
 
//});
var objGreen = document.createElement("audio");
objGreen.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
$(".playSoundGreen").click(function() {
  objGreen.play();
  playerSeq.push(colors[1]);
  test++;
  gameTest();
  console.log("Player " + playerSeq);
  console.log("Comp " + comArr);
});
var objYellow = document.createElement("audio");
objYellow.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
$(".playSoundYellow").click(function() {
  objYellow.play();
  playerSeq.push(colors[3]);
  test++;
  gameTest();
  console.log("Player " + playerSeq);
  console.log("Comp " + comArr);
});

// });