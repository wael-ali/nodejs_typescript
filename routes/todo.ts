import { Router } from 'express';

import { Todo } from '../models/appTypes';
// types aliases
type RequestBody = {text: string};
type RequestParams = {todoId: string};

let todos: Todo[] = [];
const router = Router();

router.get('/', (req, res, next) => {
    res.json({todos: todos});
});

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody;
    const newTodo: Todo = {
        id: new Date().getTime().toString(),
        text: body.text
    };
    todos.push(newTodo);
    return res.status(201).json({todo: newTodo});
});

router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(item => item.id === tid);
    if (todoIndex >= 0){
        todos[todoIndex] = {
            id: tid,
            text: req.body.text
        };
        return res.status(200).json({todo: todos[todoIndex]});
    }
    res.status(404).json({message: 'Not Found'});
});

router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(item => item.id === tid);
    if (todoIndex >= 0){
        todos = todos.filter(item => item.id !== tid);
        return res.status(200).json({message: 'Deleted successfully.'});
    }
    res.status(404).json({message: 'Not Found'});
});

export default router;