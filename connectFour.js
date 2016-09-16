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

  var checkWin = function(x, y) {
    var originalX = x;
    var originalY = y;
    var leftWin = function() {
      while (originalX > 0) {
        if (colorStore[originalX][originalY] == move) {
          left++;
          if (left == 4) {
            congratulate(move);
          }
        } else {
          left = 0;
        }
        originalX--;
      }
    }
    var downWin = function() {
      while (originalY < 7) {
        if (colorStore[originalX][originalY] == move) {
          down++;
          if (down == 4) {
            congratulate(move);
          }
        } else {
          down = 0;
        }
        originalY++;
        console.log(originalY);
      }
    }
    leftWin();
    downWin();

  } //end checkWin


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
    var x = $(this).attr('x');
    var y = $(this).attr('y');
    // if (colorStore[y] = 6 ||
    if (clicked === true) {
      clicked = false; //change player colors
      colorStore[x][y] = 'clickedRed'
      redMoveNum += 1;
      color = 'clickedRed';
      move = colorStore[x][y];
      $(this).addClass('clickedRed');
    } else if (clicked === false) {
      clicked = true; //change player colors
      colorStore[x][y] = 'clickedBlue'
      blueMoveNum += 1;
      $(this).addClass('clickedBlue');
      color = 'clickedBlue';
      move = colorStore[x][y];
      }

    if (redMoveNum >= 4 || blueMoveNum >= 4) {
      checkWin(x, y);
    }
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
