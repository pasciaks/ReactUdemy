import { createPortal } from "react-dom";
import { forwardRef, useRef, useImperativeHandle } from "react";
import Button from "./Button";

let Modal = forwardRef(function Modal(
  { children, buttonCaption = "Close" },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      console.log("open");
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md text-center"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
