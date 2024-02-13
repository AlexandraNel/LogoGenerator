const { Square, Triangle, Circle, Text } = require("./shapes");

//creating a class based on SVG requirement, declaring version, size and namespace
class SVG {
    constructor(bgfill) {
        this.version = '1.1';
        this.width = '200';
        this.height = '200';
        this.xmlns = 'http://www.w3.org/2000/svg';
        this.bgFill = bgfill;
        this.text = ''; //empty string waiting for svg data
        this.shape = ''; //empty string waiting for svg data
    }


    //a method that will iterate thhough shape types based on the user input
    //utilises the class constrcutors from shapes.js
    //uses the method on the shapes.js constructor to write a string to our SVG constructor
    userInputShape(shapeType, logoColour) {
        //creating a shape variable that can change based on the user input
        let chosenShape;

        switch (shapeType) {

            case 'Square':
                chosenShape = new Square(logoColour);
                break
            case 'Triangle':
                chosenShape = new Triangle(logoColour);
                break
            case 'Circle':
                chosenShape = new Circle(logoColour);
                break

            default: console.log("Error with shape constructor");
                return; //exit method if invalid
        }
        //the chosen shape will then be pushed up to the SVG class constructor array
        //an if statement is used for error handling
        if (chosenShape) {
            this.shape = chosenShape.render();
        }
    };


    //a method that grabs the user input for text info, utilises the class constrcutors from shapes.js
    // then triggers the method on the shapes.js constructor to write a string to our SVG constructor
    userInputText(text, textColour) {
        let letters = new Text(text, textColour);

        if (letters) {
            this.text = letters.render();
        }
    };

     // Method to generate the final SVG markup
     //no spaces or extra lines included as to avoid breaking JEST test template literals
     generateSVG() {
        return `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}" style="background-color: ${this.bgFill};">${this.shape}${this.text}</svg>`;
    }
};


//exports this module for use in index.js
module.exports = SVG;