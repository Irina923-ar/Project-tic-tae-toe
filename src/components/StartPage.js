import React, { useState } from "react";

function StartPage({ startGame }) {
  const [secondPlayerMark, setSecondPlayerMark] = useState("O");
  const svgX = (
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
        fill="#31C3BD"
        fill-rule="evenodd"
      />
    </svg>
  );
  const svgO = (
    <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
        fill="#F2B137"
      />
    </svg>
  );
  /* const [board, setBoard] = useState(Array(9).fill('')); */
  const [gameMode, setGameMode] = useState("vs-computer");
  const [valueArray, setValueArray] = useState([]);
  const [playerOneChoices, setPlayerOneChoices] = useState([]);
  const [playerTwoChoices, setPlayerTwoChoices] = useState([]);
  const [clickCounter, setClickCounter] = useState(0);
  const [scoreYou, setScoreYou] = useState(0);
  const [scoreTie, setScoreTie] = useState(0);
  const [scoreCpu, setScoreCpu] = useState(0);
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  const initializeGame = () => {
    setValueArray(Array(9).fill(""));
    setPlayerOneChoices([]);
    setPlayerTwoChoices([]);
    setClickCounter(0);
    // setPlayerTurn("X");
    setIsComputerTurn(false);
  };

  const winningPatterns = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const boardIsFull = (cells) => {
    return cells.every((cell) => cell === "X" || cell === "O");
  };

  // const cellClickHandlerPlayer = (e) => {
  //   const target = e.target;

  //   target.innerHTML = currentPlayer;

  //   if (currentPlayer === "X") {
  //     setCurrentPlayer("O");
  //   } else {
  //     setCurrentPlayer("X");
  //   }

  //   setClickCounter((prevCounter) => prevCounter + 1);

  //   const winner = checkWinner();
  //   if (winner === "X") {
  //     calculateScore(true, false);
  //     setPlayerOneScore((prevScore) => prevScore + 1);
  //   } else if (winner === "O") {
  //     calculateScore(false, true);
  //     setPlayerTwoScore((prevScore) => prevScore + 1);
  //   } else if (clickCounter === 8) {
  //     calculateScore(false, false);
  //     setTieScore((prevScore) => prevScore + 1);
  //   }

  //   checkWinner();
  // };

  // const makeComputerMove = () => {
  //   const emptyCells = Array.from(cells).filter((cell) => cell.innerHTML === "");
  //   const randomIndex = Math.floor(Math.random() * emptyCells.length);
  //   const cell = emptyCells[randomIndex];
  //   cell.innerHTML = computerChoices[0];

  //   setClickCounter((prevCounter) => prevCounter + 1);

  //   if (currentPlayer === "X") {
  //     setCurrentPlayer("O");
  //   } else {
  //     setCurrentPlayer("X");
  //   }

  //   const winner = checkWinner();
  //   if (winner === "X") {
  //     calculateScore(true, false);
  //     setPlayerOneScore((prevScore) => prevScore + 1);
  //   } else if (winner === "O") {
  //     calculateScore(false, true);
  //     setPlayerTwoScore((prevScore) => prevScore + 1);
  //   } else if (clickCounter >= 8) {
  //     calculateScore(false, false);
  //     setTieScore((prevScore) => prevScore + 1);
  //   } else {
  //     setIsComputerTurn(false);
  //   }

  //   checkWinner();
  // };

  // const cellClickHandlerComputer = (e) => {
  //   if (isComputerTurn) {
  //     return;
  //   }

  //   const target = e.target;
  //   target.innerHTML = playerOneChoices[0];

  //   setClickCounter((prevCounter) => prevCounter + 1);

  //   if (currentPlayer === "X") {
  //     setCurrentPlayer("O");
  //   } else {
  //     setCurrentPlayer("X");
  //   }

  //   const winner = checkWinner();
  //   if (winner === "X") {
  //     calculateScore(true, false);
  //     setPlayerOneScore((prevScore) => prevScore + 1);
  //     setIsComputerTurn(false);
  //   } else if (winner === "O") {
  //     calculateScore(false, true);
  //     setPlayerTwoScore((prevScore) => prevScore + 1);
  //     setIsComputerTurn(false);
  //   } else if (clickCounter >= 8) {
  //     calculateScore(false, false);
  //     setTieScore((prevScore) => prevScore + 1);
  //     setIsComputerTurn(false);
  //   } else {
  //     setIsComputerTurn(true);
  //     setTimeout(makeComputerMove, 500);
  //   }

  //   checkWinner();
  // };

  // const checkWinner = (currentBoard) => {
  //   for (const pattern of winningPatterns) {
  //     const [a, b, c] = pattern;
  //     if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
  //       setWinner(currentBoard[a]);
  //       return;
  //     }
  //   }
  // };

  const isCombinationWinner = (combination, cells) => {
    const [a, b, c] = combination;
    const cellA = cells[a - 1];
    const cellB = cells[b - 1];
    const cellC = cells[c - 1];

    const symbolA = cellA.innerHTML;
    const symbolB = cellB.innerHTML;
    const symbolC = cellC.innerHTML;

    return symbolA !== "" && symbolA === symbolB && symbolB === symbolC;
  };

  const onStartGamePlayer = (e) => {
    // Add your logic here
  };

  const onStartGameCPU = (e) => {
    // Add your logic here
  };

  // const handleStartGamePlayer = () => {
  //   onStartGamePlayer(secondPlayerMark);
  //   setIsVisible(false);
  // };

  // const handleStartGameCPU = () => {
  //   onStartGameCPU(secondPlayerMark);
  //   setIsVisible(false);
  // };

  const selectXMark = () => {
    setSecondPlayerMark(svgX);
  };

  const selectOMark = () => {
    setSecondPlayerMark(svgO);
  };

  /*   const checkWinner = () => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (board[a - 1] === 'X' && board[b - 1] === 'X' && board[c - 1] === 'X') {
        return 'X';
      } else if (board[a - 1] === 'O' && board[b - 1] === 'O' && board[c - 1] === 'O') {
        return 'O';
      }
    }

    return null;
  }
 */

  // const toggleGameVisibility = () => {
  //   setIsVisible(!isVisible);
  // };

  const [playerMark, setPlayerMark] = useState("");

  const handlePlayerMark = (e) => {
    if (playerMark === e.target.name) return;
    setPlayerMark(e.target.name);
  };

  return (
    <div className="start-page">
      <img className="logo" src="assets/logo.svg" alt="logo" />
      <div className="card bg-secondary-200">
        <div className="title fs-200 text-secondary-300 fw-bold">
          Pick player 1's mark
        </div>
        <div className="btn-switch">
          <button
            name="X"
            onClick={handlePlayerMark}
            className={`switch bg-secondary-100 ${
              playerMark === "X" ? "switch-active" : ""
            }`}
          >
            <svg
              name="X"
              className="icon"
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                fill="#A8BFC9"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button
            name="O"
            onClick={handlePlayerMark}
            className={`switch bg-secondary-100 ${
              playerMark === "O" ? "switch-active" : ""
            }`}
          >
            <svg
              name="O"
              className="icon"
              width="64"
              height="64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
                fill="#A8BFC9"
              />
            </svg>
          </button>
        </div>
        <div className="subtitle fs-100 text-secondary-300 fw-medium">
          Remember: X goes first
        </div>
      </div>
      <div className="buttons">
        <button
          onClick={() => {
            startGame(true);
            // handleStartGameCPU();
          }}
          className="btn btn-start-1 bg-primary-300 text-secondary-100 fs-300 fw-bold"
        >
          New Game (vs CPU)
        </button>
        <button
          onClick={() => {
            startGame(true);
            // handleStartGamePlayer();
          }}
          className="btn btn-start-2 bg-primary-100 text-secondary-100 fs-300 fw-bold"
        >
          New Game (vs player)
        </button>
      </div>
    </div>
  );
}

export default StartPage;
