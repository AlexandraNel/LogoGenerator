
const SVG = require('./svg.js');

describe('GenerateSvg', () => {
    describe('SVG', () => {
        it('should generate an svg string with a blue bg', () => {
            let logoBase = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg" style="background-color: blue;"></svg>`
            let svgBase = new SVG('blue');
            expect(svgBase.generateSVG()).toEqual(logoBase);
        })
    })

});