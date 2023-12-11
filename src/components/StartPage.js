import { useState } from "react";

const StartPage = ({ setIsGameStarted, playerMark, setPlayerMark, setGameMode }) => {
  const [isAlertShowing, setIsAlertShowing] = useState(false);

  const handleGameStart = (gameMode) => {
    if (playerMark === null) {
      setIsAlertShowing(true);
      return;
    }
    setGameMode(gameMode);
    setIsGameStarted(true);
  };

  return (
    <div className="start-page">
      {/* <img className="logo" src="assets/logo.svg" alt="logo" /> */}
      <div className="card bg-secondary-200">
        <div className="title fs-200 text-secondary-300 fw-bold">Pick player 1's mark</div>
        <div className="btn-switch">
          <button
            name="X"
            onClick={(e) => {
              setPlayerMark(e.target.name);
              setIsAlertShowing(false);
            }}
            className={`switch bg-secondary-100 ${playerMark === "X" ? "switch-active" : ""}`}
          >
            <svg name="X" className="icon" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="#A8BFC9"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            name="O"
            className={`switch bg-secondary-100 ${playerMark === "O" ? "switch-active" : ""}`}
            onClick={(e) => {
              setPlayerMark(e.target.name);
              setIsAlertShowing(false);
            }}
          >
            <svg name="O" className="icon" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="#A8BFC9"
              />
            </svg>
          </button>
        </div>
        <div className="subtitle fs-100 text-secondary-300 fw-medium">Remember: X goes first</div>
        {isAlertShowing && (
          <div
            // TODO: remove inline style
            style={{
              color: "red",
              marginBottom: "5px",
              opacity: "0.7",
            }}
          >
            The player mark is not selected.
          </div>
        )}
      </div>
      <div className="buttons">
        <button
          className="btn btn-start-1 bg-primary-300 text-secondary-100 fs-300 fw-bold"
          onClick={() => {
            handleGameStart("vs-computer");
          }}
        >
          New Game (vs CPU)
        </button>
        <button
          className="btn btn-start-2 bg-primary-100 text-secondary-100 fs-300 fw-bold"
          onClick={() => {
            handleGameStart("vs-player");
          }}
        >
          New Game (vs player)
        </button>
      </div>
    </div>
  );
};

export default StartPage;
