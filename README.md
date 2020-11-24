# Nodejs & Typescript
```
$ cd to/your/empty/folder
```
create tsconfig.json file
```
$ tsc --init 
```
make it an npm controlled project
this will create package.json
```
$ npm init
```
install express and bodyparser:
```
$ npm install --save express body-pareser
```
create the node application file app.js:
```
$ touch app.ts
```
open the app.ts file and create simple node app
```
const express = require('express');

const app = express();

app.listen(3000);
```
Typescript dose not undersatnd require to be able to use it we need install @types/node package.
@types is important it provide typescript translations for js features and allow typescript understand certain js code.
```
$ npm install --save-dev @types/node
```
let make typescript be aware of express, body-parser:
```
$ npm install --save-dev @types/express 
$ npm install --save-dev @types/body-parswer 
```
to let the vcode IDE more helpful we can tweak the tsconfig.json as follows
```
    .
    .
    "target": "es6",
    "module": "commonjs",
    "moduleResolution": "node",
    .
    .
```
with that let us go and change our require in app.ts to import (normaly used on client js):
```
import express from 'express';

const app = express();

app.listen(3000); 
```
compile the .ts files into js:
```
$ tsc
```
create our routes for small todo app:
```
$ mkdir routes
$ touch todo.ts
```
create the todo routes copy this code:
```
// routes/todo.ts

import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
    res.json({todos: todos});
});

export default router;
```
use it in the app.ts
```
// app.ts
import express from 'express';

import todoRoutes from './routes/todo';

const app = express();

app.use(todoRoutes);

app.listen(3000); 
```
create model folder for our custom types and interfaces
```
$ mkdir models
$ touch models/appTypes.ts
```
Create our first type or interface
```
// modles/appTypes.ts

export interface Todo {
    id: string;
    text: string;
};
```
imported the new type/interface in our route and used it.
```
// routes/todo.ts
.
.
import { Todo } from '../models/appTypes';

let todos: Todo[] = [];
.
.

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toTimeString(),
        text: req.body.text

    };
    todos.push(newTodo);
    return res.status(201).json({todo: newTodo});
});

router.put('/todo/:id', (req, res, next) => {
    const tid = req.params.id;
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

router.delete('/todo/:id', (req, res, next) => {
    const tid = req.params.id;
    const todoIndex = todos.findIndex(item => item.id === tid);
    if (todoIndex >= 0){
        todos = todos.filter(item => item.id !== tid);
        return res.status(200).json({message: 'Deleted successfully.'});
    }
    res.status(404).json({message: 'Not Found'});
});
```
let us compile our app and run it.
```
$ tsc
// node runs only js files.
$ node app.js
```
you can test it with postman
## other thing typescript offer for us is type casting:
to avoid developers unwanted errors we can define new type aliases for the req.body and req.params as follows in **routes/todo.ts**
```
// types aliases
type RequestBody = {text: string};
type RequestParams = {todoId: string};
```
and use them in the post, put, delete routes
```
const body = req.body as RequestBody;
const params = req.params as RequestParams;
```
# j



