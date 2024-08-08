import React, { useImperativeHandle, useRef, forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialog.current.showModal();
    },
  }));

  return (
    <dialog ref={dialog} className="result-modal">
      <div className="modal">
        <div className="modal-content">
          <h2>Game Over {result}</h2>
          <p>Time: Target was {targetTime} seconds</p>
          <p>You stopped with X seconds left.</p>
          <form method="dialog">
            <button>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default ResultModal;
