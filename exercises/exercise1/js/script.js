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

// Image of the start
var starImage;
//The current position of the star image
var starImageX;
var starImageY;

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

// Loading image of the butterfly from the images folder located in exercise1
  bflyImage = loadImage("assets/images/bfly.png");

// Loading image of the star from images folder located in exercise1
  starImage = loadImage("assets/images/star.jpg");
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

// Star image is postioned in the center by calculating half the width and height of the canvas
  starImageX=width/2;
  starImageY=height/2;

  image(starImage, 0, 0, 100, 100);

  // Start of the forest image so that it is postitioned perfectly centered on the screen
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




// created variable to calculate the distance in X and Y
  var xDistance = mouseX - starImageX;
  var yDistance = mouseY - starImageY;
// cut the current x and y locations of the star image in half
  starImageX = starImageX + xDistance/50;
  starImageY = starImageY + yDistance/50;

  // Moving the forest image in frameCount so that it increases its y position
  forestImageY = frameCount;
  // Displaying the image of the forest so that it moves from left to right
  image(forestImage,forestImageY,forestImageX);

  // displaying butterfly image in draw mode
  image(bflyImage,mouseX, mouseY,100,100);

  //displaying the image of the star in draw mode
  image(starImage, starImageX, starImageY, 100, 100);

}
