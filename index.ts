#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation';
import { questions } from "./questionsBank.js";

const sleep=()=>new Promise((resolve)=>setTimeout((resolve),2000))

async function wellcomeScreen(){
   let title=chalkAnimation.rainbow(`
====================================================================
>>>>>>>>>>>>>>>>>>>>>>>>> CLI QUIZ APP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
====================================================================   
   `)
   await sleep();
   title.stop();
    
}
await wellcomeScreen();
async function main() {


    const question = await inquirer.prompt(questions);
    const { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 } = question;

    let score = 0;
    if (question1 === 'programming language') {
        score += 10;
    }
    if (question2 === 'MicroSoft') {
        score += 10;
    }
    if (question3 === '.ts') {
        score += 10;
    }
    if (question4 === 'all of the above') {
        score += 10;
    }
    if (question5 === '|') {
        score += 10;
    }
    if (question6 === 'class MyClass { }') {
        score += 10;
    }
    if (question7 === 'all of the above') {
        score += 10;
    }

    if (question8 === 'all of the above') {
        score += 10;
    }

    if (question9 === 'all of the above') {
        score += 10;
    }

    if (question10 === 'Git') {
        score += 10;
    }

   let result=score/100*100;
   if(result>=50){
        console.log(`\nCongratulation! your Score is:${chalk.green(result+"%")}.you have passed the quiz`)
   }else{
    console.log(`\nyour Score:${chalk.red(result,"%")}.you have failed the quiz.minimum 50% score pass the quiz`)
   }
}

await main();