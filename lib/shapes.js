//this is the constructor for a square object 
class Square {
    constructor(fill) {
        this.x = '0',
            this.y = '0',
            this.width = '200',
            this.height = '200',
            this.fill = fill
    }

}

//this is the constructor for a triangle/polygon object 
class Triangle {
    constructor(fill) {
        this.points = '150,0 300,200 0,200';
        this.fill = fill
    }
}

//this is the constructor for a circle object 
class Circle {
    constructor(fill) {
        this.cx = '100',
            this.cy = '100',
            this.r = '200',
            this.fill = fill
    }
}


module.exports = { Square, Triangle, Circle };


{/* <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */}

