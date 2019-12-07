var express = require("express");
var app = express();

const fs = require('fs');

fs.readFile('url.json', (err, data) => {
    if (err) throw err;
    let url = JSON.parse(data);
    console.log(url);
});

console.log('This is after the read call');

app.get("/url", (req, res, next) => {
  res.json(url);
 });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});