import { aiRandom } from "./ai.mjs";

let _board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let _enableAi = false;

let _currentPlayer = 1;

const _checkBoard = () => {
  // Check rows and columns.
  for (let i = 0; i < 3; i++) {
    const colSymbol = _board[i];
    if (
      colSymbol !== 0 &&
      _board[i + 3] === colSymbol &&
      _board[i + 6] === colSymbol
    ) {
      return colSymbol;
    }
    const rowSymbol = _board[i * 3];
    if (
      rowSymbol !== 0 &&
      _board[i * 3 + 1] === rowSymbol &&
      _board[i * 3 + 2] === rowSymbol
    ) {
      return rowSymbol;
    }
  }

  // Check diagonals
  if (_board[0] !== 0 && _board[0] === _board[4] && _board[4] === _board[8]) {
    return _board[0];
  }
  if (_board[2] !== 0 && _board[2] === _board[4] && _board[4] === _board[6]) {
    return _board[2];
  }

  // Check for a tie.
  if (!_board.includes(0)) return 0;

  return -1;
};

const makeMove = index => {
  console.log({ _enableAi, _board, _currentPlayer });
  if (_board[index] !== 0) return -2;
  _board[index] = _currentPlayer;

  if (_enableAi) {
    if (_board.includes(0)) {
      _board[aiRandom(_board)] = 2
    }
  } else {
    _currentPlayer = _currentPlayer === 1 ? 2 : 1; // Toggle _currentPlayer
  }

  return _checkBoard();
};

const reset = aiChoice => {
  _enableAi = aiChoice;
  _board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  _currentPlayer = 1;
};

const getCurrentPlayer = () => _currentPlayer;

const getBoard = () => _board;

export { makeMove, getCurrentPlayer, getBoard, reset };
