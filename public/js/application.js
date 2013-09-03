function Player (name, location) {
  this.name = name;
  this.location = location;
}

Player.prototype.move = function() {
  this.location++;
};

Player.prototype.handle = function(player) {
  return $('#' + player + '_strip td.active');
};




function Game (player1, player2) {
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.render = function(player, playerString) {
  player.handle(playerString).next().addClass('active').prev().removeClass('active');
  // player.handle.prev().removeClass('active');
};

Game.prototype.updateStatus = function() {
  if (this.player1.location >= 21) {
    // alert("player1 wins");
    window.location = "/winner/1"
  }
  else if (this.player2.location >= 21) {
    // alert("player2 wins");
    window.location = "/winner/2"
  }
  
};

Game.prototype.onKeyUp = function(keycode) {
  if (keycode == 81) {
    this.player1.move();
    game.render(this.player1,'player1');
    game.updateStatus();  
    //update game status
  }
  else if (keycode == 80) {
    this.player2.move();
    game.render(this.player2, 'player2');
    game.updateStatus();  
    //
  };
};


$(document).ready(function(){

  player1 = new Player("jim",1, $('#player1_strip td.active'));
  player2 = new Player("anne",1, $('#player2_strip td.active'));

  game = new Game(player1, player2);

  $(document).on('keyup', function(event) {
    // console.log(event.which);
    game.onKeyUp(event.which);
  });

  // $(document).on('keypress', function(event){
  //   if(event.which == 113){
  //     $('#player1_strip td.active').next().addClass("active").prev().removeClass('active');
  //     if($('#player1_strip td.active:last-child').hasClass('active')){
  //       console.log("winner is player 1");
  //       window.location = '/winner/1';
  //     };
  //   };
  //    if(event.which == 112){
  //     $('#player2_strip td.active').next().addClass("active").prev().removeClass('active');
  //     if($('#player2_strip td.active:last-child').hasClass('active')){
  //       console.log("winner is player 2");
  //       window.location = '/winner/2';
  //     };
  //   };
  // });
});
