import React, { useState, useRef } from "react";

import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const dialog = useRef();

  const timer = useRef(); // ref good for storing mutable values, component instance specific

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
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
  }

  return (
    <>
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
