#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditons = true;
console.log(chalk.green.bold("\n \t Wellcome to Madiha Ali - Todo-List Application\n"));
let main = async () => {
    while (conditons) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await ViewTask();
        }
        else if (option.choice === "Exit") {
            conditons = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todolist.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-List\n`);
};
let ViewTask = () => {
    console.log("\n Your Todo-List: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
let deleteTask = async () => {
    await ViewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete :"
        }
    ]);
    let deletedTask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} this task has been deleted successfuly form the your Todo-list\n`);
};
let updateTask = async () => {
    await ViewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter new task name :"
        }
    ]);
    todolist[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index - 1} updates successfully [For updated list check option: "View Todo-list"]\n`);
};
main();