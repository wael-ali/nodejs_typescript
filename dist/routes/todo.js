"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = express_1.Router();
router.get('/', (req, res, next) => {
    res.json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().getTime().toString(),
        text: body.text
    };
    todos.push(newTodo);
    return res.status(201).json({ todo: newTodo });
});
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(item => item.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: tid,
            text: req.body.text
        };
        return res.status(200).json({ todo: todos[todoIndex] });
    }
    res.status(404).json({ message: 'Not Found' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(item => item.id === tid);
    if (todoIndex >= 0) {
        todos = todos.filter(item => item.id !== tid);
        return res.status(200).json({ message: 'Deleted successfully.' });
    }
    res.status(404).json({ message: 'Not Found' });
});
exports.default = router;
