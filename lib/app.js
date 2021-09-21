import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import minesweeperController from './controllers/routes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/minesweeper', minesweeperController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
