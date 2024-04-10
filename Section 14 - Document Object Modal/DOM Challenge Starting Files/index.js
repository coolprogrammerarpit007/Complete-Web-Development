"use strict";

const list = document.querySelector("ul");
list.lastElementChild.style.color = "red";
list.lastElementChild.innerHTML = "Arpit Mishra";

list.querySelector(".list a").style.color = "red";
list.querySelector(".list a").style.textDecoration = "none";

const button = document.querySelector("button");
button.style.backgroundColor = "yellow";
button.style.border = "none";
button.style.padding = "10px";
button.style.borderRadius = "2px";
button.style.color = "green";

const addHuge = function () {
  document.querySelector("h1").classList.toggle("huge");
};

button.addEventListener("click", addHuge);
