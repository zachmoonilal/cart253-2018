/*********************************************************

Exercise 2 - The Artful Dodger
Zachary Moonilal
Pippin Barr
Starter code for exercise 2.

*********************************************************/

// The position and size of our avatar circle
var avatarX;
var avatarY;
var avatarSize = 50;

// The speed and velocity of our avatar circle
var avatarSpeed = 10;
var avatarVX = 0;
var avatarVY = 0;

// The position and size of the enemy circle
var enemyX;
var enemyY;
var enemySize = 50;
// How much bigger the enemy circle gets with each successful dodge
var enemySizeIncrease = 5;

// The speed and velocity of our enemy circle
var enemySpeed = 5;
var enemyVX = 5;
// How much bigger the enemy circle gets with each successful dodge
var enemySpeedIncrease = 0.5;

// How many dodges the player has made
var dodges = 0;

//Adding the player image
var playerImage
var playerSizeH = 75;
var playerSizeW = 75;

var playerImageSize = 75

//Adding the enemy image
var enemyImage
var enemySizeH = 75
var enemySizeW = 75


//Adding the background image
var level
// inserting

// setup()
//
// Make the canvas, position the avatar and anemy

function preload() {

  playerImage = loadImage("assets/images/pacman.png");
  enemyImage = loadImage("assets/images/ghost.png");
  level = loadImage("assets/images/stage.png");

}

function setup() {
  // Create our playing area
  createCanvas(500,500);

  // Put the avatar in the centre
  avatarX = width/2;
  avatarY = height/2;

  // Put the enemy to the left at a random y coordinate within the canvas
  enemyX = 0;
  enemyY = random(0,height);

  // No stroke so it looks cleaner
  noStroke();


}

// draw()
//
// Handle moving the avatar and enemy and checking for dodges and
// game over situations.
function draw() {

  // Replacing pink background with "level" background
  background(level);

  // Default the avatar's velocity to 0 in case no key is pressed this frame
  avatarVX = 0;
  avatarVY = 0;

  // Check which keys are down and set the avatar's velocity based on its
  // speed appropriately

  // Left and right
  if (keyIsDown(LEFT_ARROW)) {
    avatarVX = -avatarSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    avatarVX = avatarSpeed;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    avatarVY = -avatarSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    avatarVY = avatarSpeed;
  }

  // Move the avatar according to its calculated velocity
  avatarX = avatarX + avatarVX;
  avatarY = avatarY + avatarVY;

  // The enemy always moves at enemySpeed (which increases)
  enemyVX = enemySpeed;
  // Update the enemy's position based on its velocity
  enemyX = enemyX + enemyVX;

// added an "if" statement which randomly spawns ellipses according to the keys pressed
  if (keyIsDown(LEFT_ARROW)) {
    fill(255);
    ellipse(random(width), random(height), 15,15);
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    fill(255);
    ellipse(random(width), random(height), 30,30);
  }
  else if (keyIsPressed) {
    fill (255);
    ellipse(random(width), random(height), 10,10);
  }

  // Check if the enemy and avatar overlap - if they do the player loses
  // We do this by checking if the distance between the centre of the enemy
  // and the centre of the avatar is less that their combined radii
  if (dist(enemyX,enemyY,avatarX,avatarY) < enemySize/2 + avatarSize/2) {
    // Tell the player they lost
    console.log("YOU LOSE!");
    // Reset the enemy's position
    enemyX = 0;
    enemyY = random(0,height);
    // Reset the enemy's size and speed
    enemySize = 50;
    enemySpeed = 5;
    // Reset the avatar's position
    avatarX = width/2;
    avatarY = height/2;

    // reseting the player's speed and size
    avatarSpeed = 10;
    avatarSize = 50;
    dodges = 0;
  }

  // Check if the avatar has gone off the screen (cheating!)
  if (avatarX < 0 || avatarX > width || avatarY < 0 || avatarY > height) {
    // If they went off the screen they lose in the same way as above.
    console.log("YOU LOSE!");
    enemyX = 0;
    enemyY = random(0,height);
    enemySize = 50;
    enemySpeed = 5;
    avatarX = width/2;
    avatarY = height/2;

// if player goes off the screen, avatar speed and size will reset
    avatarSpeed = 10;
    avatarSize = 50;
    dodges = 0;
  }

  // Check if the enemy has moved all the way across the screen
  if (enemyX > width) {
    // This means the player dodged so update its dodge statistic
    dodges = dodges + 1;
    // Tell them how many dodges they have made
    console.log(dodges + " DODGES!");
    // Reset the enemy's position to the left at a random height
    enemyX = 0;
    enemyY = random(0,height);
    // Increase the enemy's speed and size to make the game harder
    enemySpeed = enemySpeed + enemySpeedIncrease;
    enemySize = enemySize + enemySizeIncrease;

    // added the speed and size of the avatar
    //speed and size will have random values
    avatarSpeed = avatarSpeed + random(0.5 , 25);
    avatarSize = avatarSize + random(50 , 150);
  }



  // Display the current number of successful in the console
  console.log(dodges);

  // The player is black
  //fill(0);
  // Draw the player as a circle
  //ellipse(avatarX,avatarY,avatarSize,avatarSize);

 // replaced the "player" ellipse with pacman image
  image(playerImage, avatarX, avatarY,avatarSize,avatarSize);

  // The enemy is red
  //fill(255,0,0);
  // Draw the enemy as a circle
  //ellipse(enemyX,enemyY,enemySize,enemySize);

  // replaced "enemy" ellipse with ghost image
  image(enemyImage, enemyX, enemyY,enemySizeH,enemySizeW);


  //added text
    fill(255);
    textSize(15);
    textAlign(CENTER);
    text("Ghosts dodged:", 400, 470);
  // adding the font which will display the number of successful dodges
    fill(0,0,255);
    textFont('Impact');
    textSize(30);
    textAlign(CENTER);
    text(dodges, 475,475);
}
