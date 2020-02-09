`use strict`;

const inquirer = require("inquirer");
async function managerInfo() {
  try {
    const managerPrompts = await inquirer.prompt([
      {
        type: "input",
        message: "Enter your name:",
        name: "name"
      },
      {
        type: "input",
        message: "Enter your email:",
        name: "email"
      },
      {
        type: "number",
        message: "Enter your ID number:",
        name: "ID"
      },
      {
        type: "number",
        message: "Enter your Office Number:",
        name: "Office Number"
      },
      {
        type: "confirm",
        message: "Would you like to add a new member?",
        name: "Confirm"
      }
    ]);
    if (managerPrompts.Confirm === true) {
      console.log("Let's assemble your team");
      employeePrompts();
      return;
    }
    if (managerPrompts.Confirm === false) {
      console.log("Team is set");
      return;
    }
  } catch (error) {
    console.log(error);
  }
}
// type: "input",
// message: "Who would you like to add?",
// choices: ["Intern", "Engineer"],
// name: "Choices"
async function start() {
  await managerInfo();
  console.log("done");
}
start();
