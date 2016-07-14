function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  stroke(255,127,80);
  fill(40,70,100);
  if (mouseIsPressed) {
    fill(153,51,255);
  }
  if (keyIsPressed) {
    fill(0,204,102);
  }
  ellipse(mouseX,mouseY,80,80);
}
