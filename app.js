var express = require("express");
var app = express();

const fs = require('fs');

fs.readFile('url.json', (err, data) => {
    if (err) throw err;
    let url = JSON.parse(data);
    console.log(url.names[2]);
});

let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('./.serverless/student-3.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

app.get("/url", (req, res, next) => {
  res.json(url);
 });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});