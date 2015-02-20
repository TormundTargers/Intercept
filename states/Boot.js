//Main game object
var Intercept = {};

// Global variables
var inputDirection1 = null;             // Stores the direction players are to move next
var inputDirection2 = null;
var speed = 4;                          // This is the number of pixels the player1 will move each frame
var start = false;                      // If the game has started or not
var gameEnded = false;                  // Is the Game over?
var pauseLabel;

// Set up grid coordinates the game is played on.
var grid = new Array(xTiles);
for(var i=0;i<xTiles;i++){
    grid[i] = new Array(yTiles);
}

Intercept.Boot = function(game){
    //No local variables needed for Boot state
};

// Declare the boot State
Intercept.Boot.prototype = {
    preload: function(){
        //PreLoader assets should go here
    },

    create: function(){
        //Start the next state
        this.state.start('PreLoader');
    }
}