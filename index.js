// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is your description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'what is your installation instructions?',
      name: 'install_instruction',
    },
    {
      type: 'input',
      message: 'what is your usage information?',
      name: 'usage_instruction',
    },    
    {
      type: 'input',
      message: 'what is your contribution guidelines?',
      name: 'contribution_guideline',
    },    
    {
      type: 'input',
      message: 'what is your test instructions?',
      name: 'test_instructions',
    },
    {
      type: 'list',
      message: 'What is your preferred license?',
      name: 'license',
      choices: ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'Hippocratic License', 'IBM', "ISC",
      "MIT", "Mozilla", "Open Data Commons", "Perl", "SIL", "Unlicense", "WTFPL", "Zlib", "Empty"],
    },
    {
      type: 'input',
      message: 'what is your Github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'what is your Email address?',
      name: 'email_address',
    },

  ])
  .then((response) => {
     let markdownText = markdown.generateMarkdown(response);
     console.log("Result " + markdownText);
     fs.writeFile('README.md', markdownText, (err) =>
     err ? console.log(err) : console.log('Successfully created README.md!')
   );
  });


