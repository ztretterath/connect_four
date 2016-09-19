$(function () {
  var gameTile = function() {
    var x = 0;
    var y = 1;
    for (var i = 1; i < 43; i++) {
      x++;
      if (x > 7) {
        x = 1;
        y++
      }
      var tile = $("<div class='gameTile'></div>");
      tile.attr('x', x);
      tile.attr('y', y);
      $('.board').append(tile);
    }
  }
  gameTile(); //create 7*6 gameboard

  //to access for finding matched
  var colorStore = {
    1:{1: ""},2:{1: ""},3:{1: ""},4:{1: ""},5:{1: ""},6:{1: ""},7:{1: ""},
    1:{2: ""},2:{2: ""},3:{2: ""},4:{2: ""},5:{2: ""},6:{2: ""},7:{2: ""},
    1:{3: ""},2:{3: ""},3:{3: ""},4:{3: ""},5:{3: ""},6:{3: ""},7:{3: ""},
    1:{4: ""},2:{4: ""},3:{4: ""},4:{4: ""},5:{4: ""},6:{4: ""},7:{4: ""},
    1:{5: ""},2:{5: ""},3:{5: ""},4:{5: ""},5:{5: ""},6:{5: ""},7:{5: ""},
    1:{6: ""},2:{6: ""},3:{6: ""},4:{6: ""},5:{6: ""},6:{6: ""},7:{6: ""}
  }

  var red = 0; //score board
  var blue = 0; //score board
  var move = "";//set to colorStore[x][y]
  var redMoveNum = 0; //wins can occur at 4 moves
  var blueMoveNum = 0; //wins can occur at 4 moves
  var clicked = true; //toggles T/F to change players
  var left = 0; //horizontal win count
  var right = 0; //horizontal win count
  var down = 0; //vertical win count
  var downLeft = 0;

  var checkWin = function(x, y) {
    var result = false;
    //check left
    var xOne = x;
    var yOne = y;
    var leftWin = function() {
      while (xOne > 0) {
        console.log(left);
        if (colorStore[xOne][yOne] == move) {
          left++;
          console.log(left);
          if (left == 4) {
            result = true;
          }
        } else {
          left = 0;
        }
        xOne--;
      }
    }// end check left

    //check down
    var xTwo = xOne;
    var yTwo = yOne;
    var downWin = function() {
      while (yTwo < 7 && yTwo > 0 && xTwo > 0) {
        console.log(down);
        if (colorStore[xTwo][yTwo] == move) {
          down++;
          console.log(down);
          if (down == 4) {
            result = true;
          }
        } else {
          down = 0;
        }
        yTwo++;
      }
    } //end check down

    //check right
    var xThree = xTwo;
    var yThree = yTwo;
    var rightWin = function() {
      while (xThree < 6 && xThree > 0) {
        if (colorStore[xThree][yThree] == move) {
          right++;
          if (right == 4) {
            result = true;
          }
        } else {
          right = 0;
        }
        xThree++;
      }
    } //end check down
   //check down left
    var xFour = xThree;
    var yFour = yThree;
    var downLeftWin = function() {
      while (xFour < 6 && xFour > 0 && yFour > 0 && yFour < 8) {
        if (colorStore[xThree][yThree] == move) {
          downLeft++;
          console.log(downLeft);
          if (downLeft == 4) {
            result = true;
          }
        } else {
          downLeft = 0;
        }
        xFour--;
        yFour--;
      }
    } //end check down left
    // var downRightWin =
    // var upLeftWin =
    // var upRightWin =


    downWin(); //call function to check win condition
    leftWin(); //call function to check win condition
    rightWin(); //call function to check win condition
    downLeftWin();
    if (result == true) {
      congratulate(move);
    }
  } //end checkWin

  var congratulate = function(color) {
    console.log("congratulate function. Values: " + color);
    //test
    if (color === 'clickedRed') {
      red++;
      $('.header').html("<h1 id='title'>RED WINS!</h1><p>reset for new game</p>");
      $("#redScore").attr("placeholder", red);
      $(".header").css("background", "red");
      $(".gameTile").addClass('clickedRed');
    } else {
      blue++;
      $('.header').html("<h1 id='title'>BLUE WINS!</h1><p>reset for new game</p>")
      $("#blueScore").attr("placeholder", blue);
      $(".header").css("background", "blue");
      $(".gameTile").addClass('clickedBlue');
    }
  } //end congratulate

  $('.gameTile').on('click', function() {
    var x = $(this).attr('x');
    var y = $(this).attr('y');
    var aboveY = parseInt(y - 1);
    var abovePiece = $("[y = '" + aboveY + "']");
    if (y == 6 || $(this).hasClass('open')) {
      console.log(abovePiece);
      if (clicked === true) {
        clicked = false; //change player colors
        colorStore[x][y] = 'clickedRed' //access clicked piece
        redMoveNum += 1;
        color = 'clickedRed';
        move = colorStore[x][y];
        abovePiece.addClass('open');
        $(this).addClass('clickedRed');
      } else if (clicked === false) {
        clicked = true; //change player colors
        colorStore[x][y] = 'clickedBlue' //access clicked piece
        blueMoveNum += 1;
        color = 'clickedBlue';
        move = colorStore[x][y];
        abovePiece.addClass('open');
        $(this).addClass('clickedBlue');
        }
      if (redMoveNum >= 4 || blueMoveNum >= 4) {
        checkWin(x, y);
      }
    }
  }); //end click method

//RESET & DIRECTIONS
  $('#reset').on('click', function() {
    left = 0; //horizontal win count to 4
    right = 0; //horizontal win count to 4
    down = 0; //vertical win count to 4
    redMoveNum = 0;
    blueMoveNum = 0;
    clicked = true;
    $(".header").css("background", "rgba(70, 83, 87, 0.90)");
    $('.gameTile').removeClass('clickedRed clickedBlue open');
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
