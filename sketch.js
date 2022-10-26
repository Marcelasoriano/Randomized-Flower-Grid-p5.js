function setup() {
  createCanvas(600, 600);
  noLoop();
  strokeWeight(2);
  angleMode(DEGREES);
  frameRate(3);
}

function draw() {
  background(255);
  const columns = 5;
  const rows = 5;
  const cellWidth = width / columns;
  const cellHeight = height / rows;
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;
      
      drawFlower(x, y, min(cellWidth, cellHeight));
    }
  }
}
function drawFlower(x, y, size) {
  const flowerSize = random(size / 2, size / 2);
  const petalSize = flowerSize / 2;
  const spacing = petalSize / 2;
  push();  
  rotate(int(random(15)) * 120);
  fill(random(255), random(255), random(255));
  ellipse(x - spacing, y - spacing, petalSize);
  ellipse(x + spacing, y - spacing, petalSize);
  ellipse(x - spacing, y + spacing, petalSize);
  ellipse(x + spacing, y + spacing, petalSize);
  pop();
  
  push();
  fill(random(230), random(255), random(230));
  circle(x, y, petalSize);
  pop();
  loop();
}

