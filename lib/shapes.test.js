const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Triangle area calculation', () => {
    const triangle = new Triangle(5, 10, 'blue');
    expect(triangle.getArea()).toBe(25);
  });

  test('Triangle render method', () => {
    const triangle = new Triangle(5, 10, 'blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle circumference calculation', () => {
    const circle = new Circle(5, 'red');
    expect(circle.getCircumference()).toBeCloseTo(31.42, 2);
  });

  test('Circle render method', () => {
    const circle = new Circle(5, 'red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="5" fill="red" />');
  });

  test('Square perimeter calculation', () => {
    const square = new Square(5, 'green');
    expect(square.getPerimeter()).toBe(20);
  });

  test('Square render method', () => {
    const square = new Square(5, 'green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="5" height="5" fill="green" />');
  });
});