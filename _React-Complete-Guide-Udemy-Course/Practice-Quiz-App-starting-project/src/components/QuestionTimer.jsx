import React, { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout");
    let timerTimeout = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timerTimeout);
    };
  }, [onTimeout, onTimeout]);

  useEffect(() => {
    console.log("setting setInterval");
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}
