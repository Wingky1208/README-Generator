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
      `## License ๐
      Copyright ยฉ Wingky1208. All rights reserved. 
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

  ##Github link ๐ฅ
  https://github.com/${data.github}
 
  ##Description ๐
  ${data.description}

  ## Table of Contents ๐งพ

- [Installation](#installation)
- [Usage](#usage)
- ${renderLicenseLink(data.license)}
- [Contributors](#contributors)
- [Test](#test)

## Installation ๐

The steps required to install the project:

${data.installation}



## Usage ๐ป

${data.usage}

${renderLicenseSection(data.license)}


## Contributors ๐ก

${data.contributors}

Contact me at ${data.email}


## Test ๐

Run the test:

${data.test}




`;
}

module.exports = generateMarkdown;
