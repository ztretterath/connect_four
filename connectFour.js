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

  var checkRow = function() {
    for (var i = 0; i < 42; i++) {
      var redCount = 0;
      var checkId = $(this).attr('id');
      if (this.class() === 'clickedRed') {

      }
    }
  } //end checkRow method

  var clicked = true;
  $('.gameTile').on('click', function() {
    if (clicked === true) {
      clicked = false; //change player colors
      $(this).addClass('clickedRed');
      console.log('now red'); //test
    } else if (clicked === false) {
      clicked = true; //change player colors
      $(this).addClass('clickedBlack');
      console.log('now black'); //test
    }
  })

  $('#reset').on('click', function() {
    $('.gameTile').removeClass('clickedRed clickedBlack');
  })


}) //end onload
