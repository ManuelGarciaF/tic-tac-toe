import * as game from './game.js'

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

    document.querySelector("#player-num").textContent = game.getCurrentPlayer();
  });
}

const _displayResults = result => {
  document.querySelector(".result-banner").style.display = "block";
  document.querySelector("#shadow").style.display = "block";

  document.querySelector("#result").textContent =
    result === 0 ? "It's a tie!" : `Player ${result} won!`;
};

const _refresh = () => {
  game.board.forEach((elem, index) => {
    if (elem !== 0)
      document
        .querySelector(`[data-index="${index}"]`)
        .setAttribute("data-player", elem);
  });
};
