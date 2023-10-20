import Ball from "./entities/Ball.mjs";
import Board from "./entities/Board.mjs";
import Player from "./entities/Player.mjs";

// Generating the canvas and the context
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');

// Creating the board
const board = new Board(canvas.width, canvas.clientHeight, "rgb(240, 240, 240)", context);

// Creating players
const leftPlayer = new Player("rgb(204, 54, 4)", 1, context);
const rightPlayer = new Player("rgb(204, 54, 4)", 2, context);
const ball = new Ball(20, "rgb(10, 40, 200)", context);
/**
 * Multiple "keyDown" and "keyUp" events must be handled simultaneously. 
 * Therefore, the posible pressed keys are stored in an object, keeping 
 * track of the state of the key and referencing it to the player.
 * 
 * Although we tried the following aproach, it seems like the controller is 
 * created before the instanciation of the players, thus the player references 
 * are empty and did NOT upload the Y position of the players. 
 * 
 * { pressed: false, function: rightPlayer.moveUp() }
 * 
 * https://medium.com/@dovern42/handling-multiple-key-presses-at-once-in-vanilla-javascript-for-game-controllers-6dcacae931b7   
 */
const controller = 
{
  "arrowup": { pressed: false, player: rightPlayer },
  "arrowdown": { pressed: false, player: rightPlayer },
  "w": { pressed: false, player: leftPlayer },
  "s": { pressed: false, player: leftPlayer }
}
 
/**
 * If a key is pressed and it is a player movement 
 * key, the controller is updated.
 */
document.addEventListener("keydown", (ev) => {
  switch(ev.key.toLowerCase()){
    // Player 1
    case "arrowup": { controller.arrowup.pressed = true; };break;
    case "arrowdown": { controller.arrowdown.pressed = true; };break;
    // Player 2
    case "w": { controller.w.pressed = true; };break;
    case "s": { controller.s.pressed = true; };break;
  }
});

/**
 * If a key stops being pressed and it is a player movement 
 * key, the controller is updated.
 */
document.addEventListener("keyup", (ev) => {
  switch(ev.key.toLowerCase()){
    // Player 1
    case "arrowup": { controller.arrowup.pressed = false; };break;
    case "arrowdown": { controller.arrowdown.pressed = false; };break;
    // Player 2
    case "w": { controller.w.pressed = false; };break;
    case "s": { controller.s.pressed = false; };break;
  }
});


function excecutePlayersMoves(){
  Object.keys(controller).forEach(key => {
    if(controller[key].pressed){      
      // If the player is still not touching the top of the container 
      if((key == "arrowup" || key == "w") && controller[key].player.getY() > 0)
        controller[key].player.moveUp();
      // If the player is still not touching the bottom of the container
      if((key == "arrowdown" || key == "s") && (controller[key].player.getY() + Player.height) < board.getHeight())
        controller[key].player.moveDown();
    }
  });
}

function animate(){
  // Update the data
  excecutePlayersMoves();
  // redraw
  board.draw();
  rightPlayer.draw();
  leftPlayer.draw();
  ball.draw();
  window.requestAnimationFrame(animate);
}

window.requestAnimationFrame(animate);



