function setup() {
  windowSize = min(windowWidth * 0.9, windowHeight * 0.9);
  createCanvas(windowSize, windowSize);
}

function draw() {
  background(20);

  for (n = height * 0.5; n < height; n += height / 50) {
    stroke(220);
    strokeWeight(2);
    fill(20);
    beginShape();
    curveVertex(0, n);
    for (i = 0; i < width; i += width / 50) {
      let d = dist(i, n, width / 2, n);
      curveVertex(i, n - noise(n / 2 + i * 0.003) * (width / 2 - d));
    }
    curveVertex(width, n);
    curveVertex(width, n);
    endShape();
  }
}
