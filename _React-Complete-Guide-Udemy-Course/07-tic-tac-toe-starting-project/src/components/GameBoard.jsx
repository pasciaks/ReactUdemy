import React, { useState } from "react";

export default function GameBoard({ board, turns, onSelectSquare }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // update in immutable approach
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayer;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  // }

  // let gameBoard = initialGameBoard;

  // if (turns && turns.length > 0) {
  //   // deriving state from turns in props
  //   gameBoard = turns.reduce((acc, turn) => {
  //     const { row, col } = turn.square;
  //     const player = turn.player;
  //     acc[row][col] = player;
  //     return acc;
  //   }, initialGameBoard);
  // }

  function checkForDisabled(rowIndex, colIndex) {
    if (board[rowIndex][colIndex] !== null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={"r" + rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={"c" + colIndex}>
                <button
                  disabled={checkForDisabled(rowIndex, colIndex)}
                  className="cell"
                  data-row={rowIndex}
                  data-cell={colIndex}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
