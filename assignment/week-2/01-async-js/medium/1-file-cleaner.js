const fs = require("fs");
fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    if (err.code === "ENOENT") {
      console.error(`Error: File "${filename}" not found.`);
    } else {
      console.error(`Error reading file: ${err.message}`);
    }
    return;
  }
  let cleanedContent = data.replace(/\s+/g, " ").trim();
  fs.writeFile(filename, cleanedContent, (err) => {
    if (err) {
      console.error(`Error writing file: ${err.message}`);
    } else {
      console.log(`File "${filename}" has been cleaned successfully.`);
    }
  });
});
