

const inquirer = require('inquirer')

const fs = require('fs')

console.log('inquirer')


//name, location, hobby, food, linkedin URL, and GithubURL.

    inquirer
        .prompt([ 
            {
                type:'input',
                name:'name',
                message:"what is your name?"
            },

            {
                type:'input',
                name:'location',
                message:"Where are you located?"
              }, 
              {
                type:'input',
                name:'hobby',
                message:"What is your favrite hobby?"
              },
              {
              type:'input',
              name:'food',
              message:"What is your facrite food?"
              },
              {
                type:'input',
                name:'linkedin',
                message:'what is the url to your linkedin profile?'               
              },
              {
                type:'input',
                name:'Github',
                message:'what is the url to your Github?',
               
              }
        ])
  
        
        .then (answers => {


          let {name,location, hobby, food, linkedin,GithubURL} = answers
          let html= `
          
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <title>Document</title>
          </head>

          <body>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Hi! My name is ${answers.name}</h1>
              <p class="lead">I am from ${answers.location}.</p>
              <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>

              <ul class="list-group">
                <li class="list-group-item">My GitHub username is ${answers.hobby}</li>
                <li class="list-group-item">My GitHub username is ${answers.food}</li>
                <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
                <li class="list-group-item">LinkedIn: ${answers.GitHub}</li>                
              </ul>
            </div>
          </div>
          </body>
          </html>`

          console.log(html)

          fs.writeFile('index.html', html, function(err){

            if(err) throw err
            console.log('file saved')
          })
        })


        


          /*console.log(html){
            fs.writeFile("newFile.html",html,function(err){
              if(err) throw err
              console.log('file saved')
            }
          
          
          
             .then((answers) => {
              const htmlPageContent = generateHTML(answers);
          
              fs.writeFile('index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
              );
            });
           */

    


