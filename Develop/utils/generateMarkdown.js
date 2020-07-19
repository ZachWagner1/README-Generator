// function to generate markdown for README
function generateMarkdown(data) {
  const {
    title, 
    description, 
    installation, 
    usage, 
    contributing, 
    testInstructions,
    license,
    github,
    email
  } = data;
    return `# ${data.title}
![${license} license badge](https://img.sheilds.io/badge/license-${license.replace(/ /g, '%20')}-green)

## Description

${description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)

## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License 
  This project is covered under the ${license} license.

  ## Contributing
  ${contributing}

  ## Testing
  ${testInstructions}

  ## Questions
  Visit me at GitHub  
  [${github}](https://github.com/${github})

  Comments or questions? Email me at:
  [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
