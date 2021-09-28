import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

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
  afterAll(() => {
    pool.end();
  });
});
