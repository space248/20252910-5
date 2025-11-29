function setup() {
  createCanvas(600, 400);
  pixelDensity(1);
  background(21, 255, 47);
  
}
function draw(){
  fill(255,255,0);
  stroke(2);
  strokeWeight(2);
  arc(200,200,200,200,radians(50),radians(315));
  
  fill(1);
  stroke(0);
  strokeWeight(3);
  circle(180,140,18);
  
  fill(210, 160, 80);
  stroke(139, 69, 19);
  strokeWeight(1);
  ellipse(410,200,180,100);
  
  fill(250, 235, 200);
  stroke(240, 210, 180);
  strokeWeight(1);
  rect(367,175,15,50);
  
  fill(250, 235, 200);
  stroke(240, 210, 180);
  strokeWeight(1);
  rect(402,175,15,50);
  
  fill(250, 235, 200);
  stroke(240, 210, 180);
  strokeWeight(0.8);
  rect(437,175,15,50);
  
  fill(0);
  stroke(0);
  strokeWeight(6);
  line(347,250,485,250);
  
  fill(255,0,0);
  noStroke();
  rect(470,260,120,120);
  
  fill(0,0,255);
  stroke(0);
  strokeWeight(3);
  triangle(400, 20, 370, 100, 420, 70);
  
  fill(128);
  stroke(0);
  strokeWeight(3);
  quad(1,4,17,72,84,56,112,142);
  
  noFill();
  ellipse(50,300,50,50);
  
  fill(255,255,0);
  stroke(255,255,0);
  strokeWeight(2);
  rect(500, 280, 60, 13);
  
  fill(255,255,0);
  stroke(255,255,0);
  strokeWeight(2);
  rect(490, 290, 13, 57);
  
  fill(255,255,0);
  stroke(255,255,0);
  strokeWeight(2);
  rect(522, 290, 13, 57);
  
  fill(255,255,0);
  stroke(255,255,0);
  strokeWeight(2);
  rect(554, 290, 13, 57);
 
}
