import "./App.css";
import React from "react";
import GameBoard from "./components/GameBoard";
import Popup from "./components/Popup";
import PopupRestart from "./components/PopupRestart";
import StartPage from "./components/StartPage";

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {!isVisible ? (
        <StartPage playerTurn={playerTurn} cells={cells}></StartPage>
      ) : (
        <GameBoard />
      )}
      <Popup></Popup>
      <PopupRestart></PopupRestart>
    </div>
  );
}

export default App;
