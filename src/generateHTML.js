const fs = require('fs');

 function generateHTML() {
  var content = fs.readFileSync('data.txt', 'utf8');
  
//  fs.readFile('data.txt', 'utf8', function(err, data){
//    console.log(data);
//     content = data;
//     console.log(content);
//   });

    var formatHTML = (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="jumbotron">
            <h1>
                Team Profile
            </h1>
        </header>
        <div class="container">
            <div class="row">
           ${content}
                
            </div>
    
        </div>
    </body>
    </html>`);
    
    fs.writeFile('index.html', formatHTML, (err) =>
    err ? console.log(err) : console.log('Team Profile generator successfully!'));

}



module.exports = { generateHTML };