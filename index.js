const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');
// array of questions for user
const questions = [ {
type: 'input', 
name: 'title', 
message: 'What is the title of your project?',
validate: titleInput => {
    if (titleInput) {
        return true;
    } else {
        console.log('Please enter a title for your project!');
        return false;
    }
  }
},
{
type: 'input',
name: 'description',
message: 'Please give your project a description!',
validate: descriptionInput => {
    if (descriptionInput) {
        return true;
    } else {
        console.log('Please enter a description of your project!');
        return false;
    }
  }
},
{
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions for your project.'
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use your project'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Add guidelines for how users can contribute to your project'
},
{
    type: 'input',
    name: 'testInstructions',
    message: 'Explain how to run tests on your project'
},
{
    type: 'list',
    name: 'license',
    message: 'Which license(s) did your project use?',
    choices: [
            'MIT',
			'GNU AGPLv3',
			'GNU GPLv3',
			'GNU LGPLv3',
			'Mozilla Public 2.0',
			'Apache 2.0',
			'Boost Software 1.0',
			'The Unlicense'
    ],
    default: 0
},
{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.',
    validate: usernameInput => {
        if (usernameInput) {
            return true;
        } else {
            console.log('Please enter your Github username!');
            return false;
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address.',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false;
        }
    }
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('README.md generated successfully!');
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            return generateMarkdown(data);
        })
        .then((markdown) => {
            writeToFile('README.md', markdown);
        })
        .catch((err) => {
            console.log(err);
        });
}

// function call to initialize program
init();
