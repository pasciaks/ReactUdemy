import React, { useState } from "react";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={`r-${turn.square.row}-c-${turn.square.col}`}>
          <span className="player-name2">Player: {turn.player} </span>
          <span className="player-symbol2">Row: {turn.square.row} </span>
          <span className="player-symbol2">Col: {turn.square.col}</span>
        </li>
      ))}
    </ol>
  );
}
