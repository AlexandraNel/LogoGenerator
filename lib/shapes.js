//this is the constructor for a square object 
class Square {
    constructor(logoColour) {
        this.x = '0',
            this.y = '0',
            this.width = '200',
            this.height = '200',
            this.fill = logoColour
    
    }
    toSVG() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
};

//this is the constructor for a triangle/polygon object 
class Triangle {
    constructor(logoColour) {
        this.points = '150,0 200,200 0,200'; //points topX,topY bottomRightX, bottomRightY, bottomLeftX, BottomLeftY
        this.fill = logoColour
    }
    //the toSVG method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
    toSVG() {
        return `<polygon points="${this.points}" fill="${this.fill}" />`;
    }
}

//this is the constructor for a circle object 
class Circle {
    constructor(logoColour) {
        this.cx = '100', //centre x axis
        this.cy = '100', //centre y axis
        this.r = '200', //radius of circle
        this.fill = logoColour
    }
    //the toSVG method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
    toSVG() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }  
}

class Text {
    constructor(text, textColour) {
        this.text = text,
        this.fill = textColour
        this.x = '100' //positions text in the middle on the horizontal axis
        this.y = '125' //positions text just under half on teh verticle axis
        this.fontSize = '60'; //font size 60
        this.textAnchor = 'middle'; //text is centred
    }
    //the toSVG method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
    toSVG() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}" />`;
    } 
}

//exporting modules for use in other .js files
module.exports = { Square, Triangle, Circle, Text };
