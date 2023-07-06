document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const gridSize = 20;
    const gridCount = gameBoard.offsetWidth / gridSize;
    const snake = [{ x: 10, y: 10 }];
    let food = { x: 5, y: 5 };
    let direction = 'right';
    let intervalId;

    function createGrid() {
      gameBoard.innerHTML = '';
      for (let y = 0; y < gridCount; y++) {
        for (let x = 0; x < gridCount; x++) {
          const cell = document.createElement('div');
          cell.style.width = `${gridSize}px`;
          cell.style.height = `${gridSize}px`;
          cell.classList.add('cell');
          gameBoard.appendChild(cell);
        }
      }
    }

    function updateSnake() {
      const head = { x: snake[0].x, y: snake[0].y };

      switch (direction) {
        case 'up':
          head.y--;
          break;
        case 'down':
          head.y++;
          break;
        case 'left':
          head.x--;
          break;
        case 'right':
          head.x++;
          break;
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        generateFood();
      } else {
        snake.pop();
      }
    }

    function generateFood() {
      food = {
        x: Math.floor(Math.random() * gridCount),
        y: Math.floor(Math.random() * gridCount)
      };

      for (let segment of snake) {
        if (segment.x === food.x && segment.y === food.y) {
          generateFood();
          break;
        }
      }
    }

    function renderSnake() {
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => cell.classList.remove('snake'));

      snake.forEach(segment => {
        const index = segment.y * gridCount + segment.x;
        cells[index].classList.add('snake');
      });

      const foodIndex = food.y * gridCount + food.x;
      cells[foodIndex].classList.add('food');
    }

    function handleKeyPress(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== 'down') direction = 'up';
          break;
        case 'ArrowDown':
          if (direction !== 'up') direction = 'down';
          break;
        case 'ArrowLeft':
          if (direction !== 'right') direction = 'left';
          break;
        case 'ArrowRight':
          if (direction !== 'left') direction = 'right';
          break;
      }
    }

    function checkCollision() {
      const head = snake[0];

      if (
        head.x < 0 ||
        head.x >= gridCount ||
        head.y < 0 ||
        head.y >= gridCount
      ) {
        return true;
      }

      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          return true;
        }
      }

      return false;
    }

    function gameOver() {
      clearInterval(intervalId);
      alert('Game Over');
    }

    function startGame() {
      createGrid();
      intervalId = setInterval(() => {
        updateSnake();
        renderSnake();

        if (checkCollision()) {
          gameOver();
        }
      }, 200);
    }

    document.addEventListener('keydown', handleKeyPress);
    startGame();
  });
