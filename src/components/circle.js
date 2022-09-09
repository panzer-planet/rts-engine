import Entity from "../lib/entity";
import BoundingBox from "../lib/bounding_box";

export default class Circle extends Entity {
  constructor(x, y, radius, color) {
    super(new BoundingBox(x - radius, y - radius, radius * 2, radius * 2));
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    super.drawBounds(ctx);
  }

  update() {
  }

  onClick(point, event) {
    if (this.boundingBox.containsPoint(point.x, point.y)) {
      this.color = "blue";
    }
  }
}