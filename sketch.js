let img;
function preload() {
  img = loadImage("assets/christmas_tree.png");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background("brown");
  imageMode(CENTER);
  image(img, innerWidth / 2, innerHeight / 2, 400, 400);
}
