import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Minesweeper from '../lib/services/Minesweeper.js'

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('post request for a board', async () => {
    const res = await request(app)
      .post('/api/v1/minesweeper')
      .send(null);

    expect(res.body.mines).toHaveLength(959);
  });
  it('gets a board by id', async () => {
    const board = await Minesweeper.create();
    const res = await request(app)
    .get('/api/v1/minesweeper/1')

    expect(res.body.mines).toHaveLength(959);
  })
  it('gets all boards for some reason', async () => {
    const board1 = await Minesweeper.create();
    const board2 = await Minesweeper.create();
    const res = await request(app)
    .get('/api/v1/minesweeper/')

    expect(res.body).toEqual([board1, board2]);
  })
  it('updates a board, because sometimes a mine just needs to be added to the button youre clicking', async () => {
    const board = await Minesweeper.create();
    const res = await request(app)
    .put('/api/v1/minesweeper/1')
    .send({ mines: 'yerrrrrrrrr' })

    expect(res.body.mines).toEqual('yerrrrrrrrr');
  })
  it('deletes a board', async () => {
    const board = await Minesweeper.create();
    const res = await request(app)
      .delete('/api/v1/minesweeper/1');

    expect(res.body).toEqual({ message: 'bye board' })
  })
  afterAll(() => {
    pool.end();
  });
});
