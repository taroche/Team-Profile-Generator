const inquirer = require("inquirer");
const fs = require('fs');
const manager = require('./html-templates/manager');
const engineer = require('./html-templates/engineer');
const intern = require('./html-templates/intern');
const body = require('./html-templates/body');
let choiceArr = ['Manager', 'Engineer', 'Intern']
import { Manager, Engineer, Intern } from './classes.js';
let hasManager = false;
const managerArr = []
const engineerArr = []
const internArr = []


const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is your full name",
            name: 'fullName',
        },
        {
            type: 'input',
            message: "What is your employee ID",
            name: 'employeeID',
        },
        {
            type: 'input',
            message: "What is your email address",
            name: 'email',
        },
        {
            type: 'list',
            message: "What is your role",
            choices: choiceArr,
            name: 'role',
        },
    ]).then(initialResponse => {
        if (initialResponse.role === "Manager") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is your office number",
                    name: 'officeNum',
                }
            ]).then(managerRes => {
                hasManager = 'true'
                choiceArr = ['Engineer', 'Intern']
                const newManager = new Manager(initialResponse.name, initialResponse.employeeID, initialResponse.email, initialResponse.role, managerRes.officeNum)
                managerArr.push(newManager)
                addOtherEmplyee()
            })
        }
        else if (initialResponse.role === "Engineer") {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is their Github account",
                    name: 'gitAccount',
                }
            ]).then(enginerrRes => {
                const newEngineer = new Engineer(initialResponse.name, initialResponse.employeeID, initialResponse.email, initialResponse.role, enginerrRes.gitAccount)
                engineerArr.push(newEngineer)
                addOtherEmplyee()
            })
        }
        else {
            inquirer.prompt([
                {
                    type: 'input',
                    message: "What is school do they go to",
                    name: 'school',
                }
            ]).then(internRes => {
                const newIntern = new Intern(initialResponse.name, initialResponse.employeeID, initialResponse.email, initialResponse.role, internRes.school)
                internArr.push(newIntern)
                addOtherEmplyee()
            })
        }
    })
};

const addOtherEmplyee = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add an other emplyee",
            choices: ['yes', 'no'],
            name: 'extraEmployee',
        }
    ]).then(({ extraEmployee }) => {
        if (extraEmployee === "yes") {
            employeeQuestions()
        }
        else {
            fs.writeFileSync('index.html', generateHtml (answers))
        }
    })
}

employeeQuestions()