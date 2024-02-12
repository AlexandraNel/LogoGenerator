const SVG = require('./svg'); // Adjust the path as necessary

// Create an instance of the SVG class
let mySVG = new SVG('none'); // You can change 'lightblue' to any color you prefer

// Set up a shape and text
mySVG.userInputShape('Circle', 'red'); // Change 'Circle' and 'red' as necessary
mySVG.userInputText('ABC', 'black'); // Change 'ABC' and 'black' as necessary

// Generate the SVG markup
let svgMarkup = mySVG.generateSVG();

// Output the generated SVG markup to the console
console.log(svgMarkup);