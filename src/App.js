import "./App.css";
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import StartPage from "./components/StartPage";
import Constants from "./Constants";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [winner, setWinner] = useState("");

  const checkWinner = (currentBoard) => {
    for (const pattern of Constants.WinningPatterns) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a - 1] === currentBoard[b - 1] &&
        currentBoard[a - 1] === currentBoard[c - 1] &&
        currentBoard[b - 1] === currentBoard[c - 1]
      ) {
        setWinner(currentBoard[a - 1]);
        return;
      }
    }
  };

  return (
    <div>
      {startGame ? (
        <>
          <GameBoard winner={winner} checkWinner={checkWinner} restartGame={setStartGame} />
        </>
      ) : (
        <StartPage startGame={setStartGame} />
      )}
    </div>
  );
}

export default App;
