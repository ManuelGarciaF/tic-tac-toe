# Tic Tac Toe
### Html game using javascript.

## Modules
### game.js
Contains the game logic.

#### Exports:
- `makeMove`: receives the index at which to place a mark, determined by `_currentPlayer`. After adding the mark, uses `_checkBoard` to check if the game ended. Returns `-2` if `index` is already occupied, else returns `_checkBoard`'s result.
  - `_checkBoard`: Checks `_board` for game end. Returns which player won (`1` : `2`), `-1` for a tie, or `0` if no one won.
- `getCurrentPlayer`: Returns `_currentPlayer`
- `getBoard`: Returns `_board`
- `resetGame`: Resets variables to initial state, receives `aiChoice`, which indicates if the next game will be played against the ai.

### dom.js
Interfaces `game.js` with the page.