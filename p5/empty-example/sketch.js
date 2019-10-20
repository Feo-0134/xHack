/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
let img; // Declare variable 'img'.
let img2;
let img3;
let img4;
let img5;

let d = 0;
function setup() {
  createCanvas(1600, 1000);
  img = loadImage('1.png'); // Load the image
  img2 = loadImage('2.png'); 
  img3 = loadImage('3.png'); 
  img4 = loadImage('4.png'); 
  img5 = loadImage('5.png'); 
  img6 = loadImage('6.png'); //img
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  if (d == 0) {
  image(img,0,0);
  }
    if (d == 1) {
  image(img2,0,0);
  }
    if (d == 2) {
  image(img3,0,0);
  }
    if (d == 3) {
  image(img3,0,0);
  }
      if (d == 4) {
  image(img4,0,0);
  }

    if (d == 5) {
  image(img5,0,0);
  }

  //// Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
}


function mousePressed() {
  d = d + 1;
}
