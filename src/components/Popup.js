import React from "react";

function Popup({ winner, onQuit, onNextRound, playerMark }) {
  const getMessage = () => {
    if (winner === playerMark) {
      return "YOU WON!";
    } else if (winner && winner !== playerMark) {
      return "OH NO, YOU LOST";
    } else {
      return "ROUND TIED";
    }
  };

  return (
    <div className="popup">
      <div className="popup-winner">
        <div className="popup-title fs-200 fw-bold text-secondary-300 bg-secondary-200">
          {getMessage()}
        </div>
        <div className="popup-subtitle fs-500 fw-bold text-primary-100 bg-secondary-200">
          {winner ? `${winner} TAKES THE ROUND` : "ROUND TIED"}
        </div>
        <button
          onClick={() => onQuit(false)}
          className="btn-1 btn-quit bg-secondary-300 fs-200 fw-bold"
        >
          QUIT
        </button>
        <button
          /* onClick={onNextRound(false)} */
          className="btn-2 btn-next-round bg-primary-300 fs-200 fw-bold"
        >
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}

export default Popup;
