
// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  const newRound = 10;
  const newCol = 10;
  for (let round = 0; round < newRound; round++) {
  const x = (round * 50) ;
  
for (let col = 0; col < newCol; col++) {

  const y = col * 50;
    
     context.strokeRect(x, y, 50, 500);
  }
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    this.row -= 1;
  }
  moveRight() {
    this.col += 1;
  }
  moveDown() {
    this.row += 1;
  }
  moveLeft() {
    this.col -= 1;
  }
}

const player = new Character(0, 0);

function drawPlayer(){
  const playerImg = new Image();
  playerImg.src = './images/character-down.png';
  playerImg.addEventListener('load', () => {
    context.drawImage(playerImg,player.col * 50, player.row * 50);
      
})}
console.log(player.col)

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  setRandomPosition(){
    this.col = Math.round(Math.random()* 10);
    this.row = Math.round(Math.random ()*  10);
    
  }
  
  
}


const precious = new Treasure(0, 0);
precious.setRandomPosition();



function drawTreasure(){
  const treasureImg = new Image();
treasureImg.src = './images/treasure.png';
treasureImg.addEventListener('load', () => {
  context.drawImage(
    treasureImg,
   
    precious.col  * 50,
    precious.row * 50,
    50,
    50

  );
     
})}

console.log(precious.col)
document.onkeydown = pressKey;
function pressKey(event) {
  event = event || window.event;
  if (event.keyCode == '38') {
    player.moveUp();
  } else if (event.keyCode == '40') {
    console.log('down');
    player.moveDown();
  } else if (event.keyCode == '37') {
    player.moveLeft();
  } else if (event.keyCode == '39') {
    player.moveRight();
  }
  drawEverything();
}

function drawEverything() {
  drawGrid();
  drawPlayer();
 drawTreasure();
 
}

drawEverything();

