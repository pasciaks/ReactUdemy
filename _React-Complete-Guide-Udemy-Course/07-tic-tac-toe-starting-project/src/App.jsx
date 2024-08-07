import React, { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  return gameTurns.length === 0 || gameTurns[0].player === "O" ? "X" : "O";
}

const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
    Draw: "Draw",
  });

  // DERIVE ACTIVE PLAYER FROM gameTurns
  // const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerNameChange(symbol, name) {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: name,
      };
    });
  }

  let activePlayer = deriveActivePlayer(gameTurns);

  // need to deep copy the initialGameBoard
  let gameBoard = JSON.parse(JSON.stringify(initialGameBoard));

  let winner = null;

  for (const turn of gameTurns) {
    const { row, col } = turn.square;
    const player = turn.player;
    gameBoard[row][col] = player;
  }

  // WINNING_COMBINATIONS

  for (const combination of WINNING_COMBINATIONS) {
    let firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    let secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    let thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol) {
      if (
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        // alert("Winner is " + firstSquareSymbol);
        winner = firstSquareSymbol;
      }
    }
  }

  // check for draw
  if (gameTurns.length === 9 && !winner) {
    winner = "Draw";
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // DERIVE ACTIVE PLAYER FROM gameTurns
    // setActivePlayer((prev) => {
    //   return prev === "X" ? "O" : "X";
    // });

    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            onChangeName={handlePlayerNameChange}
            isActive={activePlayer === "X"}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            onChangeName={handlePlayerNameChange}
            isActive={activePlayer === "O"}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        {winner && (
          <GameOver onRestart={handleRestart} winner={players[winner]} />
        )}
        <GameBoard
          board={gameBoard}
          activePlayer={activePlayer}
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
