"use strict";

// module.exports =

// Returns 'Employee
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./employee");
// const { writeFile } = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");
// const { promisify } = require("util");
// const puppeteer = require("puppeteer");
// const path = require("path");
// const open = require("open");

// const writeFileAsync = promisify(writeFile);
// async function userInfo() {
//   try {
//     const answers = await inquirer.prompt([
//       {
//         type: "input",
//         message: "Enter your email address:",
//         name: "email"
//       },
//       {
//         type: "list",
//         message: "What is your favorite color?",
//         choices: ["Red", "Green", "Blue"],
//         name: "colors"
//       }
//     ]);
//     console.log(answers);
//     const response = await axios.get(
//   `//api.github.com/users/${answers.username}`
// );
//     const htmltext = html(response.data, answers.colors);
//     await writeFileAsync("index.html", htmltext, "utf8");
//     await printPDF();
//     open("./resume.pdf");
//     const responseStars = await axios.get(
//       `https://api.github.com/users/${user.starred}`
//     );
//     console.log(responseStars);
//     const starredtext = html(response.data, user.starred);
//     await writeFileAsync("index.html", starredtext, "utf8");
//     await printPDF();
//     open("./resume.pdf");
//   } catch (error) {
//     console.log(error);
//   }
// }

