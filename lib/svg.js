const shapes = require ("./shapes");

//creating a class based on SVG requirement, declaring version, size and namespace
class SVG {
    constructor(bgfill) {
        this.version = '1.1',
            this.width = '300',
            this.height = '200',
            this.xmlns = 'http://www.w3.org/2000/svg'
            this.bgFill = bgfill,
        this.shapes = [] //an array to hold the shapes that are created and chosen
    }

//createing a function that will iterate trhough shape types to 
userInputShape(shapeType, fill) {
let shape;

switch (shapeType, fill) {

    case 'Square':
        shape = new Square(fill);
        break
    case 'Triangle':
        shape = new shapes.Triangle(fill);
        break
    case 'Circle':
        shape = new shapes.Circle(fill);
        break

    default: console.log("Error with shape constructor")

}
this.shapes.push(shape);
}};

module.exports = SVG;