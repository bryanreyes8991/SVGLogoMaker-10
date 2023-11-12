const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { svgGeneration } = require('./svg.js')
class CLI {
    run() {
        return inquirer
        .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape.',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter color or hexadecimal for shape.',
        },
        {
            type: 'input',
            name: 'logoColor',
            message: 'Enter color or hexadecimal for logo.',
        },
        {
            type: 'input',
            name: 'logoName',
            message: 'Enter 3 letters for a logo name.',
        },
        ]).then(({ shape, shapeColor, logoColor, logoName }) => {
            this.shape = shape;
            this.shapeColor = shapeColor;
            this.logoColor = logoColor;
            this.logoName = logoName;
            return writeFile(
                join(__dirname, '..', 'output', 'logo.svg'),
                svgGeneration(shape, shapeColor, logoColor, logoName)
            );
        }).then(() => console.log('logo.svg created'))
        .catch((err) => {
            console.log(err);
        });
    }
}


module.exports = CLI;