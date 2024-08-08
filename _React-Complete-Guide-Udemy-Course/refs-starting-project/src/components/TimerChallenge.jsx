import React, { useState, useRef } from "react";

import ResultModal from "./ResultModal";
// let sharedValue = 'test'; // shared value between all instances of TimerChallenge

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const dialog = useRef();

  const timer = useRef(); // ref good for storing mutable values, component instance specific

  // let timer; // using variable, means this component recreated at state changes

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
  }

  return (
    <>
      {/* {timerExpired && ( */}
      <ResultModal
        ref={dialog}
        result="You lost!"
        targetTime={targetTime}
        onReset={() => {}}
      />
      {/* )} */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} second(s)</p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        {/* <p className={timerStarted && !timerExpired ? "active" : ""}>
          {timerStarted ? <p>Timer is running!</p> : <p>Timer is stopped!</p>}
        </p> */}

        {timerStarted ? (
          <p className={timerStarted && !timerExpired ? "active" : ""}>
            Timer is running!
          </p>
        ) : (
          <p>Timer is stopped!</p>
        )}

        <button>Reset Timer</button>
      </section>
    </>
  );
}
