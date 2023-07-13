class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  constructor(base, height, color) {
    super(color);
    this.base = base;
    this.height = height;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color);
    this.radius = radius;
  }

  render() {
    return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

class Square extends Shape {
  constructor(sideLength, color) {
    super(color);
    this.sideLength = sideLength;
  }

  render() {
    return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
  }

  getPerimeter() {
    return 4 * this.sideLength;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
