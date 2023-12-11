import React from "react";

function Popup({ winner, onRestartGame, onNextRound, playerMark, setPlayerMark }) {
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
        <div className="popup-title fs-200 fw-bold text-secondary-300 bg-secondary-200">{getMessage()}</div>
        <div className="popup-subtitle fs-500 fw-bold text-primary-100 bg-secondary-200">
          {winner ? `${winner} TAKES THE ROUND` : "ROUND TIED"}
        </div>
        <div className="flex">
          <button
            onClick={() => {
              // onRestartGame(false);
              // setPlayerMark(null);
            }}
            className="btn-1 btn-quit bg-secondary-300 fs-200 fw-bold"
          >
            QUIT
          </button>
          <button className="btn-2 btn-next-round bg-primary-300 fs-200 fw-bold">
            {/* onClick={onNextRound()}  */}
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
