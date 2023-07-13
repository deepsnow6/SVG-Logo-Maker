class Triangle {
    constructor(base, height) {
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Square {
    constructor(sideLength) {
      this.sideLength = sideLength;
    }
  
    getPerimeter() {
      return 4 * this.sideLength;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square
  };
  