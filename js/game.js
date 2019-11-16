// Tic Tac Toe project by Manuel Garcia Frigo

const game = (() => {
  "use strict";

  let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  let _currentPlayer = 1;

  const _checkBoard = () => {};

  const addMark = index => {
    if (board[index] !== 0) return false;
    board[index] = _currentPlayer;
    _currentPlayer = _currentPlayer === 1 ? 2 : 1; // Toggle _currentPlayer
    return true;
  };

  const getCurrentPlayer = () => _currentPlayer;

  return {
    board,
    getCurrentPlayer,
    addMark
  };
})();

const displayController = (() => {
  "use strict";

  const _refresh = () => {
    game.board.forEach((elem, index) => {
      if (elem !== 0)
        document
          .querySelector(`[data-index="${index}"]`)
          .setAttribute("data-player", elem);
    });
  };

  const populate = () => {
    const container = document.querySelector(".game-board");

    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button");
      button.classList.add("board-locker");
      button.setAttribute("data-index", i);
      container.appendChild(button);

      button.addEventListener("click", event => {
        game.addMark(event.target.getAttribute("data-index"));
        _refresh();

        document.querySelector(
          "#player-num"
        ).textContent = game.getCurrentPlayer();
      });
    }

    document.querySelector("#player-num").textContent = game.getCurrentPlayer();
  };

  return {
    populate
  };
})();



displayController.populate();
