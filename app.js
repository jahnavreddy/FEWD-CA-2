var blockSize = 25;
var rows = 20;
var columns = 20;
var snakeBoard;
var context;
var snakeX = blockSize * 5;
var snakeY = blockSize * 5;
var velocityX = 0;
var velocityY = 0;
var snakeBody = [];
var foodX;
var foodY;  
var gameOver = false;
var score = 0;

let bgmMusic = new Audio("assets/stranger-things-124008.mp3");
bgmMusic.play();
loop = true;

// let bgmMusic = new Audio("assets/sammohanuda.mp3.mp3");
// bgmMusic.play();
// loop = true;

window.onload = function() {
    snakeBoard = document.getElementById("snakeboard");
    snakeBoard.height = rows * blockSize;
    snakeBoard.width = columns * blockSize;
    context = snakeBoard.getContext("2d"); 

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 100);
}

function placeFood() {
  foodX = Math.floor(Math.random() * columns) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

function update() {
    if (gameOver) {
        window.location.href = `./gameover.html`;
    }

    context.fillStyle="black";
    context.fillRect(0, 0, snakeBoard.width, snakeBoard.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        score += 1;
        console.log(score);
        localStorage.setItem("score", score);
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }    
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeX > columns*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        window.location.href = "./gameover.html";
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            window.location.href = "./gameover.html";
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

function placeFood() {
    foodX = Math.floor(Math.random() * columns) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}



var touchStartX;
var touchStartY;

window.addEventListener("touchstart", function(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchmove", function(e) {
  var touchX = e.touches[0].clientX;
  var touchY = e.touches[0].clientY;

  if (touchX > touchStartX) {
    velocityX = 1;
    velocityY = 0;
  } else if (touchX < touchStartX) {
    velocityX = -1;
    velocityY = 0;
  } else if (touchY > touchStartY) {
    velocityX = 0;
    velocityY = 1;
  } else if (touchY < touchStartY) {
    velocityX = 0;
    velocityY = -1;
  }
});