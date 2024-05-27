#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: chalk.yellow("Please enter the amount of seconds"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red("Please enter a valid number");
            }
            else if (input > 60) {
                return chalk.red("Seconds must be within 60");
            }
            else {
                return true;
            }
        },
    },
]);
let input = res.userInput;
function startTime(value) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(intTime);
    function updateTimer() {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log(chalk.red("Timer has expired"));
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 60);
        const second = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`);
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}
startTime(input);
