
//required packages
const inquirer = require("inquirer")
const fs = require('fs');
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
    name: 'contribution',
    message: 'Please enter guidelines for contribution'
    },
    { type: 'input',
    name: 'test',
    message: 'Please enter test instructions'
    },
  {
    type: 'list',
      name: 'licence',
      message: 'Please select your licence',
      choices: ['none', 'apache 2.0', 'GNU General Public License v3.0', 
      'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0', 'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense']
  },
  { type: 'input',
    name: 'username',
    message: 'Please enter your github username'
    },
    { type: 'input',
    name: 'email',
    message: 'Please enter your e-mail address'
    },
    { type: 'input',
    name: 'repo',
    message: 'Please enter your repository name'
    },
  ]).then(answers => {
    writeToFile('README.md', answers);
  });
  // // TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile('test.md',`# ${answers.title}\n<img src="https://img.shields.io/github/license/${answers.username}/${answers.repo}">\n
---\n## Table of Contents\n* [Description](#description)\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contributing](#contributing)\n* [Tests](#tests)\n* [Licence](#licence)\n* [Questions](#questions)\n ---\n## Description\n${answers.description}\n
[BACK TO TOP](#top)\n
---\n## Installation\n${answers.installation}\n
[BACK TO TOP](#top)\n
---\n## Usage\n${answers.usage}\n
[BACK TO TOP](#top)\n
---\n## Contributing\n${answers.contribution}\n
[BACK TO TOP](#top)\n
---\n## Tests\n${answers.test}\n
[BACK TO TOP](#top)\n
---\n## Licence\nThis project is licenced by ${answers.licence}\n
[BACK TO TOP](#top)\n
---\n## Questions\nPlease visit my [GitHub Profile](https://github.com/${answers.username})\n
[E-mail me](mailto:${answers.email}) if you have any further questions!\n
[BACK TO TOP](#top)
  `, (err) =>
  err ? console.error(err) : console.log('Commit logged!')
);


}
