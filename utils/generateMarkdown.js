const license_info = [
{
  name: "Apache",
  licenseBadge: "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)",
  licenseDescription: "Apache 2.0 License",
},
{
  name: "Boost",
  licenseBadge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  licenseDescription: "Boost Software License 1.0",
},
{
  name: "BSD",
  licenseBadge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  licenseDescription: "BSD 3-Clause License, BSD 2-Clause License",
},
{
  name: "Creative Commons",
  licenseBadge: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  licenseDescription: "CC0 Attribution 4.0 International, Attribution-ShareAlike 4.0 International, Attribution-NonCommercial 4.0 International, \
  Attribution-NoDerivates 4.0 International, Attribution-NonCommmercial-ShareAlike 4.0 International, Attribution-NonCommercial-NoDerivatives 4.0 International",
},
{
  name: "Eclipse",
  licenseBadge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  licenseDescription: "Eclipse Public License 1.0",
},
{
  name: "GNU",
  licenseBadge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  licenseDescription: "GNU GPL v3, GNU GPL v2, GNU AGPL v3, GNU LGPL v3, GNU FDL v1.3",
},
{
  name: "Hippocratic License",
  licenseBadge: "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
  licenseDescription: "The Hippocratic License 2.1, The Hippocratic License 3.0",
},
{
  name: "IBM",
  licenseBadge: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
  licenseDescription: "IBM Public License Version 1.0",
},
{
  name: "ISC",
  licenseBadge: "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
  licenseDescription: "ISC License (ISC)",
},
{
  name: "MIT",
  licenseBadge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  licenseDescription: "The MIT License",
},
{
  name: "Mozilla",
  licenseBadge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  licenseDescription: "Mozilla Public License 2.0",
},
{
  name: "Open Data Commons",
  licenseBadge: "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
  licenseDescription: "Attribution License (BY), Open Database License (ODbL), Public Domain Dedication and License (PDDL)",
},
{
  name: "Perl",
  licenseBadge: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
  licenseDescription: "The Perl License, The Artistic License 2.0",
},
{
  name: "SIL",
  licenseBadge: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  licenseDescription: "SIL Open Font License 1.1",
},
{
  name: "Unlicense",
  licenseBadge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
  licenseDescription: "The Unlicense",
},
{
  name: "WTFPL",
  licenseBadge: "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)",
  licenseDescription: "Do What the Fuck You Want to Public License",
},
{
  name: "Zlib",
  licenseBadge: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
  licenseDescription: "The zlib/libpng License",
},
{
  name: "Empty",
  licenseBadge: "",
  licenseDescription: "",
}
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLink;
  for (var value of license_info)
  {
    if (value.name == license)
    {
      badgeLink = value.licenseBadge;
      break;
    }
  }

  return badgeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let description;
  for (var value of license_info)
  {
    if (value.name == license)
    {
      description = value.licenseDescription;
      break;
    }
  }

  return description;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  var licenseDescription = renderLicenseSection(data.license);
  var licenseBadge = renderLicenseBadge(data.license);

  var fullMarkdown = `
  # ${data.title}

  ${licenseBadge}

  # Table of contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution guidelines](#guidelines)
  5. [Test instruction](#TestInstructions)
  6. [License type](#licenseType)
  7. [Questions](#questions)

  ## Description  <a name="description"></a>
  ${data.description}

  ## Installation  <a name="installation"></a>
  ${data.install_instruction}

  ## Usage <a name="usage"></a>
  ${data.usage_instruction}

  ## Contribution guidelines <a name="guidelines"></a>
  ${data.contribution_guideline}

  ## Test instruction <a name="TestInstructions"></a>
  ${data.test_instructions}

  ## License type <a name="licenseType"></a>
  ${data.license}
  ${licenseDescription}

  ## Questions <a name="questions"></a>
  URI: [https://github.com/${data.username}](https://github.com/${data.username})
  
  Maintainer:\\
  **${data.username}** [${data.email_address}](mailto:${data.email_address})

  `
  return fullMarkdown;
}

module.exports = {
  generateMarkdown,
}