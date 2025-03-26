document.getElementById('nxtBtn').addEventListener('click', function(event) {
    let score = 0;
    let totalQuestions = 4; // Total number of questions
    let answeredQuestions = 0;

    // List of question names and correct answers
    const correctAnswers = {
        "q1": "a", // 6,371 km
        "q2": "a", // 299,792,458 m/s
        "q3": "a", // 100°C
        "q4": "a"  // 0°C
    };

    // Loop through each question
    for (let questionID in correctAnswers) {
        let selectedOption = document.querySelector(`input[name="${questionID}"]:checked`);

        if (selectedOption) {
            answeredQuestions++; // Count answered questions

            // Check if selected answer is correct
            if (selectedOption.value === correctAnswers[questionID]) {
                score++; // Increase score if correct
            }
        }
    }

    // Prevent navigation if not all questions are answered
    if (answeredQuestions < totalQuestions) {
        alert("Please answer all questions before proceeding.");
        event.preventDefault();
    } else {
        // Store the score in sessionStorage
        sessionStorage.setItem("quizScore", score);

    }
});
