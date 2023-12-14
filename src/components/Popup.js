import React from "react";

function Popup({
  winner,
  onRestartGame,
  onNextRound,
  playerMark,
  setPlayerMark,
  memoryCells,
}) {
  const getMessage = () => {
    if (winner === playerMark) {
      return "YOU WON!";
    } else if (winner && winner !== playerMark) {
      return "OH NO, YOU LOST";
    } else {
      return;
    }
  };
  console.log(memoryCells);
  const getWinnerSubtitle = () => {
    if (winner) {
      let subtitleColorClass;

      if (winner === "X") {
        subtitleColorClass = "text-x-color";
      } else if (winner === "O") {
        subtitleColorClass = "text-o-color";
      }
      return (
        <div className={`popup-subtitle fs-500 fw-bold ${subtitleColorClass}`}>
          {`${winner} TAKES THE ROUND`}
        </div>
      );
    } else {
      return (
        <div className="popup-subtitle fs-500 fw-bold text-secondary-300">
          ROUND TIED
        </div>
      );
    }
  };

  return (
    <div className="popup">
      <div className="popup-winner">
        <div className="popup-title fs-200 fw-bold text-secondary-300 bg-secondary-200">
          {getMessage()}
        </div>
        {getWinnerSubtitle()}
        <div className="flex">
          <button
            onClick={() => {
              onRestartGame(false);
              setPlayerMark(null);
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
