const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click", 

function playGame() {
  let min = 1;
  let max = 100;
  const answer = Math.floor(Math.random() * (max - min + 1) + min);
  let attempts = 0;
  let guess;
  let running = true;
  while (running) {
    guess = Number(prompt(`Guess a number between ${min} and ${max}`))


    if (isNaN(guess)) {
      alert(`please enter a valid number.`);
    }
    else if (guess < min || guess > max) {
      alert(`please enter a valid number.`);
    }
    else {
      attempts++;
      if (guess < answer) {
        alert(`Too low please try again.`);
      }
      else if (guess > answer) {
        alert(`Too High please try again.`);
      }
      else {
        alert(`Congragulation! you found the answer in ${attempts} attempts.`);
        running = false;
      }
    }
  }
}

);
