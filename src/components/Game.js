import { useState } from "react";

import GameBoard from "./GameBoard";
import StartPage from "./StartPage";

function Game() {
  const [gameMode, setGameMode] = useState("");
  const [playerMark, setPlayerMark] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);

  if (!isGameStarted)
    return (
      <StartPage
        playerMark={playerMark}
        setGameMode={setGameMode}
        setPlayerMark={setPlayerMark}
        isGameStarted={isGameStarted}
        setIsGameStarted={setIsGameStarted}
      />
    );

  return (
    <GameBoard
      gameMode={gameMode}
      playerMark={playerMark}
      setPlayerMark={setPlayerMark}
      restartGame={setIsGameStarted}
    />
  );
}

export default Game;
