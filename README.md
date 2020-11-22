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
let make typescript be aware of express:
```
$ npm install --save-dev @types/express
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