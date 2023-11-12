const {  Triangle, Circle, Square } = require('./shapes.js');

function svgGeneration() {
    const shapes = (() => {
        if (Triangle) {
            return new Triangle.render()
        } else if (Circle) {
            return new Circle.render();
        } else if (Square) {
                return new Square.render();
        }
    })
    return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

    ${shapes}
  </svg>`;
}

module.exports = { svgGeneration };