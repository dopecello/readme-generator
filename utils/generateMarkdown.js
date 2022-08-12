// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}
// Creating a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

//Creating a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
        
        Licensed under the ${license} license.`;
  }
  return "";
}

//Creating a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
by ${data.name}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Requirements](#requirements)
* [Usage](#usage)
* [Contact-Me](#contact-me)
* [Contributors](#contributors)
* [Testing](#testing)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Requirements
${data.require}
## Usage
${data.usage}
## Contact-Me
* Name - ${data.name}
* Email - ${data.email}
* Github - [${data.creator}](https://github.com/${data.creator}/)
## Contributors
${data.contributors}
## Testing
\`\`\`
${data.test}
\`\`\`
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
