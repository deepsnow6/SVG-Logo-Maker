const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Triangle area calculation', () => {
    const triangle = new Triangle(5, 10);
    expect(triangle.getArea()).toBe(25);
  });

  test('Circle circumference calculation', () => {
    const circle = new Circle(5);
    expect(circle.getCircumference()).toBeCloseTo(31.42, 2);
  });

  test('Square perimeter calculation', () => {
    const square = new Square(5);
    expect(square.getPerimeter()).toBe(20);
  });
});
