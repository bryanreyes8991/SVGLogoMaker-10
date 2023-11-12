const {  Shapes, Triangle, Circle, Square } = require('./shapes.js');

function svgGeneration() {
        if (Triangle) {
            return new Triangle.render();
        } else if (Circle) {
            return new Circle.render();
        } else if (Square) {
          return new Square.render();
        } 
    return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${''}
  </svg>`;
}

module.exports = { svgGeneration };