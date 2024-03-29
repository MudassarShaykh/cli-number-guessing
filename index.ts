#! /usr/bin/env node

import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random() * 6 + 1  );

const answer = await inquirer.prompt([
    {
message: "Please guess a number between 1-6 ",
type: "number",
name: "guessednumber",        
    }
]);


if (answer.guessednumber === randomnumber){
    console.log("Conguratulations! you guessed the correct answer")
    console.log("Well done");
}
else {
     console.log("you guessed the wrong answer")
     console.log("Try Again");
    }

  