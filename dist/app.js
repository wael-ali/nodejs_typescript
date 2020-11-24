"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = express_1.default();
// parsing the request
app.use(body_parser_1.default.json());
// Routes
app.use(todo_1.default);
// Runnig the application on port 3000
app.listen(3000);
