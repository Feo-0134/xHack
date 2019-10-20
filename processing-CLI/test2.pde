 PImage img;
 
void setup() {
  size(1200 , 1200);
  imageMode(CENTER);
  img = loadImage("1.png");
}

void draw() {
  background(204);
  rect(10,30,140,40);
  clip(200, 200, 400, 400);
  image(img, 0, 0);
}
