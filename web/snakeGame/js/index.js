// Game Constants and Variables
let inputDir = {x: 0, y: 0};
const foodSound = new Audio('../music/food.mp3');
const gameOverSound = new Audio('../music/gameover.mp3');
const moveSound = new Audio('../music/move.mp3');
const musicSound = new Audio('../music/music.mp3');
let board = document.getElementById("board");
let scoreId = document.getElementById("score");
let highScoreBox = document.getElementById("hiScore");
let speed = 5;
let lastPaintTime = 0;
let score = 0;
let hiscoreval = 0;
let snakeArr = [
    {x: 13, y: 14}//Initial position of snake head;
];
let food = {x: 10, y: 12}

// Game Functions
function main(ctime){
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if((ctime - lastPaintTime)/1000 < 1/speed){ //It determines the refresh rate of the game.
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake){
    //1: If you bump into yourself
    for (let i = 1; i < snake.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y)
            return true;
    }

    //If you bump into the wall.
    if(snake[0].x > 18 || snake[0].x < 0 || snake[0].y > 18 || snake[0].y < 0){
        return true;
    }
}

function gameEngine(){
    //Part 1: Updating the snake (snake array) and food

    //If snake collide
    if(isCollide(snakeArr)){
        gameOverSound.play();
        musicSound.pause();
        inputDir = {x: 0, y: 0};
        alert("Game Over. Press any key to restart the game.");
        score = 0;
        scoreId.innerHTML = `Score: ${score}`;
        snakeArr = [
            {x: 13, y: 14}//Initial position of snake head;
        ];
        musicSound.play();
    }

    //If you have eaten the food, increment the score, regenerate the food and increase the length of snake;
    if(snakeArr[0].x == food.x && snakeArr[0].y == food.y){
        foodSound.play();
        score += 1;
        if(score > hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiScore", JSON.stringify(hiscoreval));
            highScoreBox.innerHTML = `High Score: ${hiscoreval}`;
        }
        scoreId.innerHTML = `Score: ${score}`;

        // unshift - Inserts new elements at the start of an array, and returns the new length of the array.
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});

        // Math.round(a + (b - a)*Math.random()) - formula to produce random numbers between a and b
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b - a)*Math.random()), y: Math.round(a + (b - a)*Math.random())}
    }

    //Moving the snake by 1 position
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //Part 2: Display the snake and food
    board.innerHTML = "";

    //2.1: Display the snake
    snakeArr.forEach((e, index)=>{
        let snakeElement = document.createElement('div');
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.style.gridRowStart = e.y;
        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snakeBody');
        }
        board.appendChild(snakeElement);
    });


    //2.2: Display the food
    let foodElement = document.createElement('div');
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

}











// Main logic starts here
let hiScore = localStorage.getItem("hiScore");
if(hiScore === null){
    hiscoreval = 0;
    localStorage.setItem("hiScore", JSON.stringify(hiscoreval));
}
else{
    hiscoreval = JSON.parse(hiScore);
    highScoreBox.innerHTML = `High Score: ${hiscoreval}`;
}

window.requestAnimationFrame(main);

window.addEventListener('keydown', e=>{
    inputDir = {x: 0, y: 1}; //Starts the engine
    moveSound.play();
    musicSound.play();

    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;

        default:
            break;

    }
})