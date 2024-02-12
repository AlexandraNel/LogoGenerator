
const fs = require('fs');
const path = require('path');
const SVG = require('./lib/svg.js') //connecting the shapes module
const inquirer = require('inquirer');
// const logoPrompts = require('./lib/questions')

async function logoPrompts() {
    //try block means I can use one .catch function for the entire block
    try {

        const firstQ = await inquirer.prompt(
            [{
                type: 'confirm',
                name: 'start',
                message: 'Welcome! You have entered the logo generator, I will ask you a series of questions. A logo will be generated using your input. Press Y to start, press N to exit',
            }]);

        // checking response to see if user wants to proceed to this application, if not exit 
        if (!firstQ.start) {
            console.log('exiting...');
            process.exit();
        }

        //async function continues on to the next Q if firstQ.start is true
        //we continue on to ask all the required questions

        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Choose up to 3 letters for your logo',
            },
            {
                type: 'input',
                name: 'textColour',
                message: 'What colour would you like your logo TEXT to be? Write its name or the hex code',
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'Choose a shape that you would like your logo to be',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                name: 'logoColour',
                message: 'What colour would you like your LOGO to be? Write its name or the hex code',
            },
            {
                type: 'input',
                name: 'bgFill',
                message: 'what background would you like your logo to have? This will create a filled colour square behind your logo shape- if none, write none',
            },


        ]);
        //variable 'mySvg for storing our new svg
        //this variable triggets the SVG.js and passes teh bg fill parameter to it
        let mySvg = new SVG(answers.bgFill);

        //our variable then utilises the methods within SVG to pass the inquirer answers to it
        mySvg.userInputShape(answers.shapeType, answers.logoColour);
        mySvg.userInputText(answers.text, answers.textColour); 
     
        
    //we use file system to access the method 'generateSVG() within SVG.js utilising teh data we programmed into mySVG variable
    //this will write a mylogo.svg to our project
        fs.writeFile( 'mylogo.svg', mySvg.generateSVG(), (err)=> {
            if (err) throw 'there has been an error' + err;
            console.log('CONGRATS! You have generated logo.svg, check your output folder');});        
        

    } catch (error) {
        console.log('This generator has malfunctioned, please try again', error);

    }

};

logoPrompts();
