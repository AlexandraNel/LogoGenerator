
# Logo Generator
![License Badge](./license-badge.svg)
        
## Description

**Motivation:** Generating a command line application that can generate a simple logo, easily and efficiently, on demand. 

**The Why:** This project allows a quick logo to be generated when working with code for any given project. 

**Problem Solved:** When working with clients on branded websites and applications, or creating templated applications, a logo can be generated as an svg and used immediately. This avoids the need to utilise non scaleable png’s, wait for client assets, or utilise graphic design software. This generated logo can then be used as a permanent fixture or temporarily 

**Lessons:** This project allowed me to explore jest and testing processes. It also allowed me to explore SVG rendering and using modular classes 


## Table of Contents

> 1. Technologies 

> 2. Installation 

> 3. Usage 

> 4. Roadmap 

> 5. Support 

> 6.  Licence 

> 7. Tests 

## Technologies

- VS Code
- Node
- inquirer 8.2.4
- inquirer-maxlength-input-prompt 1.0.2
- jest 29.4.0
- Git Hub
- Git Bash

## Installation
User must have Node.

inquirer v8.2.4 must be installed in the terminal (npm i inquirer@8.2.4)\
inquirer maxlength must be initialised in the terminal (npm add inquirer-maxlength-input-prompt)\
for testing, jest must be installed in the terminal (npm i jest)


## Usage
- Initialise the folder LogoGenerator in your chosen code editor.
- Within the terminal (we used git bash) to start the logo  prompts. 
- Prompts will then guide you through a series of choices.
- At the end of this you will have a logo generated within this folder.

For step by step guide visit [This Video](https://drive.google.com/file/d/1RMeeJ0r1t6X8CX5U8WBaiOf6tvVxrcJP/view?usp=sharing)


## Roadmap

 

## Support

info@alexandranel.com

## Credits

[Alexandra Nel](https://github.com/AlexandraNel/)

## License
        
MIT License

## Tests
Tests using Jest used [svg.test.js](./lib/svg.test.js) and [shapes.test.js](./lib/shapes.test.js)
To run, make sure jest is installed (npm i jest) and npm run test within the command line at index.js

