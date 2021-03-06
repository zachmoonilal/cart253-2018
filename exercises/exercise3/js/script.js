/******************************************************************************
Where's Sausage Dog?
by Pippin Barr

Student: Zachary Moonilal

An algorithmic version of a Where's Wally searching game where you
need to click on the sausage dog you're searching for in amongst all
the visual noise of other animals.

Animal images from:
https://creativenerds.co.uk/freebies/80-free-wildlife-icons-the-best-ever-animal-icon-set/
******************************************************************************/

// velocity and speed variables for random movement
var dogX;
var dogY;
var vx;
var vy;
var speedChange = 1;
var maxSpeed = 5;
var radius = 60;
// Position and image of the sausage dog we're searching for
var targetX;
var targetY;
var targetImage;

// The ten decoy images
var decoyImage1;
var decoyImage2;
var decoyImage3;
var decoyImage4;
var decoyImage5;
var decoyImage6;
var decoyImage7;
var decoyImage8;
var decoyImage9;
var decoyImage10;

// The number of decoys to show on the screen, randomly
// chosen from the decoy images
var numDecoys = 100;

// Keep track of whether they've won
var gameOver = false;

// preload()
//
// Loads the target and decoy images before the program starts
function preload() {
  targetImage = loadImage("assets/images/animals-target.png");

  decoyImage1 = loadImage("assets/images/animals-01.png");
  decoyImage2 = loadImage("assets/images/animals-02.png");
  decoyImage3 = loadImage("assets/images/animals-03.png");
  decoyImage4 = loadImage("assets/images/animals-04.png");
  decoyImage5 = loadImage("assets/images/animals-05.png");
  decoyImage6 = loadImage("assets/images/animals-06.png");
  decoyImage7 = loadImage("assets/images/animals-07.png");
  decoyImage8 = loadImage("assets/images/animals-08.png");
  decoyImage9 = loadImage("assets/images/animals-09.png");
  decoyImage10 = loadImage("assets/images/animals-10.png");
}

// setup()
//
// Creates the canvas, sets basic modes, draws correct number
// of decoys in random positions, then the target
function setup() {
  createCanvas(windowWidth,windowHeight);
  background("#ffff00");
  imageMode(CENTER);

  // Added a variable of decoys and randomized the amount by increasing how many spawn
  var numDecoys = random(500,1500);

// Use a for loop to draw as many decoys as we need
  for (var i = 0; i < numDecoys; i++) {

// Added variable to create size of decoys
    var aSize = 150;
// Added variable to randomize the scaling of decoys
    var aSizeScale = aSize*random(.5,2.0);

    // Choose a random location for this decoy
    var x = random(0,width);
    var y = random(0,height);
    // Generate a random number we can use for probability
    var r = random();
    // Use the random number to display one of the ten decoy
    // images, each with a 10% chance of being shown
    // We'll talk more about this nice quality of random soon enough

    // Added the aSizeScale as part of each statement in for animals to randomize in size

    if (r < 0.1) {
      image(decoyImage1,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.2) {
      image(decoyImage2,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.3) {
      image(decoyImage3,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.4) {
      image(decoyImage4,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.5) {
      image(decoyImage5,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.6) {
      image(decoyImage6,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.7) {
      image(decoyImage7,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.8) {
      image(decoyImage8,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 0.9) {
      image(decoyImage9,x,y, aSizeScale, aSizeScale);
    }
    else if (r < 1.0) {
      image(decoyImage10,x,y, aSizeScale, aSizeScale);
    }
  }

  // Once we've displayed all decoys, we choose a location for the target
  targetX = random(0,width);
  targetY = random(0,height);
  // And draw it (this means it will always be on top)
  image(targetImage,targetX,targetY);


  //Displaying the target in the top right corner

  fill(255,220,0);
  rect(windowWidth - 270, 10, 240, 230);
  image(targetImage, windowWidth - 140,180);

// Displaying "find me" message

  textFont("impact");
  textSize(30);
  fill(0);
  text("WANTED", windowWidth - 195, 60);

  textFont("impact");
  textSize(15);
  fill(0);
  text("Reward: $$$ (not really though)", windowWidth - 240,100);

  // Creating the dog and target connection
  dogX = targetX;
  dogY = targetY;
  // Creating the velocity and speed connections
  vx = 0;
  vy = 0;
}

function draw() {

  // Preventing the target from ever appearing underneath the "find me" sign
  while (targetX > windowWidth - 270 && targetY < 220) {
    console.log("OVERLAP");
    targetX = random(0,width);
    targetY = random(0,height);

    //Repeating the display of the sign in the top right corner
    fill(255,220,0);
    rect(windowWidth - 270, 10, 240, 230);
    image(targetImage, windowWidth - 140,180);
    //Repeating the "find me" sign
    textFont("impact");
    textSize(30);
    fill(0);
    text("WANTED", windowWidth - 195, 60);

    textFont("impact");
    textSize(15);
    fill(0);
    text("Reward: $$$ (not really though)", windowWidth - 240,100);
}

  if (gameOver) {
    // Prepare our typography
    textFont("Helvetica");
    textSize(128);
    textAlign(CENTER,CENTER);
    noStroke();
    fill(random(255));
    // Tell them they won!
    text("YOU WINNED :D",width/2,height/2);

    noFill();
    stroke(random(255));
    strokeWeight(10);
    ellipse(targetX,targetY,targetImage.width,targetImage.height);

    //defining the random speed at which the dog will follow
    vx += random(-speedChange, speedChange);
    vy += random(-speedChange, speedChange);

    dogX += vx;
    dogY += vy;

    image( targetImage,dogX, dogY, radius * 2) ;

    //Wrapping the dog so that it is contained within boundaries of the screen
    //To ensure it does not continue off screen for good
    if (dogX + radius < 0) {
      dogX += width;
    }
    else if (dogX - radius > width) {
      dogX -= width;
    }

    if (dogY + radius < 0) {
      dogY += height;
    }
    else if (dogY - radius > height) {
      dogY -= height;
}


  }
}

// mousePressed()
//
// Checks if the player clicked on the target and if so tells them they won
function mousePressed() {
  // Check if the mouse is in the x range of the target
  if (mouseX > targetX - targetImage.width/2 && mouseX < targetX + targetImage.width/2) {
    // Check if the mouse is also in the y range of the target
    if (mouseY > targetY - targetImage.height/2 && mouseY < targetY + targetImage.height/2) {
      gameOver = true;
    }
  }
}
