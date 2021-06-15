function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("card");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("What is 1+2", ["4", "6","8", "3"], "3"),
    new Question("What is capital of India", ["Delhi", "Jalandhar", "Chandigarh", "Mirzapur"], "Delhi"),
    new Question("Which country responsible for COVID-19?", ["India", "America","China", "Myanmar"], "China"),
    new Question("Which is most powerful country of world?", ["America", "China", "Russia", "All"], "All"),
    new Question("Linear regression is a topic in which subject?.", ["English", "Maths", "Hindi", "Maths"], "Maths")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





