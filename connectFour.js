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

  // var checkRow = function() {
  //   for (var i = 0; i < 42; i++) {
  //     var redCount = 0;
  //     var checkId = $(this).attr('id');
  //     if (this.class() === 'clickedRed') {
  //
  //     }
  //   }
  // } //end checkRow method

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
  }) //reset button

  var directions = false;
  $('#directions').on('hover', function() {
    if (clicked === false) {
      clicked = true;
      $('.header').html("<h1 id='title'>Connect Four</h1><ul><li>Red player has first move</li><li>Click empty space to drop a game piece</li><li>Hit 'reset' for a new game</li></ul>");
    } else if (clicked === true) {
      clicked = false;
      $('.header').html("<h1 id='title'>Connect Four</h1><p>the official game of indoor recess</p>");
    }
  })


}) //end onload
