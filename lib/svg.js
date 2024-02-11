const shapes = require ("./shapes");

//creating a class based on SVG requirement, declaring version, size and namespace
class SVG {
    constructor(bgfill ) {
        this.version = '1.1',
            this.width = '200',
            this.height = '200',
            this.xmlns = 'http://www.w3.org/2000/svg'
            this.bgFill = bgfill,
            // this.text = text, ????
        this.shapes = [] //an array to hold the shapes that are created and chosen
    }

//createing a function that will iterate trhough shape types to 
userInputShape(shapes, logoColour) {
let shape;


switch (shapes) {

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
this.shapes.push(shape);
}};

module.exports = SVG;