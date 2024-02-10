const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const shapes =  require ('./shapes')

//I am using an asynch function for my inquirer prompts as I want to allow my user to exit the process if initialised by accident
//teh asynch function allows me to make my process readable and guide the steps in an easy to understand sequence

async function logoPrompts(){
    //try block means I can use one .catch function for the entire block
    try{

       const firstQ = await inquirer.prompt(
        [{
            type:'confirm',
            name: 'start',
            message:'Welcome! You have entered the logo generator, I will ask you a series of questions. A logo will be generated using your input. Press Y to start, press N to exit',
        }]);

        // checking response to see if user wants to proceed to this application, if not exit 
    if (!firstQ.start){
        console.log('exiting...');
        process.exit();
    }
    
    //async function continues on to the next Q if firstQ.start is true
    //we continue on to ask all the required questions

    const secondQ = await inquirer.prompt([
        {
            type: 'input',
            name:'text',
            message:'Choose up to 3 letters for your logo',
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'What colour would you like your logo TEXT to be? Write its name or the hex code',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape that you would like your logo to be',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'logoColour',
            message: 'What colour would you like your LOGO to be? Write its name or the hex code',
        },
    ]);

    console.log('Generated logo.svg');
        //function to create logo here

    } catch (error) {
        console.log ('This generator has malfunctioned, please try again', error);
    
}};