import React, { useEffect, useState } from "react";

const TIMER = 3000;
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    let ticker = setInterval(() => {
      console.log("ticker interval tick...");
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("ticker  unmounted...");
      if (ticker) {
        console.log("ticker  cleared...");
        clearInterval(ticker);
      }
    };
  }, []);

  return <progress value={remainingTime} max={TIMER} />;
}
