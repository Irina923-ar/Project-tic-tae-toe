/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import Popup from "./Popup";
import PopupRestart from "./PopupRestart";
import { X_SVG, O_SVG } from "../utils/Constants";
import { checkWinner, getRandomPosition } from "../utils/HelperFunctions";

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
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showPopupRestart, setShowPopupRestart] = useState(false);
  const [showPopupWinner, setShowPopupWinner] = useState(false);

  const computerMark = playerMark === "X" ? "O" : "X";

  useEffect(() => {
    if (isGameOver || playerMark === turn) return;
    makeComputerMove();
  }, [turn, isGameOver, playerMark]);

  const handleCellClick = (row, col) => {
    if (playerMark !== turn || isGameOver) return;

    const position = row * 3 + col;
    if (cells[position].value !== "") return;

    let newCells = [...cells];
    let newMemoryCells = [...memoryCells];

    newCells[position].value = playerMark === "X" ? X_SVG : O_SVG;
    newMemoryCells[position] = playerMark === "X" ? "X" : "O";

    let winner = checkWinner(newMemoryCells);

    if (winner !== null) {
      setShowPopupWinner(true);
      setCells(newCells);
      setMemoryCells(newMemoryCells);
      setWinner(winner);
      setIsGameOver(true);
      setTurn(null);
    }
    setCells(newCells);
    setMemoryCells(newMemoryCells);
    setTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  const makeComputerMove = () => {
    let position = getRandomPosition(cells);
    if (position < 0) return;

    let newCells = [...cells];
    let newMemoryCells = [...memoryCells];
    newCells[position].value = computerMark === "X" ? X_SVG : O_SVG;
    newMemoryCells[position] = computerMark === "X" ? "X" : "O";

    let winner = checkWinner(newMemoryCells);

    if (winner !== null) {
      setShowPopupWinner(true);
      setCells(newCells);
      setMemoryCells(newMemoryCells);
      setWinner(winner);
      setIsGameOver(true);
      setTurn(null);
    }

    setCells(newCells);
    setMemoryCells(newMemoryCells);
    setTurn(playerMark === "X" ? "X" : "O");
  };

  return (
    <div>
      {restartGame ? (
        <PopupRestart
          restartGame={restartGame}
          showPopup={showPopupRestart}
          setShowPopup={setShowPopupRestart}
        ></PopupRestart>
      ) : null}

      {showPopupWinner ? (
        <Popup
          playerMark={playerMark}
          setPlayerMark={setPlayerMark}
          winner={winner}
          onRestartGame={restartGame}
          // onNextRound={handleNextRound}
        ></Popup>
      ) : null}

      <div className="board">
        <div className="navbar">
          <div>
            <img className="logo" src="assets/logo.svg" alt="logo" />
          </div>
          <button className="turn fs-200 text-secondary-300 fw-bold">
            <div className="player-turn">{turn === "X" ? X_SVG : O_SVG}</div>{" "}
            TURN
          </button>
          <button
            className="btn-restart bg-secondary-300"
            onClick={() => {
              setShowPopupRestart(true);
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
