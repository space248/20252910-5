function setup() {
  let cnv = createCanvas(600, 600);
  background(0,250,0); 

  stroke(0);
  strokeWeight(2);
  fill(255, 200, 150);
  ellipse(300, 320, 290, 350);

  fill(1);
  arc(300,240,270,220,radians(180),0);
  fill(255,200,150);
  stroke(1);
  strokeWeight(4);
  triangle(300,200,320,240,280,238);
  stroke(255,200,150);
  strokeWeight(5);
  line(280,238,320,240);

  stroke(10);
  strokeWeight(5);
  fill(255);
  arc(240, 270, 80, 50, 0, PI);
  arc(360, 270, 80, 50, 0, PI);
  fill(1);
  ellipse(240, 275, 20, 20);
  ellipse(360, 275, 20, 20);

  stroke(0);
  strokeWeight(3);
  noFill();
  triangle(300,315,280,355,320,355);

  noFill();
  strokeWeight(4);
  arc(300, 400, 150, 80, 0, PI);
  strokeWeight(4);
  line(225,400,375,400);

  noFill();
  stroke(10);
  strokeWeight(6);
  ellipse(240, 270, 100, 100);
  ellipse(360, 270, 100, 100);
  line(295, 270, 305, 270);
  line(160,270,190,270);
  line(410,270,440,270);

  fill(255, 200, 150);
  stroke(1);
  strokeWeight(3);
  ellipse(160, 320, 40, 80);
  ellipse(440, 320, 40, 80);

  noLoop();

  
  let snap = get(); 
  let pg = createGraphics(600, 400);
  pg.pixelDensity(1);
  pg.background(0, 250, 0);


  let targetW = 400;
  let targetH = 400;
  let offsetX = (600 - targetW) / 2; 
  pg.image(snap, offsetX, 0, targetW, targetH);

  pg.save('20252910-2.png');
  pg.remove();
}

function draw() {}
