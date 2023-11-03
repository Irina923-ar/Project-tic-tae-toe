import "./App.css";
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
// import Popup from "./components/Popup";
import StartPage from "./components/StartPage";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      {startGame ? (
        <GameBoard showPopup={handleShowPopup} restartGame={setStartGame} />
      ) : (
        <StartPage startGame={setStartGame} />
      )}
    </div>
  );
}

export default App;
