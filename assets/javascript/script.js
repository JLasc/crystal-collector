$(document).ready(function() {

//Global Variables
var crystalArray = [];
var userNumber = 0;
var targetNumber = 0;
var wins = 0;
var losses = 0;
var colorArray = ["img-color1", "img-color2", "img-color3", "img-color4", "img-color5", "img-color6"];
var imageColor;


//Sound effects
var clickAudio = new Audio('./assets/sounds/crystalclick.mp3')
var winAudio = new Audio('./assets/sounds/crystalwin.mp3')
var loseAudio = new Audio('./assets/sounds/crystallose.mp3')


//Page hooks
var tarNum = $("#target-number");
var cryDiv = $("#crystal-div");
var userNum = $("#user-number");
var winNumber = $("#wins");
var lossNumber = $("#loss");


//Start the game
function gameStart () {
    userNumber = 0;
    getTargetNumber();
    crystalFill();
    tarNum.text(targetNumber);
    userNum.text(userNumber);
    winNumber.text(wins);
    lossNumber.text(losses);

//On-click events & Game Logic
$(".crystal-size").on("click", function() {
    
    //Get crystal values, turn into integer from string, increment userNumber
    var crystals = ($(this).attr("crystal-value"));
    crystals = parseInt(crystals);
    userNumber += crystals;
    userNum.text(userNumber);
    clickAudio.play()

if (userNumber === targetNumber) {
    alert("You won!");
    wins += 1
    winNumber.text(wins)
    userNumber = 0;
    userNum.text(userNumber)
    tarNum.text(targetNumber)
    gameStart()
    winAudio.play()
    
} else if (userNumber > targetNumber) {
    alert("You lost!");
    losses += 1
    lossNumber.text(losses)
    userNumber = 0;
    userNum.text(userNumber)
    targetNumber = 0
    tarNum.text(targetNumber)
    loseAudio.play()
    gameStart()
        }
    })
};

//Fill crystalArray with 4 values & generates image on page
function crystalFill () {
    cryDiv.empty()

    //Empties array
    crystalArray = [];

    // Adds 4 random numbers between 1 & 10
    for (i = 1; i <= 4; i++ ) {
        a = Math.floor(Math.random() * 10) +1;
        crystalArray.push(a);
    }

    //Creates image, and assigns values from crystalArray
    for (j = 0; j < crystalArray.length; j++) {
        imageColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        a = $("<img>");
        a.addClass("crystal-size");
        a.addClass(imageColor);
        a.attr("src", "./assets/images/crystalgif.gif");
        a.attr("crystal-value", crystalArray[j]);
        cryDiv.append(a);
    }
};

// Generates a target number, increments upon win
function getTargetNumber (x, y) {
    x = 30;
    y = 15;
    targetNumber += Math.floor(Math.random() * (x - y)) + x;
    return targetNumber;
};

//Initialize game on page load
gameStart();


});