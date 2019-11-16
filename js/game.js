// Tic Tac Toe project by Manuel Garcia Frigo

const gameBoard = (() => {
  "use strict";

  // ⭕ ❌

  let board = [
    "", "", "",
    "", "", "",
    "", "", "",
  ]

  const addMark = (mark, index) => {
    if (board[index] !== "") return false;
    board[index] = mark;
    return true;
  }

  return { board, addMark };
})();

const displayController = (() => {
  "use strict";

  let _tiles = [];

  const populate = () => {
    const container = document.querySelector(".game-board")
  
    for (let i = 0; i < 9; i++) {
      const button = document.createElement("button")
      button.classList.add("board-locker")
      _tiles.push(button)
      container.appendChild(button)
    }
  }

  const refresh = (board) => {
    _tiles.forEach((elem, index) => {
      if (board[index] !== "")
      elem.setAttribute("data-player", board[index])
    })
  }

  return {
    populate,
    refresh
  }

})();

const PlayerFactory = (name, number) => {
  return {
    name,
    number
  }
}

const player1 = PlayerFactory("◯", 1)
const player2 = PlayerFactory("❌", 2)

displayController.populate()