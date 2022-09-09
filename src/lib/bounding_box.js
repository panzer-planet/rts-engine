
export default class BoundingBox {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.font = "12px Arial";
    ctx.fillText(`(x: ${this.x}, y: ${this.y})`, this.getLeft() - 10, this.getTop() - 10);
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
    ctx.closePath();
  }

  containsPoint(x, y) {
    return x >= this.getLeft() && x <= this.getRight() &&
      y >= this.getTop() && y <= this.getBottom();
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.x + this.width;
  }

  getTop() {
    return this.y;
  }

  getBottom() {
    return this.y + this.height;
  }
}