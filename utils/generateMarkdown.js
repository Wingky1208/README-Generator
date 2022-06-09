// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![license](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return (
      `[License](#license)`
    )
  }
  return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return (
      `## License 🎖
      Copyright © Wingky1208. All rights reserved. 
      Licensed under the ${license} license.
      `
    )
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ##Github link 🖥
  https://github.com/${data.github}
 
  ##Description 📝
  ${data.description}

  ## Table of Contents 🧾

- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(data.license)}
- [Contributors](#contributors)
- [Test](#test)

## Installation 🔎

The steps required to install the project:

${data.installation}



## Usage 💻

${data.usage}

${renderLicenseSection(data.license)}


## Contributors 💡

${data.contributors}

Contact me at ${data.email}


## Test 🔑

Run the test:

${data.test}




`;
}

module.exports = generateMarkdown;
