`use strict`;

// Selecting the elements.
const title = document.querySelector("h1");
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// event when the page loads.

// rollDice function is called when dice rolls.

const rollDice = () => {
  // rolling a random dice
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  img1.src = `./images/dice${dice1}.png`;
  img2.src = `./images/dice${dice2}.png`;

  if (dice1 > dice2) {
    title.textContent = `🚩 Player 1 wins!`;
  } else if (dice1 < dice2) {
    title.textContent = `🚩 Player 2 wins!`;
  } else {
    title.textContent = "Match Drawn!";
  }
};

// Event happens, when the page is loaded to the window.
window.addEventListener("load", rollDice);
