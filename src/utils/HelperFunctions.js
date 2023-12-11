import { WinningPatterns } from "./Constants";

const checkWinner = (board) => {
  for (const pattern of WinningPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
};

const getEmptyPositions = (cells) => {
  let emptyPositions = [];
  if (!cells.some((cell) => cell.value === "")) return emptyPositions;

  cells.forEach((cell) => {
    if (cell.value === "") emptyPositions.push(cell.id);
  });

  return emptyPositions;
};

const getRandomPosition = (cells) => {
  let emptyCells = getEmptyPositions(cells);
  if (emptyCells.length === 0) return -1;

  return emptyCells[Math.floor(Math.random() * emptyCells.length)];
};

export { checkWinner, getEmptyPositions, getRandomPosition };
