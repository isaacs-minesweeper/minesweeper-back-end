import { Router } from 'express';
import Board from '../models/Models.js';
import Minesweeper from '../services/Minesweeper.js';

export default Router()
  .post('/', async (req, res, next) => {
      try {
          console.log('hi!');
          const board = await Minesweeper.create();
          res.send(board);
      } catch (error) {
          next(error);
      }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const board = await Board.getById(id);

      res.send(board);
    }
    catch(err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      console.log('hi!');
      const { id } = req.params;
      const board = await Board.getAll(id);

      res.send(board);
    }
    catch(err) {
      next(err);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const { mines } = req.body;

      const newBoard = await Board.updateById(id, { mines });
      res.send(newBoard);
    }
    catch(err) {
      next(err);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const board = await Board.deleteById(id);
      if(board) {
        res.send({ message: 'new board' });
      }
    }
    catch(err) {
      next(err);
    }
  });