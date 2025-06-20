const fs = require("fs");
let urlsstr = fs.readFileSync("problem-urls.txt").toString();
let urls = urlsstr.split("\n").map((line) => line.trim());
module.exports = urls;
