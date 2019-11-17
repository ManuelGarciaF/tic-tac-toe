"use strict";

export let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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
      board[i * 3 + 1] === rowSymbol &&
      board[i * 3 + 2] === rowSymbol
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

export const makeMove = index => {
  if (board[index] !== 0) return;
  board[index] = _currentPlayer;
  _currentPlayer = _currentPlayer === 1 ? 2 : 1; // Toggle _currentPlayer
  return _checkBoard();
};

export const getCurrentPlayer = () => _currentPlayer;