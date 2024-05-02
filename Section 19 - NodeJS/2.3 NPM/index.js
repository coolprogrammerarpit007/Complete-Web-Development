`use strict`;

// const generaatName = require("sillyname");
import generaatName from "sillyname"; // ES VERSION TO USE MODULES.
const sillyname = generaatName();

// console.log(`Your name is: ${sillyname}`);
import { randomSuperhero } from "superheroes";
const hero = randomSuperhero();

console.log(`I am ${hero}`);
