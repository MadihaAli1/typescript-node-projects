#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class player{
    name: string;
    feul: number = 100;
    constructor(name:string){
        this.name = name;
    }
    feulDecreases(){
       let feul = this.feul - 25;
       this.feul = feul;
    }
    feulIncrease(){
        this.feul = 100;
    }
}
class oponent{
    name: string;
    feul: number = 100;
    constructor(name:string){
        this.name = name;
    }
    feulDecreases(){
        let feul = this.feul - 25;
        this.feul = feul;
     }
}

let player_input = await inquirer.prompt([
    {
      name: "userName",
      type: "input",
      message: "Enter your name: "
    }
])
let oponent_input = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent",
        choices:["Skeleton","Alien","Zombie"]

    }
])

let player1 = new player(player_input.userName);
let opponent1 = new oponent(oponent_input.select);

do{ // Skeleton
    if(oponent_input.select === "Skeleton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices:["Attack","Drink Portion","Run for your life.."]

            }
        ])
        if(ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
                player1.feulDecreases();
                console.log(`${player1.name} feul is ${player1.feul}`);
                console.log(`${opponent1.name} feul is ${opponent1.feul}`);
                if( player1.feul <= 0){
                     console.log(chalk.red("You loose, Better luck next time"));
                     process.exit();
                }

            }
            if(num <= 0){
                opponent1.feulDecreases();
                console.log(`${player1.name} feul is ${player1.feul}`);
                console.log(`${opponent1.name} feul is ${opponent1.feul}`);
                if( opponent1.feul <= 0){
                    console.log(chalk.green("You win"));
                    process.exit();
               }

            }
        }
        if(ask.opt === "Drink Portion"){
            player1.feulIncrease();
            console.log(chalk.green(`You drink health portion your feul is ${player1.feul}`));
        }
        if(ask.opt === "Run for your life.."){
            console.log(chalk.red("You loose, Better luck next time"));
            process.exit();
        }
    }
    
    //Alien
    if(oponent_input.select === "Alien"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices:["Attack","Drink Portion","Run for your life.."]

            }
        ])
        if(ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
                player1.feulDecreases();
                console.log(`${player1.name} feul is ${player1.feul}`);
                console.log(`${opponent1.name} feul is ${opponent1.feul}`);
                if( player1.feul <= 0){
                     console.log(chalk.red("You loose, Better luck next time"));
                     process.exit();
                }

            }
            if(num <= 0){
                opponent1.feulDecreases();
                console.log(`${player1.name} feul is ${player1.feul}`);
                console.log(`${opponent1.name} feul is ${opponent1.feul}`);
                if( opponent1.feul <= 0){
                    console.log(chalk.green("You win"));
                    process.exit();
               }

            }
        }
        if(ask.opt === "Drink Portion"){
            player1.feulIncrease();
            console.log(chalk.green(`You drink health portion your feul is ${player1.feul}`));
        }
        if(ask.opt === "Run for your life.."){
            console.log(chalk.red("You loose, Better luck next time"));
            process.exit();
        }
    }

    //"Zombie"
    if(oponent_input.select === "Zombie"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices:["Attack","Drink Portion","Run for your life.."]

            }
        ])
        if(ask.opt === "Attack"){
            let num = Math.floor(Math.random()*2)
            if(num > 0){
                player1.feulDecreases();
                console.log(`${player1.name} feul is ${player1.feul}`);
                console.log(`${opponent1.name} feul is ${opponent1.feul}`);
                if( player1.feul <= 0){
                     console.log(chalk.red("You loose, Better luck next time"));
                     process.exit();
                }

            }
            if(num <= 0){
                opponent1.feulDecreases();
                console.log(`${player1.name} feul is ${player1.feul}`);
                console.log(`${opponent1.name} feul is ${opponent1.feul}`);
                if( opponent1.feul <= 0){
                    console.log(chalk.green("You win"));
                    process.exit();
               }

            }
        }
        if(ask.opt === "Drink Portion"){
            player1.feulIncrease();
            console.log(chalk.green(`You drink health portion your feul is ${player1.feul}`));
        }
        if(ask.opt === "Run for your life.."){
            console.log(chalk.red("You loose, Better luck next time"));
            process.exit();
        }
    }

}
while(true);