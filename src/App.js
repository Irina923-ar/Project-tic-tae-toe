import "./App.css";
import React, { useState } from "react";
// import GameBoard from "./components/GameBoard";
// import Popup from "./components/Popup";
// import PopupRestart from "./components/PopupRestart";
import StartPage from "./components/StartPage";

function App() {
  const [startGame, setStartGame] = useState(false);

  return (
    <div>
      {/* {!isVisible ? <StartPage></StartPage> : <GameBoard />} */}
      <StartPage />
      {/* <Popup></Popup> */}

      {/* <PopupRestart gameStatus={startGame} handleGameUpdate={setStartGame}></PopupRestart> */}
    </div>
  );
}

export default App;
