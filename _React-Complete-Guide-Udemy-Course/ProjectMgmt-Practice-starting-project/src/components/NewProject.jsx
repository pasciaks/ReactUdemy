import React, { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

import Modal from "./Modal";

export default function NewProject({ onAdd, handleCancelAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalRef = useRef();

  const handleSave = () => {
    console.log(title.current.value);
    console.log(description.current.value);
    console.log(dueDate.current.value);

    let title2 = title.current.value.trim();
    let description2 = description.current.value.trim();
    let dueDate2 = dueDate.current.value.trim();

    if (title2 === "" || description2 === "" || dueDate2 === "") {
      modalRef.current.open();
      return;
    }

    let newProject = {
      title: title2,
      description: description2,
      dueDate: dueDate2,
    };
    onAdd(newProject);
  };

  return (
    <>
      <Modal ref={modalRef}>
        <div>
          <h2 className="text-xl font-bold">Invalid Input</h2>
          <p className="text-stone-800">
            Oops! Looks like you forgot to enter a value.
          </p>
          <p className="text-stone-800">
            Please provide valid values for all input fields.
          </p>
        </div>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Button onClick={handleCancelAddProject} type="submit">
              Cancel
            </Button>
          </li>
          <li>
            <Button onClick={handleSave} type="submit">
              Save
            </Button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} isTextarea label="Desc" />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
