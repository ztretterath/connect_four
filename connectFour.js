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

  var makeRows = function() {
    var rowOne = {};
    var rowTwo = {};
    var rowThree = {};
    var rowFour = {};
    var rowFive = {};
    var rowSix = {};

    for (var i = 0; i <= 6; i++) {
      var tile = $(".gameTile");
      if (tile.attr('#id') === i) {
        rowOne['#id'] = i;
      }
    }
    console.log(rowOne);
  } //end makeRows
  makeRows();

  var checkRow = function() {

  } //end checkRow method

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
