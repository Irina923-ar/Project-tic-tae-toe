import "./App.css";
import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
// import Popup from "./components/Popup";
import PopupRestart from "./components/PopupRestart";
import StartPage from "./components/StartPage";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      {startGame ? (
        <GameBoard showPopup={setShowPopup} />
      ) : (
        <StartPage startGame={setStartGame} />
      )}

      {/* <Popup></Popup> */}
      <PopupRestart
        restartGame={setStartGame}
        showPopup={setShowPopup}
      ></PopupRestart>
    </div>
  );
}

export default App;
