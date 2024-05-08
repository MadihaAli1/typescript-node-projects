#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "Enetr first number",
    type: "number", 
    name: "firstNumber" 
  },
  {
    message: "Enetr Second number",
    type: "number", 
    name: "secondNumber" },
  {
    message: "Select operator for calculation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select valid operator");
}

