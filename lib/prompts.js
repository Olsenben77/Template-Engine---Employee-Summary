`use strict`;

const managerQuestions = [
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
    type: "input",
    message: "Who else would you like add to your team?",
    choices: ["Intern", "Engineer", "None"],
    name: "Employee"
  }
];
managerQuestions();

const internQuestions = [
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
    type: "input",
    message: "Where did you graduate from college?",
    name: "school"
  }
];
internQuestions();
const engineerQuestions = [
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
    type: "input",
    message: "what is your GitHub username?",
    name: "GitHub"
  }
];
engineerQuestions();

module.exports = {
  managerQuestions,
  internQuestions,
  engineerQuestions
};
