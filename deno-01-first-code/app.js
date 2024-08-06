const fs = require("fs");
const fsp = require("fs").promises;

const text = "This is a test - and it should be stored in a file!";

fs.writeFile("node-message.txt", text, (err) => {
  if (err) {
    console.log(err);
  }
});

fsp
  .writeFile("node-message-2.txt", text)
  .then(() => {
    console.log("File written successfully");
  })
  .catch((err) => {
    console.log(err);
  });
