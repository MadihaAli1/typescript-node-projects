#!/usr/bin/env node
//importing inquirer and chalk packages;
import inquirer from "inquirer";
import chalk from "chalk";
//Prompt the user to enter a sentence;
//Using Object array;
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence:",
    },
]);
//Trimming the sentence and splitting it into words based on "spaces";
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence;
console.log(chalk.bold("\n- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n- Word Count: ${chalk.bold.red(words.length)}\n`));
