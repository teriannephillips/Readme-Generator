
//required packages
const inquirer = require("inquirer")
//inquirer
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a project description'
    },
    { type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions'
    },
    { type: 'input',
    name: 'usage',
    message: 'Please enter usage information'
    },
    { type: 'input',
    name: 'contrubution',
    message: 'Please enter guidelines for contribution'
    },
    { type: 'input',
    name: 'test',
    message: 'Please enter test instructions'
    }
  ]).then(answers => {
    console.log(answers.title);
    console.log(answers.description);
  });
  // // TODO: Create a function to write README file
// function writeToFile(fileName, answers) {}
