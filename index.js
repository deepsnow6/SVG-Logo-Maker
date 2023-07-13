const inquirer = require('inquirer');
const fs = require('fs');

function createLogo() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:'
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal number):'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square']
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal number):'
      }
    ])
    .then(answers => {
      const { text, textColor, shape, shapeColor } = answers;

      // Generate SVG markup based on the selected shape
      let svgMarkup;
      switch (shape) {
        case 'circle':
          svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <circle cx="150" cy="100" r="50" fill="${shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
          </svg>`;
          break;
        case 'triangle':
          svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <polygon points="100,150 200,150 150,50" fill="${shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
          </svg>`;
          break;
        case 'square':
          svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            <rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />
            <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="${textColor}">${text}</text>
          </svg>`;
          break;
      }

      // Save SVG markup to file
      fs.writeFile('logo.svg', svgMarkup, err => {
        if (err) {
          console.error('Error saving logo.svg:', err);
        } else {
          console.log('Generated logo.svg');
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
}

// Run the application
createLogo();