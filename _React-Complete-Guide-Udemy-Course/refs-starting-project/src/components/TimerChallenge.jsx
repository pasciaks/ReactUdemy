import React, { useState, useRef } from "react";

import ResultModal from "./ResultModal";
// let sharedValue = 'test'; // shared value between all instances of TimerChallenge

export default function TimerChallenge({ title, targetTime }) {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const dialog = useRef();

  const timer = useRef(); // ref good for storing mutable values, component instance specific

  // let timer; // using variable, means this component recreated at state changes

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    // setTimeRemaining(targetTime * 1000);
    // setTimerStarted(true);
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
      //setTimerExpired(true);
      //dialog.current.open();
    }, 10);
  }

  function handleReset() {
    setTimeRemaining((prev) => targetTime * 1000);
  }

  if (timeRemaining < 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
    // setTimerStarted(false);
  }

  return (
    <>
      {/* {timerExpired && ( */}
      <ResultModal
        onReset={handleReset}
        ref={dialog}
        remainingTime={timeRemaining}
        targetTime={targetTime}
      />
      {/* )} */}
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">{targetTime} second(s)</p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        {/* <p className={timerStarted && !timerExpired ? "active" : ""}>
          {timerStarted ? <p>Timer is running!</p> : <p>Timer is stopped!</p>}
        </p> */}

        {timerIsActive ? (
          <p className={timerIsActive ? "active" : ""}>Timer is running!</p>
        ) : (
          <p>Timer is stopped!</p>
        )}

        {timeRemaining}

        <button>Reset Timer</button>
      </section>
    </>
  );
}
