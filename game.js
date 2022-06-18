
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started =false;
var level=0;
$(document).keypress(function(){
  if(started==false)
  {nextSequence();
  $("#level-title").text("Level "+level)
}
else
nextSequence();
  started=true;

});

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
  if(gamePattern.length === userClickedPattern.length){
    setTimeout(function(){
      nextSequence();
    },1000);
  }
}
else{
  playSound("wrong");
  $("body").addClass("game-over");
  $("#level-title").text("Game over ,Press any key to Restart");
  setTimeout(function(){
    $("body").removeClass("game-over"),200
  });
  startOver();
}
}
function nextSequence() {
  userClickedPattern=[];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  level++;
  $("#level-title").text("Level "+level)
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  animatePress(name);
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed")
   setTimeout(()=>{$("#"+currentColour).removeClass("pressed")},100);
 }
 function startOver(){
   level=0;
   gamePattern=[];
   started=false;
 }
