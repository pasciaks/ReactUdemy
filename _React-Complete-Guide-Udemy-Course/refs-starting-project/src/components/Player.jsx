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
    // REACT is writing declarative code BUT the below line is IMPERATIVE code!
    // Don't use REFs unless you have to! Use STATE instead!
    // But for small things like this, it's okay!
    playerName.current.value = "";
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
