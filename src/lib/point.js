export default class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromMouseEvent(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return new Point(x, y);
  }
}