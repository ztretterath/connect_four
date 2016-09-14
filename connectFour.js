$(function () {

  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('.board').append(tile);
    } //create tiles on board
  }
  gameTile(); //create 7*6 gameboard

  var winner = 0; //count up to four
  var checkWin = function(color, square, i) {
    var fourInRow = function() {
      if ($("#" + i).hasClass(color)) {
        winner += 1;
        if (winner === 4) {
          return true;
        }
      } else {
        winner = 0;
      } //end if statement
    } //end fourInRow

    // begin vertical win check
    var orignalMove = move;
    while (move > 7) {
      move -= 7;
    } //end while
    for (i = move; i < 43; i += 7) {
      if (fourInRow(color, square, i)) {
        return true;
      } //end if statement
    } //end for loop
  } //end checkWin



  var clicked = true;
  $('.gameTile').on('click', function() {
    var tileClicked = $(this).attr("id");
    var tileAboveId = $(this).attr("id") - 7;
    var tileAbove = $(this).parent().find("#" + tileAboveId);
    if (tileClicked >= 35 || $(this).hasClass("open")) {
      //check if tile is open or bottom row
      if (clicked === true) {
        clicked = false; //change player colors
        $(this).addClass('clickedRed');
        tileAbove.addClass("open");
        //tile above can be played in
        console.log('now red'); //test
      } else if (clicked === false) {
        clicked = true; //change player colors
        $(this).addClass('clickedBlue');
        tileAbove.addClass("open");
        //tile above can be played in
        console.log('now blue'); //test
      }
    } //adds colored game pieces/changes players

  });

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
