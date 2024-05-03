/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
`use strict`;

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Enter your URL?",
      type: "input",
    },
  ])
  .then((answer) => {
    const url = answer.URL;
    const qr_png = qr.image(url, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((err) => {
    if (err.isTtyError) {
      console.log(`couldn't be rendered!`);
    } else {
      console.log(`something else went wrong!`);
    }
  });

// qr_png.pipe(...): This part suggests that qr_png is an object that represents a stream of data. In Node.js, streams are objects that allow you to read from or write to a source sequentially. Here, it seems qr_png is a readable stream.
// fs.createWriteStream("qr_code.png"): This is a function call from the Node.js built-in fs (File System) module. It creates a writable stream to a file named "qr_code.png". The file will be created if it doesn't exist, or truncated if it does.
// So, when you combine these two parts, qr_png.pipe(fs.createWriteStream("qr_code.png")), you're piping the data from the qr_png readable stream into the writable stream created by fs.createWriteStream(). Essentially, this line of code is taking the data from the qr_png stream
