// Shapes contructor is imported
const { Square, Triangle, Circle, Text } = require('./shapes.js');


describe('Shapes', () => {

    describe('Square', () => {
        it('should generate a red square in svg markup', () => {
            let square = `<rect x="0" y="0" width="180" height="180" fill="red" />`;
            let shape = new Square('red');
            expect(shape.render()).toEqual(square)

        })
    })

    describe('Triangle', () => {
        it('should generate a red triangle in svg markup', () => {
            let triangle = `<polygon points="100,0 200,200 0,200" fill="red" />`;
            let shape = new Triangle('red');
            expect(shape.render()).toEqual(triangle)

        })
    })

    describe('Circle', () => {
        it('should generate a red circle in svg markup', () => {
            let circle = `<circle cx="100" cy="100" r="100" fill="red" />`
            let shape = new Circle('red');
            expect(shape.render()).toEqual(circle)

        })
    })

    describe('Text', () => {
        it('should generate 3 letters of red text LEX in svg markup', () => {
            let text = `<text x="100" y="150" font-size="100" text-anchor="middle" fill="red"> LEX </text>`
            let textOut = new Text('LEX', 'red');
            expect(textOut.render()).toEqual(text)

        })
    })
});
