import React from "react";

function Popup({ onQuit, onNextRound }) {
  const handleQuit = () => {
    onQuit();
  };

  const handleNextRound = () => {
    onNextRound();
  };

  return (
    <div className="popup">
      <div className="popup-winner">
        <div className="popup-title fs-200 fw-bold text-secondary-300 bg-secondary-200"></div>
        <div className="popup-subtitle fs-500 fw-bold text-primary-100 bg-secondary-200"></div>
        <button onClick={handleQuit} className="btn-1 btn-quit bg-secondary-300 fs-200 fw-bold">
          QUIT
        </button>
        <button onClick={handleNextRound} className="btn-2 btn-next-round bg-primary-300 fs-200 fw-bold">
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}

export default Popup;
