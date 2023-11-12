import { useState } from "react";
import PopupRestart from "./PopupRestart";
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

const GameBoard = ({ winner, checkWinner, restartGame }) => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [memoryCells, setMemoryCells] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState(svgX);
  const [playerMark, setPlayerMark] = useState("");

  const handleCellClick = (row, col) => {
    const newCells = [...cells];
    const newMemoryCells = [...memoryCells];
    if (newCells[row * 3 + col] === "") {
      newCells[row * 3 + col] = playerTurn === svgX ? svgX : svgO;
      newMemoryCells[row * 3 + col] = playerTurn === svgX ? "X" : "O";
      setCells(newCells);
      setMemoryCells(newMemoryCells);
      setPlayerTurn(playerTurn === svgX ? svgO : svgX);
      setPlayerMark(playerMark === svgX ? "X" : "O");
      checkWinner(newMemoryCells);
    }
  };

  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <PopupRestart
        restartGame={restartGame}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      ></PopupRestart>
      <Popup
        playerMark={playerMark}
        winner={winner}
        onQuit={restartGame}
        onNextRound={""}
      ></Popup>
      <div className="board">
        <div className="navbar">
          <div>
            <img className="logo" src="assets/logo.svg" alt="logo" />
          </div>
          <button className="turn fs-200 text-secondary-300 fw-bold">
            <div className="player-turn">{playerTurn}</div> TURN
          </button>
          <button
            className="btn-restart bg-secondary-300"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            <img
              className="icon-restart"
              src="assets/icon-restart.svg"
              alt="restart"
            />
          </button>
        </div>
        <div className="board-table">
          {cells.map((cell, index) => (
            <button
              className="cell bg-secondary-200"
              key={index}
              onClick={() => handleCellClick(Math.floor(index / 3), index % 3)}
            >
              {cell}
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
