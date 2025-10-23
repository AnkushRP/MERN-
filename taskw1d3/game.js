// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guess").value);
    attempts++;

    const messageElement = document.getElementById("message");

    if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        messageElement.style.color = "green";
        document.getElementById("guess").disabled = true;
    } else if (userGuess < randomNumber) {
        messageElement.textContent = "Too low! Try again.";
        messageElement.style.color = "red";
    } else {
        messageElement.textContent = "Too high! Try again.";
        messageElement.style.color = "red";
    }
}
