import React from "react";

function PopupRestart({ gameStatus, handleGameUpdate }) {
  return (
    <div className={`popup-restart ${gameStatus === true ? "hidden" : "flex"}`}>
      <div className="popup-container">
        <div>
          <div className="text-secondary-300 fs-500 fw-bold bg-secondary-200">RESTART GAME?</div>
          <div className="bg-secondary-200">
            <button
              onClick={() => handleGameUpdate(false)}
              className="btn-1 btn-restart-1 bg-secondary-300 fs-200 fw-bold"
            >
              NO, CANCEL
            </button>
            <button
              onClick={() => handleGameUpdate(true)}
              className="btn-2 btn-restart-2 bg-primary-300 fs-200 fw-bold"
            >
              YES, RESTART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupRestart;
