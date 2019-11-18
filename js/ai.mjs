const aiRandom = (board=[0, 0, 0, 0, 0, 0, 0, 0, 0]) => {
  let index;
  do {
    index = Math.round(Math.random() * 9)
  } while (board[index] !== 0);
  return index;
}

export {
  aiRandom
}