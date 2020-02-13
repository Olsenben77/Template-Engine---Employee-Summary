"use strict";
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const { managerQuestions } = require("./prompts");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const writeFileAsync = promisify(writeFile);
async function managerInfo() {
  try {
    const answers = await inquirer.prompts(managerQuestions);

    if (answers.employee === "Intern" || answers.employee === "Engineer") {
      console.log("Let's assemble your team");
      employeePrompts();
      return;
    }
    if (answers.employee === "None") {
      console.log("Team is set");
      return;
    }
    const htmltext = html(prompts.answers);
    await writeFileAsync("main.html", htmltext, "utf8");
  } catch (error) {
    console.log(error);
  }
}
async function internInfo() {
  try {
    const internAnswers = await inquirer.prompts(internQuestions);

    if (internAnswers.school === school) {
      then(answers.employee);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
async function engineerInfo() {
  try {
    const engineerAnswers = await inquirer.prompts.engineerQuestions([]);

    if (engineerAnswers.name === github) {
      then(answers.choices);
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
async function createHTML() {
  try {
    if (answers === "None");
    open("./lib./Engineer", "./lib./Intern", "./lib./Manager");
  } catch (error) {
    console.log(error);
  }
}
function html({ name, id, email, school, officeNumber, github }) {
  return `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link
         href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
         rel="stylesheet"
       />
   
       <title>|| My Team ||</title>
       <style>
         .knockout {
           background: url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px;
           -webkit-text-fill-color: transparent;
           -webkit-background-clip: text;
           font-weight: bold;
           font-size: 75px;
           font-family: arial, helvetica;
           width: 600px;
           margin: 50px auto;
           margin-top: 25px;
           text-align: center;
           border-width: 10px;
           border-style: solid;
           border-color: black;
         }
   
         body {
           background: white;
         }
       </style>
     </head>
     <body>
       <div class="knockout">
         <a>This Is My Team</u></a>
       </div>
       
     </body>
   </html>`;
}
async function start() {
  await managerInfo();
  await internInfo();
  await engineerInfo();
  console.log("done");
}
createHTML();
start();
