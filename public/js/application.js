$(document).ready(function(){
  var player1 = new Player()
  $(document).on('keypress', function(event){
    if(event.which == 113){
      $('#player1_strip td.active').next().addClass("active").prev().removeClass('active');
      if($('#player1_strip td.active:last-child').hasClass('active')){
        console.log("winner is player 1");
        window.location = '/winner/1';
      };
    };
     if(event.which == 112){
      $('#player2_strip td.active').next().addClass("active").prev().removeClass('active');
      if($('#player2_strip td.active:last-child').hasClass('active')){
        console.log("winner is player 2");
        window.location = '/winner/2';
      };
    };
  });
});
