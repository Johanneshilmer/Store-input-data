//const {readFileSync, writeFileSync} = require("fs");
const fs = require("fs");

const textFile = fs.readFileSync("./info.txt", "utf8")

console.log(textFile);