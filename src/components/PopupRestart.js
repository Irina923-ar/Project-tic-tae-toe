import React from "react";

function PopupRestart({ restartGame, showPopup, setShowPopup }) {
  return (
    <div className={`popup-restart ${showPopup === true ? "flex" : "hidden"}`}>
      <div className="popup-container">
        <div className="content">
          <div className="text-secondary-300 fs-500 fw-bold bg-secondary-200">
            RESTART GAME?
          </div>
          <div className="bg-secondary-200">
            <button
              onClick={() => setShowPopup(false)}
              className="btn-1 btn-restart-1 bg-secondary-300 fs-200 fw-bold"
            >
              NO, CANCEL
            </button>
            <button
              onClick={() => restartGame(false)}
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
