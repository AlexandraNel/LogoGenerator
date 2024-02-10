//creating a class based on SVG requirement, declaring version, size and namespace
class SVG {
    constructor (){
        this.version = '1.1',
        this.width = '300',
        this.height = '200',
        this.xmlns='http://www.w3.org/2000/svg'
    }
}

//would i put colour in here?
//this is the constructor for a square object 
class Square {
    constructor (fill) {
        this.x='0',
        this.y='0',
        this.width = '200',
        this.height = '200',
        this.fill = fill
    }
    toSVG(){
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
}

//this is the constructor for a circle object 
class Circle {
    constructor (fill) {
        this.cx='100',
        this.cy='100',
        this.r='200',
        this.fill = fill
    }

    toSVG(){
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }

}

//this is the constructor for a circle object 
class Triangle {
    constructor (fill) {
        this.cx='100',
        this.cy='100',
        this.fill = fill
    }
    toSVG(){
        return `<polyline points="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
}


{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}