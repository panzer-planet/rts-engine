import BoundingBox from "./bounding_box";

export default class Entity {
  constructor(boundingBox) {
    if (!(boundingBox instanceof BoundingBox)) {
      throw new Error("Not a BoundingBox");
    }
    this.boundingBox = boundingBox;
  }

  onClick(event) {

  }

  onMouseMove(event) {

  }

  drawBounds(ctx) {
    this.boundingBox.draw(ctx);
  }
}