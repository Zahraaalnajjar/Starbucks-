// Generate a random number between 1 and 10
const targetNumber = Math.floor(Math.random() * 10) + 1;

// Function to check the user's guess
function checkGuess() {
  const userGuess = document.getElementById('userGuess').value;

  if (userGuess == targetNumber) {
    showMessage('Congratulations! You guessed the correct number.');
  } else {
    showMessage('Sorry, try again.');
  }
}

// Function to display a message
function showMessage(message) {
  document.getElementById('message').textContent = message;
}
