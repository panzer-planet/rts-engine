import Entity from "./entity";
import Point from "./point";

export default class EntityManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.entities = [];
  }

  push(entity) {
    if (!(entity instanceof Entity)) {
      throw new Error("Not an Entity");
    }
    this.entities.push(entity);
  }

  remove(index) {
    this.entities.splice(index, 1);
  }

  handleInput(eventName, event) {
    switch (eventName) {
      case "click":
        this.entities.forEach(
          (entity) => entity.onClick(Point.fromMouseEvent(this.canvas, event), event)
        );
        break;
      case "mousemove":
        this.entities.forEach((entity) => entity.onMouseMove(event));
        break;
      default:
        throw new Error(`Invalid input event name ${eventName}`);
    }
  }

  update() {
    this.entities.forEach((entity) => entity.update());
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.entities.forEach((entity) => entity.draw(this.ctx));
  }
}