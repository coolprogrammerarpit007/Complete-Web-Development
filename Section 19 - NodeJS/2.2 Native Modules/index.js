`use strict`;
const { error } = require("console");
const file = require(`fs`);

// write a file
// file.writeFile(
//   `user.txt`,
//   `Hello, I am Arpit, and I am learning backend development`,
//   (err) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log(`File has been saved!`);
//     }
//   }
// );

// reading a file
file.readFile(`./message.txt`, `utf-8`, (data, err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// writing file
file.writeFile(
  `./message.txt`,
  `Hi, I am arpit and I am learning backend from DR. Angela!`,
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log(`File Saved!`);
    }
  }
);
