import express from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes/todo';

const app = express();
// parsing the request
app.use(bodyParser.json());
// Routes
app.use(todoRoutes);
// Runnig the application on port 3000
app.listen(3000); 