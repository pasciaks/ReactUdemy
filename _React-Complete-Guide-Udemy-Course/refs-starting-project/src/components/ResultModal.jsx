import React, { useImperativeHandle, useRef, forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, onReset, targetTime },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <div className="modal">
        <div className="modal-content">
          <h2>Game Over</h2>
          {userLost ? <p>You lost!</p> : <p>You won! {score}</p>}
          <p>Time: Target was {targetTime} seconds</p>
          <p>You stopped with {formattedRemainingTime} seconds left.</p>
          <form method="dialog" onSubmit={onReset}>
            <button>Close</button>
          </form>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
