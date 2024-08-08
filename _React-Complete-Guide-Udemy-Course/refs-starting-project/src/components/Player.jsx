import React, { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayername, setEnteredPlayername] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  const playerName = useRef();

  // function handleChange(e) {
  //   setSubmitted(false);
  //   setEnteredPlayername(e.target.value);
  // }

  function handleClick() {
    setEnteredPlayername(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayername ?? "unknown entity!"}</h2>
      <p>
        <input
          ref={playerName}
          // value={enteredPlayername}
          // onChange={handleChange}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
