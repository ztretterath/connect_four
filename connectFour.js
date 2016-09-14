$(function () {

  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('.board').append(tile);
    }
  }
  gameTile(); //create tiles on board
  //create 7*6 gameboard

  // var checkLeft = function() {
  //   for (var i = 0; i < 42; i++) {
  //     tile = getElementById(i)
  //     if ()
  //   }
  // } //end checkLeft method

  var clicked = true;
  $('.gameTile').on('click', function() {
    var tileClicked = $(this).attr("id");
    var tileAboveId = $(this).attr("id") - 7;
    var tileAbove = $(this).parent().find("#" + tileAboveId);
    if (clicked === true) {
      clicked = false; //change player colors
      $(this).addClass('clickedRed');
      console.log('now red'); //test
    } else if (clicked === false) {
      clicked = true; //change player colors
      $(this).addClass('clickedBlue');
      console.log('now blue'); //test
    }
  }); //adds colored game pieces/changes players

//RESET & DIRECTIONS
  $('#reset').on('click', function() {
    $('.gameTile').removeClass('clickedRed clickedBlue');
  }) //reset button

  var directions = false;
  $('#directions').on('click', function() {
    if (directions === false) {
      $('.header').html("<h1 id='title'>Connect Four</h1><ul class='dir'><li>1: Red player has first move</li><li>2: Click empty space to drop a game piece</li><li>3: Hit 'reset' for a new game</li></ul>");
      //display directions in header
      directions = true;
    } else if (directions === true) {
      $('.header').html("<h1 id='title'>Connect Four</h1><p>the official game of indoor recess</p>");
      //if clicked again, hide directions
      directions = false;
    }
  }); //end directions

}); //end onload
