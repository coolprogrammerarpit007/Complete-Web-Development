`use strict`;

// Array to store sounds
const sound = ["blue.mp3", "green.mp3", "red.mp3", "yellow.mp3"];

// Array to store color sequence
const buttonColors = ["red", "blue", "green", "yellow"];

// Array to store game pattern generated randomlly
let gamePattern = [];

// Array to store user clicked patterns
let userClickedPattern = [];

// State Variables
let hasGameStarted = false;
let gameLevel = 0;

// *****************************
// *****************************
// function to generate a random sequence

const nextSequence = function () {
  // reset userClickedPattern
  userClickedPattern = [];
  console.log("Next Sequence --");
  console.log(userClickedPattern);
  // Generate a random Number b/w 0 and 3

  const randomNumber = Math.floor(Math.random() * 4);
  // generate random color
  const randomChosenColor = buttonColors[randomNumber];
  // storing random color to game patter

  gamePattern.push(randomChosenColor);
  console.log(gamePattern);

  // Calling function to flashColor
  flashColor(randomChosenColor);

  // Calling Animate Press
  animatePress(randomChosenColor);

  // calling playSound function
  playSound(sound[randomNumber]);

  // Update the title
  $("h1").text(`Level ${gameLevel}`);

  // Increse the level
  gameLevel++;
};

// Automating Play

$(document).keydown(function (e) {
  if (!hasGameStarted) {
    // Update state variable to not started to started.
    hasGameStarted = true;
    gameLevel = 0;
    $("h1").text(`Level ${gameLevel}`);

    // Everytime "KEY" pressed a new pattern will be generated.
    nextSequence();
  }
});

// restart the game
function restartGame() {
  // resetting value
  level = 0;
  gamePattern = [];
  hasGameStarted = false;
  $("h1").text("Press A Key to Start");
}

// function to flash Color

function flashColor(colorId) {
  $(`#${colorId}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

// function to playSound
function playSound(audio) {
  const beat = new Audio(`./sounds/${audio}`);
  beat.play();
}

// function to animate Color
function animatePress(currentColor) {
  // Add press class to button
  $(`#${currentColor}`).addClass("pressed");

  //  remove press class after 100s
  setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, "100");
}

// Check Answer

function checkAnswer(currentLevel) {
  // check if both user and computer selected same answer
  console.log("current Level", currentLevel);
  let userSelected = userClickedPattern[currentLevel];
  let computerSelected = gamePattern[currentLevel];
  console.log(userClickedPattern);
  console.log(gamePattern);
  console.log("user selected color", userSelected);
  console.log("computer selected", computerSelected);

  // // Check if most recent user answer is same as game pattern
  if (userSelected === computerSelected) {
    console.log("Sucess");
    //   // If the user got the most recent answer right in step 3, then check that they have finished their sequence
    if (userClickedPattern.length === gamePattern.length) {
      //     // Call nextSequence() after a 1000 millisecond delay.
      setTimeout(() => {
        nextSequence();
      }, "1000");
    }
  } else {
    // if wrong answer play this audio
    console.log("wrong");
    const lose = new Audio(`./sounds/wrong.mp3`);
    lose.play();

    // add this class
    $("body").addClass("game-over");

    // remove class after 200ms

    setTimeout(() => {
      $("body").removeClass("game-over");
    }, "200");

    // restart game
    restartGame();
  }
}

// When user click button

$(".btn").click(function (e) {
  // storing user chosen color
  const userChosenColor = this.id;
  console.log(userChosenColor, "user chosen color");
  // storing color pattern
  userClickedPattern.push(userChosenColor);
  console.log("userchosenpattern", userClickedPattern);

  // flash color when user click button
  flashColor(userChosenColor);

  // Making Sound when user click Sound
  playSound(`${userChosenColor}.mp3`);

  // Adding press class to button
  animatePress(userChosenColor);

  // call checkAnswer with userChosenAnswer
  checkAnswer(userClickedPattern.length - 1);
});
