`use strict`;

const Employee = require(`./Employee`);

//Homework ReadMe does not say we need officeNumber for manager//
class Manager extends Employee {
  constructor(officeNumber) {
    this.officeNumber = officeNumber;
  }

  getofficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
