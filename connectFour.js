$(function () {
  var gameTile = function() {

    console.log("gameTile function");
    //test

    // for (var i = 1; i <= 36; i++) {
    //   var tile = $("<div class='gameTile'></div>");
    //   tile.attr('id', i); //for future methods
    //   $('.board').append(tile);
    // }

    for (var i = 1; i <= 36; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#a').append(tile);
    } //create tiles on board
    for (var i = 2; i <= 37; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#b').append(tile);
    }
    for (var i = 3; i <= 38; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#c').append(tile);
    }
    for (var i = 4; i <= 39; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#d').append(tile);
    }
    for (var i = 5; i <= 40; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#e').append(tile);
    }
    for (var i = 6; i <= 41; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#f').append(tile);
    }
    for (var i = 7; i <= 42; i+=7) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('#f').append(tile);
    }
  }
  gameTile(); //create 7*6 gameboard

  var move = "";//where player plays, changes when clicked

  var redMoveNum = 0;
  var blueMoveNum = 0; //wins can occur at 4 moves

  var clicked = true; //toggles T/F to change players

  var color = ""; //used for checkWin method - defined below

  var redWinner = 0;
  var blueWinner = 0;

  var fourInRow = function() {
    // console.log($('#' + move));
    // console.log("fourInRow function");

    if ($("#" + move).hasClass("clickedRed")) { //grab by #id
      redWinner += 1;
      console.log(redWinner);
      if (redWinner == 4) {
        return true;
      }
    } else if ($("#" + move).hasClass("clickedBlue")) {
      blueWinner += 1;
      console.log(blueWinner);
      if (blueWinner == 4) {
        return true;
      }
    } else {
      redWinner = 0;
      blueWinner = 0; //if interrupted by another player
    } //end if statement
  } //end fourInRow

  var fourInHoriz = function(color, move) {
    // console.log("fourInHoriz function Values: " + color + " " + move);

    winner = 0;
    for (var i = move; i < move + 7; i++) {
      console.log(move);
      //iterate w/ same function but add 1 not 7
      if (fourInRow()) {
        return true;
      }
    }
  }

  var leftTiles = [1, 8, 15, 22, 29, 36]; // for horizontal win check

  var inLeft = jQuery.inArray(move, leftTiles); //in furthest col?

  var originalMove = move; //move will change

  var checkWin = function(color, move) {
    // console.log("checkWin function Values: " + color + " " + move);

    while (move > 7) { //vertical win check
      move -= 7; //to access squares on top row
    } //end while
    for (var i = move; i < 43; i += 7) { //loop down
      if (fourInRow(color, move)) {
        return true;
      } //end if statement
    } //end for loop

    move = originalMove; //reset for horiz win check

    if (inLeft >= 0) { //arr position starts @ 0
      if (fourInHoriz(color, move)) {
        //can check for win if in left position
        return true;
      }
    } else {
      while (result = jQuery.inArray(move, leftTiles) == -1) {
        move--;
      } //end while
        if (result = jQuery.inArray(move, leftTiles) !== -1) {
          console.log(move);
          if (fourInHoriz(color, move)) {
            return true;
           }
         }
    } return false; //no wins detected

  } //end checkWin

  var red = 0;
  var blue = 0;
  var congratulate = function(color) {
    console.log("congratulate function. Values: " + color);
    //test
    if (color === 'clickedRed') {
      red++;
      $('.header').html("<h1 id='title'>RED WINS!</h1><p>reset for new game</p>");
      $("#redScore").attr("placeholder", red);
      $(".header").css("background", "red");
    } else {
      blue++;
      $('.header').html("<h1 id='title'>BLUE WINS!</h1><p>reset for new game</p>")
      $("#blueScore").attr("placeholder", blue);
      $(".header").css("background", "blue");
    }
  } //end congratulate

  $('.gameTile').on('click', function() {
    console.log(inLeft);

    //player can win after 6 moves
    var tileClicked = $(this).attr("id");
    var tileAboveId = $(this).attr("id") - 7;
    var tileAbove = $(this).parent().find("#" + tileAboveId);
    if (tileClicked >= 35 || $(this).hasClass("open")) {
      //check if tile is open or bottom row
      if (clicked === true) {
        clicked = false; //change player colors
        redMoveNum += 1;
        $(this).addClass('clickedRed');
        color = 'clickedRed';
        move = $(this).attr("id");
        tileAbove.addClass("open");
        //tile above can be played in
        console.log('now red' + " " + move); //test
      } else if (clicked === false) {
        clicked = true; //change player colors
        blueMoveNum += 1;
        $(this).addClass('clickedBlue');
        color = 'clickedBlue';
        move = $(this).attr("id");
        tileAbove.addClass("open");
        //tile above can be played in
        console.log('now blue' + " " + move); //test
      }
    } //adds colored game pieces/changes players

    if (redMoveNum == 4 || blueMoveNum == 4) {
      var result = checkWin(color, move)
      console.log(result);
      if (result == true) {
        congratulate(color);
      }
    } //if true, game ends
  }); //end click method

//RESET & DIRECTIONS
  $('#reset').on('click', function() {
    redWinner = 0;
    blueWinner = 0;
    redMoveNum = 0;
    blueMoveNum = 0;
    clicked = true;
    $(".header").css("background", "rgba(70, 83, 87, 0.90)");
    $('.gameTile').removeClass('clickedRed clickedBlue');
    $('.header').html("<h1 id='title'>Connect Four</h1><p>the official game of indoor recess</p>");
  }) //reset button

  var directions = false;
  $('#directions').on('click', function() {
    if (directions === false) {
      $('.header').html("<ul class='dir'><li>1: Red player has first move</li><br><li>2: Click empty space to drop a game piece</li><br><li>3: Hit 'reset' for a new game</li></ul>");
      //display directions in header
      directions = true;
    } else if (directions === true) {
      $('.header').html("<h1 id='title'>Connect Four</h1><p>the official game of indoor recess</p>");
      //if clicked again, hide directions
      directions = false;
    }
  }); //end directions

}); //end onload
