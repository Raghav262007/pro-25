class Paper {
  constructor() {
    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 0,
      density: 1.2,
    };
    this.body = Bodies.circle(200, 500, 70, options);
    this.radius = 70;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    fill("yellow");
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
  }
}
