var shape = {  Shapes, Triangle, Circle, Square } = require('./shapes.js');

function svgGeneration() {
        if (shape = Triangle) {
            shape = new Triangle.render();
        } else if (shape = Circle) {
            shape = new Circle.render();
        } else if (shape = Square) {
          shape = new Square.render();
        } 
    return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${shape}
  </svg>`;
}

module.exports = { svgGeneration };