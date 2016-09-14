$(function () {

  var gameTile = function() {
    for (var i = 1; i < 43; i++) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('.board').append(tile);
    } //create tiles on board
  }
  gameTile(); //create 7*6 gameboard

  var congratulate = function(color) {
    if (color === 'clickedRed') {
      //congratulate
    } else {
      //congratulate blue
    }
  } //end congratulate

  var winner = 0; //count up to four
  var checkWin = function(color, move, i) {
    var fourInRow = function() {
      if ($("#" + i).hasClass(color)) { //grab by #id
        winner += 1;
        if (winner === 4) {
          return true;
        }
      } else {
        winner = 0; //if interrupter by another player
      } //end if statement
    } //end fourInRow

    // begin vertical win check
    var orignalMove = move;
    //where player placed game tile
    while (move > 7) {
      move -= 7; //to access squares on top row
    } //end while
    for (i = move; i < 43; i += 7) { //loop down
      if (fourInRow(color, move, i)) {
        return true;
      } //end if statement
    } //end for loop
    move = originalMove; //reset for horiz win check

    //begin horizontal win check
    leftTiles = [1, 8, 15, 22, 29, 36];
    inLeft = jQuery.inArray(move, leftTiles);
    //check is player's move on far left of board
    if (inLeft > -1) { //arr position starts @ 0
      if (fourInCol(color, move)) {
        //can check for win if in left position
        return true;
      }
    } else {
      while (result = jQuery.inArray(move, leftTiles) == -1) {
        move -= 1; //try again if not in leftest col
        if (result = jQuery.inArray(move, leftTiles) !== -1) { //try until found
          if (fourInCol(color, move)) {
            return true;
          }
        }
      }
    }
    var fourInCol = function(color, move) {
      winner = 0;
      for (var i = move; i < move + 7; i++) {
        //iterate w/ same function but add 1 not 7
        if (fourInRow()) {
          return true;
        }
      }
    }
    return false; //no wins detected
  } //end checkWin



  var clicked = true;
  var moveNum = 0
  $('.gameTile').on('click', function() {
    moveNum += 1; //increment move count
    if (moveNum > 6) {
      var result = checkWin()
    }
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
