//package for file 
const fs = require('fs');

//function that creates the html page, with the data entered by user
function generateHTML() {

    var content = fs.readFileSync('./src/data.txt', 'utf8');

    var formatHTML = (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./dist/style.css">
    </head>
    <body>
        <header class="title">
            <h1>
                Team Profile
            </h1>
        </header>
        <div class="container">
           
           ${content}
         
        </div>
    </body>
    </html>`);

    fs.writeFile('index.html', formatHTML, (err) =>
        err ? console.log(err) : console.log('Team Profile generator successfully!'));

};


module.exports = { generateHTML };