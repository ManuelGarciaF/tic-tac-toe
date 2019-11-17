// Tic Tac Toe project by Manuel Garcia Frigo

const game = (() => {
  "use strict";

  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  let _currentPlayer = 1;

  const _checkBoard = () => {
    // Check rows and columns.
    for (let i = 0; i < 3; i++) {
      const colSymbol = board[i];
      if (
        colSymbol !== 0 &&
        board[i + 3] === colSymbol &&
        board[i + 6] === colSymbol
      ) {
        return colSymbol;
      }
      const rowSymbol = board[i * 3];
      if (
        rowSymbol !== 0 &&
        board[(i * 3) + 1] === rowSymbol &&
        board[(i * 3) + 2] === rowSymbol
      ) {
        return rowSymbol;
      }
    }

    // Check diagonals
    if (board[0] !== 0 && board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
    if (board[2] !== 0 && board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }

    // Check for a tie.
    if (!board.includes(0)) return 0;

    return -1;
  };

  const makeMove = index => {
    if (board[index] !== 0) return;
    board[index] = _currentPlayer;
    _currentPlayer = _currentPlayer === 1 ? 2 : 1; // Toggle _currentPlayer
    return _checkBoard();
  };

  const getCurrentPlayer = () => _currentPlayer;

  return {
    board,
    getCurrentPlayer,
    makeMove
  };
})();

const displayController = (() => {
  "use strict";

  const container = document.querySelector(".game-board");

  // Set first player value
  document.querySelector("#player-num").textContent = game.getCurrentPlayer();

  for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    button.classList.add("board-locker");
    button.setAttribute("data-index", i);
    container.appendChild(button);

    button.addEventListener("click", event => {
      const gameState = game.makeMove(event.target.getAttribute("data-index"));
      console.log({ gameState });
      if (gameState !== -1) _displayResults(gameState);

      _refresh();

      document.querySelector(
        "#player-num"
      ).textContent = game.getCurrentPlayer();
    });
  }

  const _displayResults = result => {
    document.querySelector(".result-banner").style.display = "block";
    document.querySelector("#shadow").style.display = "block";

    document.querySelector("#result").textContent = result === 0 ? "It's a tie!" : `Player ${result} won!`
  };

  const _refresh = () => {
    game.board.forEach((elem, index) => {
      if (elem !== 0)
        document
          .querySelector(`[data-index="${index}"]`)
          .setAttribute("data-player", elem);
    });
  };
})();
