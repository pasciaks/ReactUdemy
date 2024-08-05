// Purpose: To handle all the routes related to todos

import { Router } from "express";

import { Todo } from "../models/todo";

let todos: Todo[] = [];

type RequestBody = {
  text: string;
};

type RequestParams = {
  todoId: string;
};

const router = Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  return res
    .status(201)
    .json({ message: "Added", todo: newTodo, todos: todos });
});

router.put("/todo/:todoId", (req, res, next) => {
  const params = req.params as RequestParams;
  const todoId = params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: req.body.text,
    };
    return res.status(200).json({ message: "Updated", todos: todos });
  } else {
    return res.status(404).json({ message: "Todo not found" });
  }
});

router.delete("/todo/:todoId", (req, res, next) => {
  const todoId = req.params.todoId;
  todos = todos.filter((todoItem) => todoItem.id !== todoId);
  return res.status(200).json({ message: "Deleted", todos: todos });
});

export default router;
