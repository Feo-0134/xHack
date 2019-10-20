PImage img;
  
StringList imglist;
int num =10;
Tshirt  Tshirt1= new Tshirt(200,50);
Tshirt  Tshirt2= new Tshirt(700,50);
Tshirt  Tshirt3= new Tshirt(200,500);
Tshirt  Tshirt4= new Tshirt(700,500);
Tshirt  Tshirt5= new Tshirt(1200,50);
Tshirt  Tshirt6= new Tshirt(1200,500);

int R,G,B;
int RGBArray[ ][ ]={{16,109,156},{90,146,173},{187,168,162},{8,186,255},{123,139,111},{61,89,171},{128,42,42}};

int state = 0;

void setup() {
  size(1600,1000);
  background(224,229,223);
  imageMode(CENTER);
  imglist = new StringList();
  for (int i = 1 ; i< num+1 ; i++) {
    imglist.append(i+".jpg");
    //println(imglist);
  }
}

void draw() { 
  if(state == 0){
  int A=int(random(0,7));
  Tshirt1.drawTshirt(RGBArray[A][0],RGBArray[A][1],RGBArray[A][2]);
  Tshirt2.drawTshirt(RGBArray[A][0],RGBArray[A][1],RGBArray[A][2]);
  Tshirt3.drawTshirt(RGBArray[A][0],RGBArray[A][1],RGBArray[A][2]);
  Tshirt4.drawTshirt(RGBArray[A][0],RGBArray[A][1],RGBArray[A][2]);
  Tshirt5.drawTshirt(RGBArray[A][0],RGBArray[A][1],RGBArray[A][2]);
  Tshirt6.drawTshirt(RGBArray[A][0],RGBArray[A][1],RGBArray[A][2]);
  //float rA1=random(100, 255);float rG1=random(100, 255);float rB1=random(100, 255);
  //Tshirt1.drawTshirt(int(rA1),int(rG1),int(rB1));
  //float rA2=random(100, 255);float rG2=random(100, 255);float rB2=random(100, 255);
  //Tshirt2.drawTshirt(int(rA2),int(rG2),int(rB2));
  Tshirt1.inputimg(imglist.get(int(random(0,imglist.size()))));
  Tshirt2.inputimg(imglist.get(int(random(0,imglist.size()))));
  Tshirt3.inputimg(imglist.get(int(random(0,imglist.size()))));
  Tshirt4.inputimg(imglist.get(int(random(0,imglist.size()))));
  Tshirt5.inputimg(imglist.get(int(random(0,imglist.size()))));
  Tshirt6.inputimg(imglist.get(int(random(0,imglist.size()))));
  }
  //clear();
  delay(50);
  //  if (keyPressed) {
  //  if (key == 's') {
  //    noLoop();
  //  }
  //}
  //background(224,229,223);
}



class Tshirt{
  float sleeve ;
  float cloth_width;
  float cloth_length;
  float startX ;
  float startY ;

  float lis_sleeve_y ;
  float lis_sleeve_x ;

  Tshirt(float xpos ,float ypos){
    startX=xpos;
    startY=ypos;
  }

  void drawTshirt(int r,int g,int b){
    R=r;G=g;B=b;
    sleeve =150;
    cloth_width=250;
    cloth_length=400;

    lis_sleeve_y = sleeve*sin(HALF_PI/2);
    lis_sleeve_x = sleeve*sin(HALF_PI/2);
    fill(r,g,b);
    strokeWeight(0);
    stroke(r,g,b);
    beginShape();
    vertex(startX,startY);vertex(startX-lis_sleeve_x,startY +lis_sleeve_y);
    vertex(startX-lis_sleeve_x,startY +lis_sleeve_y);vertex(startX-lis_sleeve_x+sleeve*0.25,startY +lis_sleeve_y+cloth_length*0.2);
    vertex(startX-lis_sleeve_x+sleeve*0.25,startY +lis_sleeve_y+cloth_length*0.2);vertex(startX,startY+lis_sleeve_y+cloth_length*0.1);
    vertex(startX,startY+lis_sleeve_y+cloth_length*0.1);vertex(startX,startY+cloth_length);
    vertex(startX ,startY+cloth_length );vertex(startX+cloth_width ,startY+cloth_length );
    vertex(startX+cloth_width ,startY+cloth_length );vertex(startX+cloth_width ,startY+lis_sleeve_y+cloth_length*0.1 );
    vertex(startX+cloth_width , startY+lis_sleeve_y+cloth_length*0.1);vertex(startX+cloth_width+lis_sleeve_x-sleeve*0.25 ,startY +lis_sleeve_y+cloth_length*0.2 );
    vertex(startX+cloth_width+lis_sleeve_x-sleeve*0.25 ,startY +lis_sleeve_y+cloth_length*0.2 );vertex(startX+lis_sleeve_x+cloth_width ,startY+lis_sleeve_x );
    vertex(startX+lis_sleeve_x+cloth_width ,startY+lis_sleeve_x );vertex( startX+cloth_width,startY );
    vertex( startX+cloth_width,startY );vertex(startX,startY);
    endShape();

    fill(224,229,223);
    stroke(255);
    circle(startX+cloth_width/2,startY,cloth_width/3);



  }

  void inputimg(String name){
    clip(startX+cloth_width/2,startY+cloth_length/2,cloth_width,cloth_length);
    
    img = loadImage(name);
    tint(randomRPG(),randomRPG(),randomRPG());
    image(img, random(startX,startX+cloth_width), random(startY+cloth_length/3,startY+cloth_length));
    
    img = loadImage("xdlog.png");
    //tint(randomRPG(),randomRPG(),randomRPG());
    tint(255,230);
    image(img, random(startX+20,startX+cloth_width/1.5), random(startY+cloth_length/3,startY+cloth_length),300,300);
    
    img = loadImage("INIT.png");
    //tint(255,120);
    //tint(randomRPG(),randomRPG(),randomRPG());
    image(img, random(startX+20,startX+cloth_width-30), random(startY+cloth_length/3,startY+cloth_length));
    
    img = loadImage("XD.png");
    tint(randomRPG(),randomRPG(),randomRPG());
    image(img, random(startX,startX+cloth_width), random(startY+cloth_length/3,startY+cloth_length));
    
    
    //textSize(80);
    //fill(int(random(180,255)));
    //text("INIT", random(startX,startX+cloth_width-80), random(startY+cloth_length/3,startY+cloth_length-20));
    
    noClip();
    fill(224,229,223);
    stroke(224,229,223);
    strokeWeight(0);
    circle(startX+cloth_width/2,startY,cloth_width/3);
    
    fill(224,229,223);
    stroke(224,229,223);
    strokeWeight(0);
    rect(startX-10,startY-30,cloth_width+20,35);
    
    fill(0);
    textSize(30);
    text("Code:"+str(R)+str(G)+str(B),startX-20, startY);
  }
}


int randomRPG(){
  int val=int(random(0,255));
  return val;
}

void keyPressed() {
  if (key == 'm') {
    
    saveFrame("Style-######.png");
    state=1;
  } else {
    state=0;
  }
}
