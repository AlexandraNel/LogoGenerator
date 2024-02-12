//this is the constructor for a square object 
//the toSVG() method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
class Square {
    constructor(logoColour) {
        this.x = '0';
        this.y = '0';
        this.width = '200';
        this.height = '200';
        this.fill = logoColour;

    }
    toSVG() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
};

//this is the constructor for a triangle/polygon object 
//the toSVG() method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
class Triangle {
    constructor(logoColour) {
        this.points = '150,0 200,200 0,200'; //points topX,topY bottomRightX, bottomRightY, bottomLeftX, BottomLeftY
        this.fill = logoColour;
    }

    toSVG() {
        return `<polygon points="${this.points}" fill="${this.fill}" />`;
    }
}

//this is the constructor for a circle object 
//the toSVG() method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
class Circle {
    constructor(logoColour) {
        this.cx = '100'; //centre x axis
        this.cy = '100'; //centre y axis
        this.r = '100'; //radius of circle
        this.fill = logoColour;
    }
    
    toSVG() {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }  
}

//this is the constructor for the text input
//the toSVG() method uses template literals to construct the correct svg markup utlising the class constrcutors. our inputs are then constructed into usable svg markup
class Text {
    constructor(text, textColour) {
        this.text = text;
        this.fill = textColour;
        this.x = '100'; //positions text in the middle on the horizontal axis
        this.y = '200'; //positions text just under half on teh verticle axis
        this.fontSize = '100'; //font size 60
        this.textAnchor = 'middle'; //text is centred
    }
   
    toSVG() {
        return `<text x="${this.x}" y="${this.y}" font-size="${this.fontSize}" text-anchor="${this.textAnchor}" fill="${this.fill}"> ${this.text} </text>`;
    } 
}

//exporting modules for use in other .js files
module.exports = { Square, Triangle, Circle, Text };
