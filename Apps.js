"use strict";
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const prompts = require("./prompts");
// async function managerInfo() {
//   try {
//     const managerPrompts = await inquirer.prompt([

const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./employee");
async function start() {
  await managerInfo();
  console.log("done");
}
if (managerPrompts.Confirm === true) {
  console.log("Let's assemble your team");
  employeePrompts();
  return;
}
if (managerPrompts.Confirm === false) {
  console.log("Team is set");
  return;
}
// } catch (error) {
//   console.log(error);
// }
start();
// (async () => {
//   const response = await {managerPrompts(managerQuestions);
