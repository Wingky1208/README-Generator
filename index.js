// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')


// an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "What's your Github user name?"
    },
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe about your project:"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "Other", "GPLv2", "GPLv3", "BSD3", "BSD2", "Apache"]
    },
    {
        type: "input",
        name: "installation",
        message: "Any dependencies to install?",
        default: "npm i"

    },
    {
        type: "input",
        name: "usage",
        message: "What does the usage of this repo?",
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who are the contributors of this repo?",
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating...");

            writeToFile("./result/README.md", generateMarkdown(inquirerAnswers))
        })
}

// Function call to initialize app
init();
