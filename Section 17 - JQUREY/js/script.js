`use strict`;

// function to check whether jquery is loaded up or not.

// this trick avoids error if your jquery cdn is in head
// $(document).ready(() => {
//   $("h1").css("color", "red");
// });

// To avoid all this jquery cd must be incorporated after the end of body tag.

// $("h1").css("color", "green");

// Selecting elements using Jqury

// $("button").css("background-color", "blue");

// Manipulating style using jqurey

// this will print the size of h1 element.
// console.log($("h1").css("font-size"));

// Now main thing is to sepreate our concerns like styling to css

// Adding class to element using JQUERY
// $("h1").addClass("bg-title");
// Adding Multiple class
$("h1").addClass("bg-title m-50");

// checking if element has class or not

// console.log($("h1").hasClass("bg-title"));

// Manipulating Text using JQUERY

// Method 1:-

// $("h1").text("Namaste World!");
// // Method 2:-
// $("button").html("<em>Refresh ME</em>");

// Manipulating Attributes using JQUERY

// getting the attr of element using jquery

// console.log($("img").attr("src"));

// setting attribute

// $("a").attr("href", "https://www.youtube.com/watch?v=6SJQ5eOChrA");

// setting event listener using Jquery

// $("h1").click(() => {
//   $("h1").css("color", "purple");
// });

// $("button").click(() => {
//   $("h1").css("color", "purple");
// });

// Adding the keyboard event

// $(document).keydown((e) => {
//   console.log(e.key);
// });

// $(document).keydown((e) => {
//   $("h1").text(e.key);
// });

// Another method to add event listenr is

// $("h1").on("mouseover", (e) => {
//   $("h1").text("Namastey World!");
// });
// $("h1").on("mouseleave", (e) => {
//   $("h1").text("Hello World!");
// });

// Adding and removing elements with JQUERY

// before,after,prepend,append

// $("h1").before("<button>Alert</button>");
// $("h1").after("<button>Alert</button>");
// $("h1").prepend("<button>Alert</button>");
// $("h1").append("<button>Alert</button>");

// To remove elements
// $("button").remove();

// Adding Animation with Jquery

// $("button").on("click", (e) => {
//   $("h1").fadeOut();
// });
// $("button").on("click", (e) => {
//   // $("h1").fadeToggle();
//   // defining custom css
//   $("h1").animate({ opacity: 0.5 });
// });

// Always note css value should be number on custom animation

// chaining methods
$("button").on("click", (e) => {
  //
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});
