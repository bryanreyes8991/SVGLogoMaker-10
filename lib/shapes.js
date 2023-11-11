class Shapes {
    constructor(logoColor, shapeColor, ){
        this.logoColor = logoColor;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('Must implement render()');
    }
}

class Triangle extends Shapes {
    constructor(logoColor, shapeColor, logoName) {
        super(logoColor);
        super(shapeColor);
        this.logoName = logoName;
    }
    render() {
        if (this.logoName.length > 3) {
            throw new Error('Error: Enter 3 Characters for Logo');
        } return `<polygon points="150 10 275 205 35 205 150 10"
        stroke="black" fill="${this.shapeColor}" stroke-width="2"/>
      <text x="153" y="150" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoName}</text>`;
    }
} 

class Circle extends Shapes {
    constructor(logoColor, shapeColor, logoName) {
        super(logoColor);
        super(shapeColor);
        this.logoName = logoName;
    }
    render() {
        if (this.logoName.length > 3) {
            throw new Error('Error: Enter 3 Characters for Logo');
        } return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke="black"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoName}</text>`;
    }
}

class Square extends Shapes {
    constructor(logoColor, shapeColor, logoName) {
        super(logoColor);
        super(shapeColor);
        this.logoName = logoName;
    }
    render() {
        if (this.logoName.length > 3) {
            throw new Error('Error: Enter 3 Characters for Logo');
        } return `<rect x="70" y="30" width="150" height="150" fill="${this.shapeColor}" stroke="black" />
        <text x="145" y="120" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoName}</text>`;
    }
}

module.exports = Triangle, Circle, Square;