let Shape = {  Shapes, Triangle, Circle, Square } = require('./shapes.js');

function svgGeneration() {
        if (Shape === Triangle) {
            return new Shape.render();
        } else if (Shape === Circle) {
            return new Shape.render();
        } else if (Shape === Square) {
          return new Shape.render();
        } 
    return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${Shape}
  </svg>`;
}

module.exports = { svgGeneration };