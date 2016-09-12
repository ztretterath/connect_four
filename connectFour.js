$(function () {
  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $("<div class='gameTile'></div>")
      $('.board').append(tile);
    }
  }
  gameTile();
  //create 7*6 gameboard

  $('.gameTile').on('click', function() {
    console.log('I work');
    //test

    $(this).addClass('clickedWhite');
  })
  //change color of gameTile

}) //end onload
