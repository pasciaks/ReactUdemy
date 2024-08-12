import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    let timer = null;
    console.log("Delete confirmation mounted...");
    console.log("Delete confirmation started...");

    timer = setTimeout(() => {
      console.log("timer expired...");
      onConfirm();
    }, 3000);
    return () => {
      console.log("Delete confirmation unmounted...");
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [onConfirm]); // NOTE: use a useCallback to prevent the function from being recreated on every render
  // when adding functions to the dependency array, make sure they are not recreated on every render
  // if they are, you will end up with an infinite loop of mounting and unmounting

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
        <ProgressBar timer={3000} />
      </div>
    </div>
  );
}
