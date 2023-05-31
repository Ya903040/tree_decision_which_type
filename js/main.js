let currentQuestion = 1;

function startTest() {
    document.getElementById('startButton').style.display = "none";
    showQuestion(currentQuestion);
}

function showQuestion(questionNumber) {
    const questions = document.getElementsByClassName('question');

    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = "none";
    }

    if (questionNumber <= 5) {
        document.getElementById('question' + questionNumber).style.display = "block";
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion(currentQuestion);
}

function calculateResult() {
    const resultDiv = document.getElementById('result');
    let result = "";

    const answer1 = document.querySelector('input[name="q1"]:checked');
    const answer2 = document.querySelector('input[name="q2"]:checked');
    const answer3 = document.querySelector('input[name="q3"]:checked');
    const answer4 = document.querySelector('input[name="q4"]:checked');
    const answer5 = document.querySelector('input[name="q5"]:checked');

    if (answer1 && answer2 && answer3 && answer4 && answer5) {
        const developerType = answer1.value;
        const dataInterest = answer2.value;
        const designInterest = answer3.value;
        const largeDataSets = answer4.value;
        const problemSolving = answer5.value;

        if (developerType === "frontend") {
            if (designInterest === "yes") {
                result = "You might relate to a Frontend Developer with a focus on UI/UX.";
            } else {
                result = "You might relate to a Frontend Developer with a focus on coding and functionality.";
            }
        } else {
            if (dataInterest === "yes" && largeDataSets === "yes") {
                result = "You might relate to a Data Engineer or Data Scientist.";
            } else if (dataInterest === "yes" && largeDataSets === "no") {
                result = "You might relate to a Backend Developer with a focus on databases and data manipulation.";
            } else if (problemSolving === "yes") {
                result = "You might relate to an Algorithm Engineer or Software Engineer.";
            } else {
                result = "You might relate to a Backend Developer with a focus on server-side programming and system architecture.";
            }
        }

        resultDiv.innerHTML = "<p>" + result + "</p>";
    }
}