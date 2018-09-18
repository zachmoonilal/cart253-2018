// Exercise 1 - Moving pictures
// Pippin Barr
//
// Starter code for exercise 1.
// It moves two pictures around on the canvas.
// One moves linearly down the screen.
// One moves toward the mouse cursor.


// The image of a clown face
var clownImage;
// The current position of the clown face
var clownImageX;
var clownImageY;

// The transparent image of "felt" that wipes down the canvas
var feltTextureImage;
// The current position of the transparent image of "felt"
var feltTextureImageX;
var feltTextureImageY;

// Image of the butterfly
var bflyImage;
// The current position of the butterfly image
var bflyImageX;
var bflyImageY;

// Creating a variable which adds the image of the "forest"
var forestImage;
// Current postion of the transparent image of "forest"
var forestImageX;
var forestImageY;
// preload()
//
// Load the two images we're using before the program starts

function preload() {
  clownImage = loadImage("assets/images/clown.png");
  feltTextureImage = loadImage("assets/images/black-felt-texture.png");


// Loading image of the forest that will be able to use in the function setup
  forestImage = loadImage("assets/images/forest.png");
// Loading image of the forest that will be able to use in the function setup
  bflyImage = loadImage('assets/images/bfly.png');
}

// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);

  // Start the clown image at the centre of the canvas
  clownImageX = width/2;
  clownImageY = height/2;

  // Start the felt image perfectly off screen above the canvas
  feltTextureImageX = width/2;
  feltTextureImageY = 0 - feltTextureImage.height/2;


  // Butterfly image is positioned in the centre by calculating half the width and height of the canvas
  bflyImageX=width/2;
  bflyImageY=height/2;

  image(bflyImage, 0, 0,100,100);

  // Start of the forest image by which the image of the forest is positioned
  forestImageX = width/2;
  forestImageY = 0 - forestImage.height/2;

  // We'll use imageMode CENTER for this script
  // This mode will allow the script to position the image in the center
 imageMode(CENTER);
}


// draw()
//
// Moves the felt image linearly
// Moves the clown face toward the current mouse location

function draw() {



  // Move the felt image down by increasing its y position
  feltTextureImageY += 1;
  // Display the felt image
  image(feltTextureImage,feltTextureImageX,feltTextureImageY);
  // Move the clown by moving it 1/10th of its current distance from the mouse
  // Calculate the distance in X and in Y
  var xDistance = mouseX - clownImageX;
  var yDistance = mouseY - clownImageY;
  // Add 1/10th of the x and y distance to the clown's current (x,y) location
  clownImageX = clownImageX + xDistance/10;
  clownImageY = clownImageY + yDistance/10;
  // Display the clown image
  image(clownImage,clownImageX,clownImageY);



  forestImageY = frameCount;
  // Displaying the image of the forest so that it moves from left to right
  image(forestImage,forestImageY,forestImageX);

  // displaying the image of the butterfly and scaling the images height and width
  image(bflyImage,mouseX, mouseY,100,100);
}
