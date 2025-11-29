function setup() {
  createCanvas(300, 200);
  frameRate(58);
  
}

function draw() {
  background(21, 255, 47);


  scale(0.5);

  let t = frameCount * 0.05; 

  let mouth = map(sin(t), -1, 1, 0, radians(45));

  let breadY = sin(t) * 10; 

  let c1 = color(0, 0, 255);
  let c2 = color(150, 0, 255);
  let tra = map(sin(t), -1, 1, 0, 1); 
  let changeColor = lerpColor(c1, c2, tra);
  
  let pulse = sin(t * 2) * 10;

  fill(255, 255, 0);
  stroke(0);
  strokeWeight(2);
 
  arc(200, 200, 200, 200, mouth, TWO_PI - mouth);
  
  
  fill(0);
  stroke(0);
  strokeWeight(3);
  circle(180, 140, 18);
  
  fill(210, 160, 80);
  stroke(139, 69, 19);
  strokeWeight(1);
  ellipse(410, 200 + breadY, 180, 100);
  
  fill(250, 235, 200);
  stroke(240, 210, 180);
  strokeWeight(1);
  rect(367, 175 + breadY, 15, 50);
  rect(402, 175 + breadY, 15, 50);
  strokeWeight(0.8);
  rect(437, 175 + breadY, 15, 50);
  
  
  fill(0);
  stroke(0);
  strokeWeight(6);
  line(347, 250 + breadY, 485, 250 + breadY);
  
  
  fill(255, 0, 0);
  noStroke();
  rect(470, 260, 120, 120); 
  
 
  fill(255, 255, 0);
  stroke(255, 255, 0);
  strokeWeight(2);
  rect(500, 280, 60, 13);
  rect(490, 290, 13, 57);
  rect(522, 290, 13, 57);
  rect(554, 290, 13, 57);
  
  fill(changeColor); 
  stroke(0);
  strokeWeight(3);
  triangle(400, 20, 370, 100, 420, 70);
  
  fill(128);
  stroke(0);
  strokeWeight(3);
  quad(1, 4, 17, 72, 84, 56, 112, 142);
  
  noFill();
  stroke(0); 
 
  ellipse(50, 300, 50 + pulse, 50 + pulse);
}
