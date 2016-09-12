$(function () {
  var gameTile = function() {
    for (var i = 0; i < 42; i++) {
      var tile = $("<div class='gameTile'></div>")
      $('.board').append(tile);
    }
  }
  gameTile();
  //create 7*6 gameboard

  var clicked = false;
  if (clicked === false) {
    $('.gameTile').on('click', function() {
      $(this).addClass('clickedRed');

      console.log('now red');
      //test
    })
    clicked = true;
  } else if (clicked === true) {
    $('.gameTile').on('click', function() {
      $(this).addClass('clickedBlack');
      
      console.log('now black');
      //test
    })
    clicked = false;
  }
  // $('.gameTile').on('click', function() {
  //   console.log('I work');
  //   //test
  //   $(this).addClass('clickedRed');
  // })
  //change color of gameTile

}) //end onload
