`use strict`;

// seleting the buttons

const buttons = document.querySelectorAll(".drum");

// state variables

// storing audio into array

const sounds = [
  "./sounds/crash.mp3",
  "./sounds/kick-bass.mp3",
  "./sounds/snare.mp3",
  "./sounds/tom-1.mp3",
  "./sounds/tom-2.mp3",
  "./sounds/tom-3.mp3",
  "./sounds/tom-4.mp3",
];
// function which called when button got clicked.

// Adding event listerer to the button to play sound.

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // change the color when clicked
    this.style.color = `white`;
    // creating an audio object.
    const audio = new Audio(sounds[i]);

    // playing the sound.
    audio.play();
  });
}

// Adding event listener for keyboard events to the drum kit.

// function to play sound when key is pressed

const playSound = function (keyboardBtn) {
  switch (keyboardBtn) {
    case "w":
      let tom1 = new Audio("./sounds/crash.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/kick-bass.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/snare.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-1.mp3");
      tom4.play();
      break;
    case "j":
      let tom5 = new Audio("./sounds/tom-2.mp3");
      tom5.play();
      break;
    case "k":
      let tom6 = new Audio("./sounds/tom-3.mp3");
      tom6.play();
      break;
    case "l":
      let tom7 = new Audio("./sounds/tom-4.mp3");
      tom7.play();
      break;
  }
};

document.addEventListener("keydown", function (e) {
  let keyboardBtn = e.key;
  playSound(keyboardBtn);
  buttonAnimation(keyboardBtn);
});

// Adding Animation to the website

const buttonAnimation = function (key) {
  let activeBtn = document.querySelector(`.${key}`);
  activeBtn.classList.add("pressed");

  setTimeout(() => {
    activeBtn.classList.remove("pressed");
  }, 100);
};
