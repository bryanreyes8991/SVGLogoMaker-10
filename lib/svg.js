const {  Triangle, Circle, Square } = require('./shapes.js');

function svgGeneration() {
    const shapes = (() => {
        switch (shapes) {
            case 'triangle':
                return new Triangle.render();
            case 'circle':
                return new Circle.render();
            case 'square':
                return new Square.render();
        }
    })
    return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${shapes}
  </svg>`;
}

module.exports = svgGeneration;