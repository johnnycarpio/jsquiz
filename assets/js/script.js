var startButton = document.querySelector(".start-button");
var highScoreButton = document.querySelector(".high-score-button");
var timer = document.querySelector("#timer");
var content1 = document.querySelector(".welcome");
var content2 = document.querySelector(".rules");
var timeRemaining = 120;

// When START button is clicked, timer starts

function gameStart () {
    var countDown = function() {
        timeRemaining--;
            if(timeRemaining === 0){
                clearInterval(startGame)
            };
            document.querySelector(".timer").innerHTML = timeRemaining;
    };
    var startGame = setInterval (countDown, 1000);
    question1();
};

var question1 = function() {
    $(startButton).remove();
    $(highScoreButton).remove();
    $(content1).remove();
    $(content2).remove();
    $(".main-container").append("<h1 class='question'>Question Goes Here</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> Answer 1 (CORRECT) </button>");
    $(".main-container").append("<button class='answer' data-id='2'> Answer 2 </button>");
    $(".main-container").append("<button class='answer' data-id='3'> Answer 3 </button>");
    $(".main-container").append("<button class='answer' data-id='4'> Answer 4 </button>");

    $(".answer").click(function() {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "1") {
            $(".main-container").append("<p class='result'>You are correct!</p>")
        }
        else {
            $(".main-container").append("<p class='result'>Your answer was wrong. 5 seconds has been deducted from your timer.</p>")
            timeRemaining = timeRemaining - 5;
        }
    question2()
    });
};

var question2 = function() {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>Question NUMBER 2 Goes Here</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> TEST ANSWER 1 </button>");
    $(".main-container").append("<button class='answer' data-id='2'> TEST ANSWER 2 (CORRECT) </button>");
    $(".main-container").append("<button class='answer' data-id='3'> TEST ANSWER 3 </button>");
    $(".main-container").append("<button class='answer' data-id='4'> TEST ANSWER 4 </button>");

    $(".answer").click(function() {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "2") {
            $(".result").remove();
            $(".main-container").append("<p class='result'>You are correct!</p>")
        }
        else {
            $(".result").remove();
            $(".main-container").append("<p class='result'>Your answer was wrong. 5 seconds has been deducted from your timer.</p>")
            timeRemaining = timeRemaining - 5;
        }
    question3()
    });
};

var question3 = function() {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>Question NUMBER 3 Goes Here</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> TEST ANSWER 1 </button>");
    $(".main-container").append("<button class='answer' data-id='2'> TEST ANSWER 2 (CORRECT) </button>");
    $(".main-container").append("<button class='answer' data-id='3'> TEST ANSWER 3 </button>");
    $(".main-container").append("<button class='answer' data-id='4'> TEST ANSWER 4 </button>");

    $(".answer").click(function() {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "2") {
            $(".result").remove();
            $(".main-container").append("<p class='result'>You are correct!</p>")
        }
        else {
            $(".result").remove();
            $(".main-container").append("<p class='result'>Your answer was wrong. 5 seconds has been deducted from your timer.</p>")
            timeRemaining = timeRemaining - 5;
        }
    question4()
    });
};

var question4 = function() {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>Question NUMBER 4 Goes Here</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> TEST ANSWER 1 </button>");
    $(".main-container").append("<button class='answer' data-id='2'> TEST ANSWER 2 (CORRECT) </button>");
    $(".main-container").append("<button class='answer' data-id='3'> TEST ANSWER 3 </button>");
    $(".main-container").append("<button class='answer' data-id='4'> TEST ANSWER 4 </button>");

    $(".answer").click(function() {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "2") {
            $(".result").remove();
            $(".main-container").append("<p class='result'>You are correct!</p>")
        }
        else {
            $(".result").remove();
            $(".main-container").append("<p class='result'>Your answer was wrong. 5 seconds has been deducted from your timer.</p>")
            timeRemaining = timeRemaining - 5;
        }
    question5()
    });
};

var question5 = function() {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>Question NUMBER 5 Goes Here</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> TEST ANSWER 1 </button>");
    $(".main-container").append("<button class='answer' data-id='2'> TEST ANSWER 2 (CORRECT) </button>");
    $(".main-container").append("<button class='answer' data-id='3'> TEST ANSWER 3 </button>");
    $(".main-container").append("<button class='answer' data-id='4'> TEST ANSWER 4 </button>");

    $(".answer").click(function() {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "2") {
            $(".result").remove();
            $(".main-container").append("<p class='result'>You are correct!</p>")
        }
        else {
            $(".result").remove();
            $(".main-container").append("<p class='result'>Your answer was wrong. 5 seconds has been deducted from your timer.</p>")
            timeRemaining = timeRemaining - 5;
        }
    finalScore()
    });
};

var finalScore = function() {
    $(".answer").remove();
    $(".question").remove();
    $(".result").remove();
    $(".main-container").append("<h1>Your final score is</h1>" + timeRemaining);
}


startButton.addEventListener("click", gameStart);