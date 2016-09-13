$(function () {
  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('.board').append(tile);
    }
  }
  gameTile();
  //create 7*6 gameboard

  var checkStraightRed = function() {
    for (var i = 0; i < 42; i + 7) {
      var inARow = 0;
      var gameTile = $('#i') //iterate ids
      if (gameTile.attr('class') === 'clickedRed') {
        inARow ++; //add up to 4
        if (inARow === 4) {
          console.log('you win!');
        } //end inARow if
      } //end class check if
    } //end for loop
  } //end checkStraightRed method

  //click for game pieces
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
