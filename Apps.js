"use strict";
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const prompts = require("./prompts");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./employee");

const writeFileAsync = promisify(writeFile);
async function managerInfo() {
  //   try {

  //using try functions are giving error messages
  const answers = await inquirer.prompts.managerQuestions([]);
}

if ((managerQuestions.choices === Intern, Engineer)) {
  console.log("Let's assemble your team");
  employeePrompts();
  return;
}
if (managerQuestions.choices === none) {
  console.log("Team is set");
  return;
}
const htmltext = html(prompts.answers);
await writeFileAsync("main.html", htmltext, "utf8");
// } catch (error) {
//   console.log(error);
// }
async function internInfo() {
  const answers = await inquirer.prompts.internQuestions([]);
}
if (internQuestions.name === school) {
  then(managerQuestions.choices);
  return;
}
async function engineerInfo() {
  const answers = await inquirer.prompts.engineerQuestions([]);
}
if (engineerQuestions.name === github) {
  then(managerQuestions.choices);
  return;
}
async function createHTML() {
  if (managerQuestions === none);
  open("./engineer", "./intern", "./manager");
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
