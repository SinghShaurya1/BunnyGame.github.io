var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rabbit, rabbitImg
let rabbitEating, rabbitEatingImg

var wall1, wall2, wall3, wall4, wallImg, wall2Img

let frame, frameImg

var foodImg, food;

let backgroundImg, background1;

var score = 0;
var gameOverImg, gameOver
var jumpSound, checkPointSound, dieSound

function preload() {
  snakeImg = loadImage('rabbit.png')
  foodImg = loadImage('carrot.png')
  rabbitEatingImg = loadImage('rabbitEating.png')
  wallImg = loadImage('wall.png')
  frameImg = loadImage('frame.png')
  gameOverImg = loadImage('dead.jpg')
  wall2Img = loadImage('rotatedWall.png')
}

function setup() {
  createCanvas(1000, 1000);

  rabbit = createSprite(500, 500)
  rabbit.addImage(snakeImg)
  rabbit.scale = 0.3
  rabbit.debug = true
  rabbit.setCollider('rectangle', 0, 0 ,350, 350)
  rabbit.velocityX = 0
  rabbit.velocityY = 0

  food = createSprite(300, 400)
  food.addImage(foodImg)
  food.scale = .09

  wall1 = createSprite(500, 1120)
  wall1.addImage(wallImg)
  wall1.scale = 5
  wall1.setCollider('rectangle', 0, 0, 500, 50)


  wall2 = createSprite(500, -117)
  wall2.addImage(wallImg)
  wall2.scale = 5
  wall2.setCollider('rectangle', 0, 0, 500, 50)

  wall3 = createSprite(1115, 700)
  wall3.addImage(wall2Img)
  wall3.scale = 5
  wall3.setCollider('rectangle', 0, 0, 50, 500)

  wall4 = createSprite(-120, 700)
  wall4.addImage(wall2Img)
  wall4.scale = 5
  wall4.setCollider('rectangle', 0, 0, 50, 500)

  gameOver = createSprite(500, 500)
  gameOver.addImage(gameOverImg)
  gameOver.scale = 0.95
  gameOver.visible = false;

}

function draw() {
  background('black')

  rabbitControls()

  text('Score:' + score, 500, 500, 100, 100)

  if (rabbit.isTouching(food)) {
    food.position.x = random(30, 800);
    food.position.y = random(10, 900);
    score = score + 1
    increaseVelocity()
  }

  if (rabbit.isTouching(wall1) || rabbit.isTouching(wall2) || rabbit.isTouching(wall3) || rabbit.isTouching(wall4)) {
    console.log('you are touching the wall')
    end();
  }




  drawSprites()
}

function reset() {


}

function increaseVelocity() {
  rabbit.velocityX = rabbit.velocityX * .5
  rabbit.velocityY = rabbit.velocityY * .5
}

function rabbitControls() {
  if (keyIsDown(DOWN_ARROW)) {
    rabbit.velocityY = rabbit.velocityY + 0.1
  }

  if (keyIsDown(RIGHT_ARROW)) {
    rabbit.velocityX = rabbit.velocityX + 0.1
  }

  if (keyIsDown(LEFT_ARROW)) {
    rabbit.velocityX = rabbit.velocityX - 0.1
  }

  if (keyIsDown(UP_ARROW)) {
    rabbit.velocityY = rabbit.velocityY - 0.1
  }
}



function end() {
 gameOver.visible = true
}