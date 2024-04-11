`use strict`;

// seleting the buttons

const buttons = document.querySelectorAll(".drum");

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

// ************************\

// calculator challenge

// const add = function (num1, num2) {
//   return num1 + num2;
// };
// const sub = function (num1, num2) {
//   return num1 - num2;
// };
// const mul = function (num1, num2) {
//   return num1 * num2;
// };
// const divide = function (num1, num2) {
//   return num1 / num2;
// };

// const calculate = function (num1, num2, op) {
//   return op(num1, num2);
// };

// console.log(calculate(15, 15, divide));
