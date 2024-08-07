import React, { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEdit = () => {
    // NOTE: always update state based on previous value
    setIsEditing((prev) => {
      return !prev;
    });
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  //   const nameOrInput = () => {
  //     if (isEditing) {
  //       let p1= <input type="text" defaultValue={name} />;
  //     } else {
  //       let p2 = <span className="player-name">{name}</span>;
  //     }
  //   };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input onChange={handleChange} type="text" value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {/* {nameOrInput()} */}
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
