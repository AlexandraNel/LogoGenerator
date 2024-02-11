const { Square, Triangle, Circle, Text } = require("./shapes");

//creating a class based on SVG requirement, declaring version, size and namespace
class SVG {
    constructor(bgfill) {
        this.version = '1.1';
        this.width = '200';
        this.height = '200';
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.bgFill = bgfill;
        this.text = 
        this.shapes = null; //an array to hold the shapes that are created and chosen
    }

    //createing a method that will iterate thhough shape types based on the user input using class constrcutors from shapes.js
    //this function is a method as it lives inside the class consctructor and therefore does not need 'function' to declare it.
    userInputShape(shapeType, logoColour) {
        //creating a shape variable that can change based on the user input
        let shape;

        switch (shapeType) {

            case 'Square':
                shape = new Square(logoColour);
                break
            case 'Triangle':
                shape = new Triangle(logoColour);
                break
            case 'Circle':
                shape = new Circle(logoColour);
                break

            default: console.log("Error with shape constructor")
        }
        //the chosen shape will then be pushed up to the SVG class constructor array
        //an if statement is used for error handling
        if (shape) {
            this.shapes.push(shape);
        }


    }

    userInputText(text, textColour) {
        let text = `${text}`;

    }
};

//exports this module for use in index.js
module.exports = SVG;