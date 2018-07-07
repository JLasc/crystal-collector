/* 
Psuedo Code:

- Game initializes upon page load - function that resets totals and chooses new values
- Computer will pick a random target number using math.random 30-50 (keep this range, and increment on new game)
- User will be shown 4 crystals, and each has a hidden value to the user (array with 4 random numbers, use for loop to assign img & value)
- If the user can match the target number, then win, else loss. Loss is if user goes over target number.
- Game resets on win/loss 


** Extras ** 

Sound for win & loss
Sound for crystal click
Game loss banner display? 
Game win banner?

*/



/* $(document).ready(function() { */

//Global Variables
var crystalArray = [];
var userNumber = 0;
var targetNumber = 0;
var wins = 0;
var losses = 0;
var gameOver = true;

//Page hooks
var tarNum = $("#target-number");
var cryDiv = $("#crystal-div");
var userNum = $("#user-number");
var winNumber = $("#wins");
var lossNumber = $("#loss");


//Start the game
function gameStart () {
    gameOver = false;
    userNumber = 0;
    getTargetNumber()
    crystalFill()
    tarNum.text(targetNumber);
    userNum.text(userNumber);
    winNumber.text(wins)
    lossNumber.text(losses)
};

//Fill crystalArray with 4 values & generates image on page
function crystalFill () {

    //Empties array
    crystalArray = [];

    // Adds 4 random numbers between 1 & 10
    for (i = 1; i <= 4; i++ ) {
        a = Math.floor(Math.random() * 10) +1
        crystalArray.push(a)
    }

    //Creates image, and assigns values from crystalArray
    for (j = 0; j < crystalArray.length; j++) {
        a = $("<img>")
        a.addClass("crystal-size")
        a.attr("src", "./assets/images/crystalgif.gif")
        a.attr("crystal-value", crystalArray[j])
        cryDiv.append(a)
    }

};


// Generates a target number, increments upon win
function getTargetNumber (x, y) {
    x = 30
    y = 15
    
    targetNumber += Math.floor(Math.random() * (x - y)) + x
    return targetNumber
}


//Initialize game on page load
gameStart()


//On-click events & Game Logic
$(".crystal-size").on("click", function() {

    //Get crystal values, turn into integer from string, increment userNumber
    var crystals = ($(this).attr("crystal-value"))
    crystals = parseInt(crystals)
    userNumber += crystals
    userNum.text(userNumber)

    if (userNumber === targetNumber) {
        alert()
    } else if (userNumber > targetNumber) {
        alert()
    }
    
})




/* }) */