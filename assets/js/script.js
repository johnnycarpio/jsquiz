var startButton = document.querySelector(".start-button");
var highScoreButton = document.querySelector(".high-score-button");
var timer = document.querySelector("#timer");
var content1 = document.querySelector(".welcome");
var content2 = document.querySelector(".rules");
var timeRemaining = 200;

// variable for the form
var initialInput = document.getElementById("initials");
// variable for the submit button
var buttonEl = document.querySelector("#save-initial");
// variable for the ul to append to
var initialList = document.querySelector("#initial-list");

// When START button is clicked, timer starts

function gameStart() {
    var countDown = function () {
        timeRemaining--;
        if (timeRemaining === 0) {
            clearInterval(startGame)
            finalScore();
        };
        document.querySelector(".timer").innerHTML = timeRemaining;
    };
    var startGame = setInterval(countDown, 1000);
    question1();
};

var question1 = function () {
    $(startButton).remove();
    $(highScoreButton).remove();
    $(content1).remove();
    $(content2).remove();
    $(".main-container").append("<h1 class='question'>Where is it best to link your JS file?</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> End of the Body </button>");
    $(".main-container").append("<button class='answer' data-id='2'> In the Header </button>");
    $(".main-container").append("<button class='answer' data-id='3'> Right after linking CSS </button>");
    $(".main-container").append("<button class='answer' data-id='4'> None of the Above </button>");

    $(".answer").click(function () {
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

var question2 = function () {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>What does JavaScript do?</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> Puts content into the webpage </button>");
    $(".main-container").append("<button class='answer' data-id='2'> Allows the webpage to execute functions </button>");
    $(".main-container").append("<button class='answer' data-id='3'> Styles the webpage </button>");
    $(".main-container").append("<button class='answer' data-id='4'> None of the Above </button>");

    $(".answer").click(function () {
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

var question3 = function () {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>What type of data types can you put in an Array?</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> Strings </button>");
    $(".main-container").append("<button class='answer' data-id='2'> Numbers </button>");
    $(".main-container").append("<button class='answer' data-id='3'> Boolean </button>");
    $(".main-container").append("<button class='answer' data-id='4'> All of the Above </button>");

    $(".answer").click(function () {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "4") {
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

var question4 = function () {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>What symbols are used to create an Array?</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> ( & ) </button>");
    $(".main-container").append("<button class='answer' data-id='2'> [ & ] </button>");
    $(".main-container").append("<button class='answer' data-id='3'> { & } </button>");
    $(".main-container").append("<button class='answer' data-id='4'> None of the Above </button>");

    $(".answer").click(function () {
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

var question5 = function () {
    $(".answer").remove();
    $(".question").remove();
    $(".main-container").append("<h1 class='question'>What is jQuery?</h1>")
    $(".main-container").append("<button class='answer' data-id='1'> A JavaScript library designed to simplify DOM Traversal </button>");
    $(".main-container").append("<button class='answer' data-id='2'> A 1990's rapper </button>");
    $(".main-container").append("<button class='answer' data-id='3'> jCole's cousin  </button>");
    $(".main-container").append("<button class='answer' data-id='4'> None of the Above </button>");

    $(".answer").click(function () {
        var finalAnswer = $(this).attr("data-id");
        if (finalAnswer == "1") {
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

var finalScore = function () {
    $(".answer").remove();
    $(".question").remove();
    $(".result").remove();
    $(".timer").remove();
    $(".main-container").append("<h1 class='finalScore'>Your final score is</h1>" + timeRemaining);

    var thirdContainer = document.getElementById("third-container")
    thirdContainer.classList.remove("hide");

}

buttonEl.addEventListener("click", function() {

    var initialSubmit = initialInput.value;

    var submittedInitials = document.createElement("li");
    submittedInitials.className = "initial-class"
    submittedInitials.textContent = initialSubmit;
    initialList.appendChild(submittedInitials);

    localStorage.setItem("initialSubmit", initialSubmit);
    
});

startButton.addEventListener("click", gameStart);