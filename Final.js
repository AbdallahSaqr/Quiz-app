document.addEventListener("DOMContentLoaded", function () {
    let score = sessionStorage.getItem("quizScore");

    if (score === null) {
        score = 0; // Default score
    }

    document.getElementById("scoreDisplay").textContent = `You scored: ${score} out of 4`;
});
