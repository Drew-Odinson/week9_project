// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What's the title of your project:`,
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is your install instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What contribution guidelines are there:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Input your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Input your email address:',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('README.md has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const READMEContent = generateREADME(answers);
        writeToFile('README.md', READMEContent);
    });
}

function generateREADME(answers) {
    const licenseBadge = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        'None': '',
    };

    return `
# ${answers.title}

${licenseBadge[answers.license]}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

This project is covered under the ${answers.license} license.

## Contributing

${answers.contribution}

## Tests

${answers.tests}

## Questions

For more information, check out my [GitHub profile](https://github.com/${answers.github}).
For any additional questions, you can reach me at [${answers.email}](mailto:${answers.email}).
`;
}

// Function call to initialize app
init();