Connect Four README:

* GAMETILE METHOD
    *Uses jQuery to iterate through a function 42 times, which creates each, individual circular game piece within the board div. This function is called immediately upon loading the webpage so that the board is visible to the user. Each gameTile produced through this method receives an x and a y index, which makes accessing the pieces in other methods a painless process.*

* GAMETILE CLICK METHODS
    *When a game tile is clicked that tile receives the class 'clickedRed' or 'clickedBlue' depending on the truthiness of the var 'clicked', which starts as 'true' as soon as the page loads, giving red player the first move.*

* DIRECTIONS BUTTON
    *The directions button, when clicked, changes the innerHTML of the header section of the page and replaces the catchphrase with directions explaining how to work the webpage. The directions disappear if the user clicks the directions button while the directions are visible.*

* RESET BUTTON
    *When the reset button is clicked by the user the game board is cleared. This process occurs by removing both 'clickedRed' and 'clickedBlue' classes from any and all gameTile divs (made very easy with jQuery).*
