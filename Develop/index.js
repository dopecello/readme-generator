// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
    default: "No Title",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
    default: "No description.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    default: "None",
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
    default: "No dependencies.",
  },
  {
    type: "input",
    name: "usage",
    message: "State the languages or technologies associated with this project.",
    default: "No languages or technologies used.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
    default: "N/A",
  },
  {
    type: "input",
    name: "name",
    message: "State your full name.",
    default: "N/A",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
    default: "N/A",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "none"
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
    default: "N/A",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
