Intercept.PreLoader = function(game){
    //Local variables for PreLoader state
    this.ready = false;
};

//Declare the PreLoader state
Intercept.PreLoader.prototype = {
    preload: function(){
        //Load/make PreLoader screen assets
        //All other game assets
        game.load.image('player1', 'assets/img/blueBike1.png');
        game.load.image('player2', 'assets/img/redBike1.png');
        game.load.image('player3', 'assets/img/yellowBike1.png');
        game.load.image('player4', 'assets/img/greenBike1.png');
        game.load.image('background', 'assets/img/backgroundTile12.png');
    },

    create: function(){
        //Display loading bar for example.
    },

    update: function(){
        //Some sort of if statement to check if
        //everything is loaded should go here.
        this.state.start('Menu');
    }
};