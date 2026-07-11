// Game state (Object)
const state = {
    playerChoice: null,
    computerChoice: null,
    playerScore: 0,
    computerScore: 0
};

// DOM Elements
const elements = {
    playerScore: document.getElementById('player-score'),
    computerScore: document.getElementById('computer-score'),
    playerChoice: document.getElementById('player-choice'),
    computerChoice: document.getElementById('computer-choice'),
    result: document.getElementById('resultBtn'),
    resetBtn: document.getElementById('resetBtn'),
    choiceBtns: document.querySelectorAll('.choice-btn')
};

// Game logic
function getComputerChoice() {

    let min = 1;
    let max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    if (randomNumber < 33) return 'rock';
    if (randomNumber < 66) return 'paper';
    return 'scissors';
}

function determineWinner(player, computer) {
    if (player === computer) return 'draw';

    const winningCombos = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    return winningCombos[player] === computer ? 'win' : 'lose';
}

function getChoiceEmoji(choice) {
    const emojis = {
        rock: '🪨',
        paper: '📄',
        scissors: '✂️'
    };
    return emojis[choice] || choice;
}

function getChoiceDisplay(choice) {
    return `${getChoiceEmoji(choice)} ${choice.charAt(0).toUpperCase() + choice.slice(1)}`;
}

function updateScoreboard(result) {
    if (result === 'win') state.playerScore++;
    else if (result === 'lose') state.computerScore++;

    elements.playerScore.textContent = state.playerScore;
    elements.computerScore.textContent = state.computerScore;
}

function displayResult(result, player, computer) {
    const messages = {
        win: `🎉 You win! ${getChoiceDisplay(player)} beats ${getChoiceDisplay(computer)}`,
        lose: `😢 You lose! ${getChoiceDisplay(computer)} beats ${getChoiceDisplay(player)}`,
        draw: `🤝 It's a draw! Both chose ${getChoiceDisplay(player)}`
    };

    elements.result.textContent = messages[result];
    elements.result.className = 'result ' + result;
}

function playGame(playerChoice) {
    // Get computer's choice
    const computerChoice = getComputerChoice();

    // Update state
    state.playerChoice = playerChoice;
    state.computerChoice = computerChoice;

    // Display choices
    elements.playerChoice.textContent = getChoiceDisplay(playerChoice);
    elements.computerChoice.textContent = getChoiceDisplay(computerChoice);

    // Determine winner
    const result = determineWinner(playerChoice, computerChoice);

    // Update UI
    updateScoreboard(result);
    displayResult(result, playerChoice, computerChoice);
}

function resetGame() {
    // Reset state
    state.playerScore = 0;
    state.computerScore = 0;
    state.playerChoice = null;
    state.computerChoice = null;

    // Reset UI
    elements.playerScore.textContent = '0';
    elements.computerScore.textContent = '0';
    elements.playerChoice.textContent = '-';
    elements.computerChoice.textContent = '-';
    elements.result.textContent = 'Choose your move!';
    elements.result.className = 'result';
}

// Event listeners
elements.choiceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        playGame(choice);
    });
});

elements.resetBtn.addEventListener('click', resetGame);

// Initialize
resetGame();