/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import PopupRestart from "./PopupRestart";
import Constants from "../Constants";
import Popup from "./Popup";

const svgX = (
  <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
      fill="#31C3BD"
      fillRule="evenodd"
    />
  </svg>
);
const svgO = (
  <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
      fill="#f2b137"
    />
  </svg>
);

const GameBoard = ({ playerMark, setPlayerMark, gameMode, restartGame }) => {
  const [cells, setCells] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ]);
  const [memoryCells, setMemoryCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");
  const computerMark = playerMark === "X" ? "O" : "X";
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (winner === "") return;
    setShowPopupWinner((prev) => !prev);
  }, [winner]);

  useEffect(() => {
    if (playerMark !== turn && gameOver === false) {
      makeComputerMove();
    }
  }, [turn, winner]);

  const checkWinner = (currentBoard) => {
    for (const pattern of Constants.WinningPatterns) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a - 1] &&
        currentBoard[a - 1] === currentBoard[b - 1] &&
        currentBoard[a - 1] === currentBoard[c - 1]
      ) {
        setGameOver((prev) => !prev);
        return currentBoard[a - 1];
      }
    }
    return null;
  };

  useEffect(() => {
    let winner = checkWinner(memoryCells);
    if (winner) setWinner(winner);
  }, [memoryCells, checkWinner]);

  const getAllEmptyPositions = (cells) => {
    if (cells.some((cell) => cell.value === "") === false) return;
    let emptyPositions = [];
    cells.forEach((cell) => {
      if (cell.value === "") emptyPositions.push(cell.id);
    });
    return emptyPositions;
  };

  const getRandomPosition = (cells) => {
    let emptyCells = getAllEmptyPositions(cells);
    let position = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    return position;
  };

  const handleCellClick = (row, col) => {
    if (playerMark === turn) {
      const position = row * 3 + col;
      if (cells[position].value !== "") {
        return;
      }
      setCells((prevCells) => {
        let newCells = [...prevCells];
        newCells[position].value = playerMark === "X" ? svgX : svgO;
        return newCells;
      });
      setMemoryCells((prevMemoryCels) => {
        let newCells = [...prevMemoryCels];
        newCells[position] = playerMark === "X" ? "X" : "O";
        return newCells;
      });
      setTurn(playerMark === "X" ? "O" : "X");
    }
  };

  const makeComputerMove = () => {
    setTimeout(() => {
      let position = getRandomPosition(cells);
      if (cells[position].value !== "" && memoryCells[position] !== "") {
        return;
      } else {
        setCells((prevCells) => {
          let newCells = [...prevCells];
          newCells[position].value = computerMark === "X" ? svgX : svgO;
          return newCells;
        });
        setMemoryCells((prevMemoryCels) => {
          let newCells = [...prevMemoryCels];
          newCells[position] = computerMark === "X" ? "X" : "O";
          return newCells;
        });
        setTurn(playerMark === "X" ? "X" : "O");
        checkWinner(memoryCells);
      }
    }, 1000);
  };

  const [showPopupRestart, setShowPopupRestart] = useState(false);
  const [showPopupWinner, setShowPopupWinner] = useState(false);

  return (
    <div>
      <PopupRestart
        restartGame={restartGame}
        showPopup={showPopupRestart}
        setShowPopup={setShowPopupRestart}
      ></PopupRestart>
      {showPopupWinner ? (
        <Popup
          playerMark={playerMark}
          setPlayerMark={setPlayerMark}
          winner={winner}
          onRestartGame={restartGame}
          onNextRound={""}
        ></Popup>
      ) : null}
      <div className="board">
        <div className="navbar">
          <div>
            <img className="logo" src="assets/logo.svg" alt="logo" />
          </div>
          <button className="turn fs-200 text-secondary-300 fw-bold">
            <div className="player-turn">{turn === "X" ? svgX : svgO}</div> TURN
          </button>
          <button
            className="btn-restart bg-secondary-300"
            onClick={() => {
              setShowPopupRestart(true);
            }}
          >
            <img className="icon-restart" src="assets/icon-restart.svg" alt="restart" />
          </button>
        </div>
        <div className="board-table">
          {cells.map((cell, index) => (
            <button
              className="cell bg-secondary-200"
              key={index}
              onClick={() => handleCellClick(Math.floor(index / 3), index % 3)}
            >
              {cell.value}
            </button>
          ))}
        </div>
        <div className="btn-score">
          <div className="score fs-100 fw-medium bg-primary-100">
            X (YOU)
            <span className="you-score fs-400 fw-bold bg-primary-100">0</span>
          </div>
          <div className="score fs-100 fw-medium bg-secondary-300">
            TIES
            <span className="tie-score fs-400 fw-bold bg-secondary-300">0</span>
          </div>
          <div className="score fs-100 fw-medium bg-primary-300">
            O (CPU)
            <span className="cpu-score fs-400 fw-bold bg-primary-300">0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
