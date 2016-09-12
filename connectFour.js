$(function () {
  var gameTile = function() {
    for (var i = 0; i < 43; i++) {
      var tile = $("<div class='gameTile'></div>")
      $('.board').append(tile);
    }
  } //end gameTile

  gameTile();
}) //end onload
