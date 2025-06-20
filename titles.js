const fs = require("fs");
let titlesstr = fs.readFileSync("problem-titles.txt").toString();
let titles = titlesstr.split("\n").map((line) => line.trim());
module.exports = titles;
