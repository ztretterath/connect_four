$(function () {
  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $('<obj>i</obj>');
      $('.board').append(tile);
    }
  }
  gameTile();

  // var gameBoard = {
  //   ['', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', ''],
  //   ['', '', '', '', '', '', '']
  // }
  //create 7*6 gameboard

  var makeRows = function() {
    var rowOne = {};
    var rowTwo = {};
    var rowThree = {};
    var rowFour = {};
    var rowFive = {};
    var rowSix = {};

    for (var i = 0; i <= 42; i++) {
      var tile = $("obj");
      if (tile.attr('#id') <= 6) {
        rowOne.id = i;
      } else if (tile.attr('#id') <= 13) {
        rowTwo.id = i;
      } else if (tile.attr('#id') <= 20) {
        rowThree.id = i;
      } else if (tile.attr('#id') <= 27) {
        rowFour.id = i;
      } else if (tile.attr('#id') <= 34) {
        rowFive.id = i;
      } else if (tile.attr('#id') <= 42) {
        rowSix.id = i;
      }
    }
    console.log(rowOne);
    console.log(rowTwo);

  } //end makeRows
  makeRows();

  var checkRow = function() {

  } //end checkRow method

  var clicked = true;
  $('obj').on('click', function() {
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

  $('#reset').on('click', function() {
    $('obj').removeClass('clickedRed clickedBlack');
  })


}) //end onload
