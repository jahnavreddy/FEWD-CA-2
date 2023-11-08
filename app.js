//reponsive buttons for mobile devices

document.addEventListener("keyup",changeDirection);
document.getElementById("arrowup").addEventListener("click",()=>{        changeDirectionFromButton("ArrowUp")
    velocityX=0
    velocityY=-1
})

document.getElementById("arrowdown").addEventListener("click",()=>{
    changeDirectionFromButton("ArrowDown")
    velocityX=0
    velocityY=1
})
document.getElementById("arrowleft").addEventListener("click",()=>{
    changeDirectionFromButton("ArrowLeft")
    velocityX=-1
    velocityY=0
})
document.getElementById("arrowright").addEventListener("click",()=>{
    changeDirectionFromButton("ArrowRight")
    velocityX=1
    velocityY=0
})


//initializing the variables//
     
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

//giving the background music//

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


    //placing the food //

    placeFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 100);
}
    //randomizing the food //

function placeFood() {
  foodX = Math.floor(Math.random() * columns) * blockSize;
  foodY = Math.floor(Math.random() * rows) * blockSize;
}

    //condition if gameover //

function update() {
    if (gameOver) {
        window.location.href = `./gameover.html`; //redirecting to
    }

    //making board for the game //
    context.fillStyle="black";
    context.fillRect(0, 0, snakeBoard.width, snakeBoard.height);

    //making the food in red
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    //if the snake eats its food , increasing the food //
    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
        score ++;
        console.log(score);
        localStorage.setItem("score", score);
    }

    for (let i = snakeBody.length-1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }    
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    //making the snake in green 

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;

    //conditions for game over
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
    // assigning functions for movemennt of snakea
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

function changeDirectionFromButton(direction){
    changeDirection(direction);
}
