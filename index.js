const { fstat } = require('node:fs')

const inquirer = require('inquirer')

    inquirer
        .prompt([ 
            {
                type:'input',
                name:'username',
                message:"what is your username?"
            },

            {
                type:'input',
                name:'',
                message:"?"
              }, 
              {
                type:'confirm',
                name:'recommend',
                message:"Do you recommend the bootcamp ?"
              },
              {
                type:'checkbox',
                name:'food',
                message:'which food do you like?',
                choices:['cheese','pizza','falafel','meet']
              }
        ])
  

    

/* .then (answers => {
    
    console.log(answers)

    const{username, age, recommend,food} = answers

    const data= `Hi my name is ${username}. I am ${age}year old. I like ${food}}`

    fs.writeFile('test.test', data ,err => console.log ('File saved'))

  }) */


