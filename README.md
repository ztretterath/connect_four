Connect Four README:

* GAMETILE METHOD
    *Uses jQuery to iterate through a function 42 times, which creates each, individual circular game piece within the board div. This function is called immediately upon loading the webpage so that the board is visible to the user. Each gameTile produced through this method receives an x and a y index, which makes accessing the pieces in other methods a painless process.*

* GAMETILE CLICK METHODS
    *When a game tile is clicked that tile receives the class 'clickedRed' or 'clickedBlue' depending on the truthiness of the var 'clicked', which starts as 'true' as soon as the page loads, giving red player the first move. The click gameTile method is applicable only to the first row of tiles and after the first chip is played, the chip above the clicked chip receives the class 'open' and may be clicked.*

* CHECKWIN METHODS
    *checkWin consists of a method for each possible win direction: down, left, and right (diagonal condition = work in progress). The method utilizes math and the x/y value of each game piece for its functionality. Each direction is assigned a var with a value that begins at 0 and is incremented by one for each consecutive color of tile (if it matches the previous tile's color). If at anytime the directional var is equal to 4, a congratulate method is called for the winning color.*

* CONGRATULATE METHOD
    *If a checkWin function returns true, the congratulate method is called for the winning color. The congratulate method changes the innerHTML of the header of the page as well as adds a point to the player's scoreboard (found in the upper left/right hand corner of the page) and changes empty game tiles to the color of the winning player.*

* DIRECTIONS BUTTON
    *The directions button, when clicked, changes the innerHTML of the header section of the page and replaces the catchphrase with directions explaining how to work the webpage. The directions disappear if the user clicks the directions button while the directions are visible.*

* RESET BUTTON
    *When the reset button is clicked by the user the game board is cleared. This process occurs by removing both 'clickedRed' and 'clickedBlue' classes from any and all gameTile divs (made very easy with jQuery).*
