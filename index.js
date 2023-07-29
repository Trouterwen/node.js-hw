const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content
function generateReadme(data) {
  const licenseBadge = data.license !== 'None' ? `![License](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-blue.svg)` : '';

  return `
# ${data.title}
${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out via the following methods:
- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

// Function to write the generated README content to the file
function writeReadme(data) {
  const content = generateReadme(data);
  fs.writeFile('README.md', content, (err) => {
    if (err) {
      console.error('Error writing to README.md:', err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

// Inquirer prompts to gather user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Node.js ReadMe Homework',
    },
    {
      type: 'input',
      name: 'description',
      message: 'enter description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'installation?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select a license:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    writeReadme(answers);
  })
  .catch((err) => {
    console.error('Error with inquirer:', err);
  });
