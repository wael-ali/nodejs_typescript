import { Router } from 'express';

import { Todo } from '../models/appTypes';

const todos: Todo[] = [];
const router = Router();

router.get('/', (req, res, next) => {
    res.json({todos: todos});
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toTimeString(),
        text: req.body.text

    };
    todos.push(newTodo);
});

export default router;