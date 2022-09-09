import Circle from "./components/circle.js";
import EntityManager from "./lib/entity_manager";

export default class Engine {
  canvas = document.getElementById("canvas");

  constructor() {
    this.entityManager = new EntityManager(this.canvas);
    this.entityManager.push(new Circle(100, 100, 50, "red"));
    this._bindEvents();
  }

  _bindEvents() {
    ["click", "mousemove"].forEach((eventName) => {
      this.canvas.addEventListener(
        eventName,
        (e) => this.entityManager.handleInput(eventName, e));
    });
  }

  run() {
    this.entityManager.draw();
    this.entityManager.update();
    requestAnimationFrame(this.run.bind(this));
  }

}
