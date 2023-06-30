// Game variables
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6] // Diagonals
];

// Function to handle cell click
function handleCellClick(clickedCell, clickedCellIndex) {
  // Ignore click if the cell is already occupied or the game is over
  if (gameState[clickedCellIndex] !== '' || !gameActive) {
    return;
  }

  // Update game state
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  // Check if the current player wins
  if (checkWin()) {
    gameActive = false;
    announceResult(`${currentPlayer} wins!`);
    return;
  }

  // Check if it's a tie
  if (!gameState.includes('')) {
    gameActive = false;
    announceResult("It's a tie!");
    return;
  }

  // Switch players
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Function to check for a win
function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

// Function to announce the result
function announceResult(message) {
  document.getElementById('result').textContent = message;
}

// Function to restart the game
function restartGame() {
  currentPlayer = 'X';
  gameActive = true;
  gameState = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('result').textContent = '';
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

// Add event listeners to the cells
document.querySelectorAll('.cell').forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(cell, index));
});

// Add event listener to the restart button
document.getElementById('restart').addEventListener('click', restartGame);
