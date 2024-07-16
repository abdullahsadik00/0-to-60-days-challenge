const fs = require("fs");

fs.readFile("./3-file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// This loop is synchronous, it will block the execution of the code until it is done.
for (let i = 0; i < 10000000000; i++) {}
console.log("loop ended!");
