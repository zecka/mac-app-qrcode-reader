const fs = require("fs");
const writer = () => {
  console.log("run writer");
  fs.appendFile("myteststorage.txt", "Hellos World!", function(err) {
    if (err) return console.log(err);
    console.log("Hello World > helloworld.txt");
  });
};

module.exports = writer;
