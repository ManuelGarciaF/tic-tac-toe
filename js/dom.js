import * as game from "./game.js";

const toggleBanner = show => {
  const property = show ? "block" : "none"
  document.querySelector(".result-banner").style.display = property;
  document.querySelector("#shadow").style.display = property;
}

const displayResults = result => {
  toggleBanner(true)

  document.querySelector("#result").textContent =
    result === 0 ? "It's a tie!" : `Player ${result} won!`;
};

const refresh = () => {
  game.getBoard().forEach((elem, index) => {
      document
        .querySelector(`[data-index="${index}"]`)
        .setAttribute("data-player", elem);
  }
  );
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

    refresh();

    document.querySelector("#player-num").textContent = game.getCurrentPlayer();
  });
}

document.querySelector(".play-player").addEventListener("click", event => {
  game.reset(false);
  toggleBanner(false)
  refresh();
  console.log("reset!")
});

document.querySelector(".play-ai").addEventListener("click", event => {
  game.reset(true);
  toggleBanner(false)
  refresh();
  console.log("reset!")
});
