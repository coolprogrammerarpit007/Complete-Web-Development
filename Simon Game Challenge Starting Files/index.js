`use strict`;
// state vaariables
let level = 0;
let isStarted = false;
let randomChosenColor;
let randomNumber;
// *************************
const sounds = ["blue.mp3", "green.mp3", "red.mp3", "yellow.mp3"];
const userClickedPattern = [];
const gamePattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  $("h1").text(`Level ${level}`);
  level++;
  randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  flashButton();
  animatePress(randomChosenColor);
};

// flash out selected button
const flashButton = function () {
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};

// play an sound on random selected button

const playSound = function () {
  let sound = new Audio(`./sounds/${sounds[randomNumber]}`);
  sound.play();
};

// User Interaction

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (!isStarted) {
      randomNumber = nextSequence();
      isStarted = true;
      playSound();
    }
  }
});

// user playSound

const userSound = (name) => {
  let sound = new Audio(`./sounds/${name}.mp3`);
  sound.play();
};

// Adding Animations

const animatePress = (currentColor) => {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 100);
};

// Trigger a action when any button is clicked

$(".btn").click(function (e) {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  userSound(userChosenColor);
  console.log(userClickedPattern);
  animatePress(userChosenColor);
});
