import * as game from "./game.mjs";

const hideMenuBanner = () => {
  document.querySelector(".game").style.display = "grid";
  document.querySelector(".menu").style.display = "none";
  document.querySelector("#shadow").style.display = "none";
};

const toggleResultBanner = show => {
  const property = show ? "block" : "none";
  document.querySelector(".result-banner").style.display = property;
  document.querySelector("#shadow").style.display = property;
};

const displayResults = result => {
  toggleResultBanner(true);

  document.querySelector("#result").textContent =
    result === 0 ? "It's a tie!" : `Player ${result} won!`;
};

const refreshBoard = () => {
  game.getBoard().forEach((elem, index) => {
    document
      .querySelector(`[data-index="${index}"]`)
      .setAttribute("data-player", elem);
  });
};

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
    if (gameState > -1) displayResults(gameState);

    document.querySelector("#player-num").textContent = game.getCurrentPlayer();
    
    refreshBoard();
  });
}

const gameStart = (aiMode, menuBanner) => {
  game.reset(aiMode);
  if (menuBanner) {
    hideMenuBanner();
  } else {
    toggleResultBanner(false);
  }
  refreshBoard();
};

document
  .querySelector(".play-player")
  .addEventListener("click", () => gameStart(false, false));

document
  .querySelector(".play-ai")
  .addEventListener("click", () => gameStart(true, false));

document
  .querySelector(".start-player")
  .addEventListener("click", () => gameStart(false, true));

document
  .querySelector(".start-ai")
  .addEventListener("click", () => gameStart(true, true));
