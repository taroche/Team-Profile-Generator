const inquirer = require("inquirer");
const fs = require('fs');


const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your full name",
            name: 'fullName',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is your employee ID",
            name: 'employeeID',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is your email address",
            name: 'email',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is office number",
            name: 'officeNum',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'list',
            message: "Choose the position of your team",
            choices: ['Engineer', 'Intern', 'Done'],
            name: 'license'
        }
    ])
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer full name",
            name: 'fullName',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is the engineer employee ID",
            name: 'employeeID',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is the engineer email address",
            name: 'email',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: "What is the engineer Github name",
            name: 'github',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid GitHub username is required.");
                }
                return true;
            }
        }
    ])
};