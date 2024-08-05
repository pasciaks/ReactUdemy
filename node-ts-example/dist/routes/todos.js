"use strict";
// Purpose: To handle all the routes related to todos
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get("/", (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    return res
        .status(201)
        .json({ message: "Added", todo: newTodo, todos: todos });
});
router.put("/todo/:todoId", (req, res, next) => {
    const params = req.params;
    const todoId = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text,
        };
        return res.status(200).json({ message: "Updated", todos: todos });
    }
    else {
        return res.status(404).json({ message: "Todo not found" });
    }
});
router.delete("/todo/:todoId", (req, res, next) => {
    const todoId = req.params.todoId;
    todos = todos.filter((todoItem) => todoItem.id !== todoId);
    return res.status(200).json({ message: "Deleted", todos: todos });
});
exports.default = router;
