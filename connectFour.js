$(function () {
  var gameTile = function() {

    console.log("gameTile function");
    //test

    for (var i = 1; i < 43; i++) {
      var tile = $("<div class='gameTile'></div>");
      tile.attr('id', i); //for future methods
      $('.board').append(tile);
    }
    // for (var i = 1; i < 43; i++) {
    //   var tile = $("<div class='gameTile'></div>");
    //   for (var x = 1; x <= 7; x++) {
    //     tile.attr('x', x);
    //     for (var y = 1; y <=6; y++) {
    //       tile.attr('y', y);
    //     }
    //     $('.board').append(tile);
    //   }
    // }
  }
  gameTile(); //create 7*6 gameboard

  //to access for finding matched
  // store = {
  //   1:{1: ""},2:{1: ""},3:{1: ""},4:{1: ""},5:{1: ""},6:{1: ""},7:{1: ""},
  //   1:{2: ""},2:{2: ""},3:{2: ""},4:{2: ""},5:{2: ""},6:{2: ""},7:{2: ""},
  //   1:{3: ""},2:{3: ""},3:{3: ""},4:{3: ""},5:{3: ""},6:{3: ""},7:{3: ""},
  //   1:{4: ""},2:{4: ""},3:{4: ""},4:{4: ""},5:{4: ""},6:{4: ""},7:{4: ""},
  //   1:{5: ""},2:{5: ""},3:{5: ""},4:{5: ""},5:{5: ""},6:{5: ""},7:{5: ""},
  //   1:{6: ""},2:{6: ""},3:{6: ""},4:{6: ""},5:{6: ""},6:{6: ""},7:{6: ""}
  // }
  store = {
    1:{1: ""},2:{1: ""},3:{1: ""},4:{1: ""},5:{1: ""},6:{1: ""},7:{1: ""},
    1:{8: ""},2:{9: ""},3:{10: ""},4:{11: ""},5:{12: ""},6:{13: ""},7:{14: ""},
    1:{15: ""},2:{16: ""},3:{17: ""},4:{18: ""},5:{19: ""},6:{20: ""},7:{21: ""},
    1:{22: ""},2:{23: ""},3:{24: ""},4:{25: ""},5:{26: ""},6:{27: ""},7:{28: ""},
    1:{29: ""},2:{30: ""},3:{31: ""},4:{32: ""},5:{33: ""},6:{34: ""},7:{35: ""},
    1:{36: ""},2:{37: ""},3:{38: ""},4:{39: ""},5:{40: ""},6:{41: ""},7:{42: ""}
  }

  var move = "";//where player plays, changes when clicked

  var redMoveNum = 0;
  var blueMoveNum = 0; //wins can occur at 4 moves

  var clicked = true; //toggles T/F to change players

  var color = ""; //used for checkWin method - defined below

  var redWinner = 0;
  var blueWinner = 0;

  // var fourInRow = function() {
  //   // console.log($('#' + move));
  //   // console.log("fourInRow function");
  //
  //   if ($("#" + move).hasClass("clickedRed")) { //grab by #id
  //     redWinner += 1;
  //     console.log($("#" + move-1));
  //     console.log(redWinner);
  //     if (redWinner == 4) {
  //       return true;
  //     }
  //   } else if ($("#" + move).hasClass("clickedBlue")) {
  //     blueWinner += 1;
  //     console.log(blueWinner);
  //     if (blueWinner == 4) {
  //       return true;
  //     }
  //   } else {
  //     redWinner = 0;
  //     blueWinner = 0;
  //   } //end if statement
  // } //end fourInRow
  //
  // var fourInHoriz = function(color, move) {
  //   // console.log("fourInHoriz function Values: " + color + " " + move);
  //   for (var i = move; i < move + 7; i++) {
  //     //iterate w/ same function but add 1 not 7
  //     if (fourInRow()) {
  //       return true;
  //     }
  //   }
  // }

  // var leftTiles = [1, 8, 15, 22, 29, 36]; // for horizontal win check
  //
  // var inLeft = jQuery.inArray(move, leftTiles); //in furthest col?

  var originalMove = move; //move will change
  var checkWin = function(color, move) {
    console.log('checkWin running');
    //vertical

    if ($("#" + move).hasClass("clickedRed")) {
      while (move > 7) { //vertical win check
        move -= 7; //to access squares on top row
      }
      redWinner += 1;
      console.log(redWinner);
      if (redWinner == 4) {
        congratulate(color);
      }
    } else if ($("#" + move).hasClass("clickedBlue")) {
        blueWinner += 1;
        console.log(blueWinner);
        if (blueWinner == 4) {
          congratulate(color);
        }
    } else {
        redWinner = 0;
        blueWinner = 0;
    }
  // } //end vertical

    //horizontal
    // move = originalMove;
    // for (var i = move; i < 43; i -= 1) {
    //   if ($("#" + move).hasClass("clickedRed")) {
    //     redWinner += 1;
    //     console.log(redWinner);
    //     if (redWinner == 4) {
    //       congratulate(color);
    //     }
    //   } else if ($("#" + move).hasClass("clickedBlue")) {
    //     blueWinner += 1;
    //     console.log(blueWinner);
    //     if (blueWinner == 4) {
    //       congratulate(color);
    //     }
    //   } else {
    //     redWinner = 0;
    //     blueWinner = 0;
    //   } //end if statement
    // } //end horizontal
    return false;
  } //end checkWin

    // while (move > 7) { //vertical win check
    //   move -= 7; //to access squares on top row
    // } //end while
    // for (var i = move; i < 43; i += 7) { //loop down
    //   if (fourInRow(color, move)) {
    //     return true;
    //   } //end if statement
    // } //end for loop
    //
    // move = originalMove; //reset for horiz win check
    //
    // if (inLeft >= 0) { //arr position starts @ 0
    //   if (fourInHoriz(color, move)) {
    //     //can check for win if in left position
    //     return true;
    //   }
    // } else {
    //   while (result = jQuery.inArray(move, leftTiles) == -1) {
    //     move--;
    //   } //end while
    //     if (result = jQuery.inArray(move, leftTiles) !== -1) {
    //       console.log(move);
    //       if (fourInHoriz(color, move)) {
    //         return true;
    //        }
    //      }
    // } return false; //no wins detected

  // } //end checkWin

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
    var tileClicked = $(this).attr("id");
    var tileAboveId = $(this).attr("id") - 7;
    var tileAbove = $(this).parent().find("#" + tileAboveId);
    if (tileClicked >= 35 || $(this).hasClass("open")) {
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
      checkWin();
    //   var result = checkWin(color, move)
    //   console.log(result);
    //   if (result == true) {
    //     congratulate(color);
    //   }
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
