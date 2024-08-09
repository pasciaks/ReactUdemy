import React from "react";
import { useState } from "react";

export default function NewTask({ onAddTask, onCancel }) {
  const [title, setTitle] = useState("");

  function handleAddClick() {
    if (title.trim() === "") {
      return;
    }
    onAddTask(title);
    setTitle("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        placeholder="Title"
      />
      <button
        onClick={() => {
          console.log(title);
          handleAddClick();
        }}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
