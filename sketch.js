let img;
let snowflakes = [];

function preload() {
  img = loadImage("assets/christmas_tree.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  const snowflakesTotal = Math.floor(window.innerWidth);
  for (i = 0; i < snowflakesTotal; i++) {
    snowflakes.push(new Snowflake());
  }
}

function draw() {
  background("brown");
  imageMode(CENTER);
  image(img, innerWidth / 2, innerHeight / 2, 400, 400);
  snowflakes.forEach((snow) => {
    snow.update();
    snow.draw();
  });
}

class Snowflake {
  constructor() {
    // Position where each snowflake is created
    this.pos = createVector(random(width), random(height));
    // Size of each snowflake
    this.size = random(2, 10);
    // Velocity of each snowflake
    this.vel = createVector(random(-0.4, 0.4), random(0, 2));
  }

  update() {
    this.pos.add(this.vel);
  }

  draw() {
    noStroke();
    fill("rgba(255,255,255,0.5)");
    circle(this.pos.x, this.pos.y, this.size);
  }
}
