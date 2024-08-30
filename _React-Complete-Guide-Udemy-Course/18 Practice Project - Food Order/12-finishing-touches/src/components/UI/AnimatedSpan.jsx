import React, { useState, useEffect } from "react";

function AnimatedSpan({ value }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation
    setAnimate(true);

    // Remove the animation class after the animation is done
    const timeout = setTimeout(() => setAnimate(false), 300); // Match the animation duration
    return () => clearTimeout(timeout);
  }, [value]); // Run the effect whenever 'value' changes

  return (
    <span
      style={{ animationDelay: ".1s" }}
      className={animate ? "growFont" : ""}
    >
      {value}
    </span>
  );
}

export default AnimatedSpan;
