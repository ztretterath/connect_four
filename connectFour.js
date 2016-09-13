$(function () {
  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('index', i); //for future methods
      $('.board').append(tile);
    }
  }
  gameTile();
  //create 7*6 gameboard

  var clicked = true;

  $('.gameTile').on('click', function() {
    if (clicked === true) {
      clicked = false;
      $(this).addClass('clickedRed');

      console.log('now red');
        //test
    } else if (clicked === false) {
      clicked = true;
      $(this).addClass('clickedBlack');

      console.log('now black');
        //test
    }
  })


}) //end onload
