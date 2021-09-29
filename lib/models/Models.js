import pool from '../utils/pool.js';

class Board {
    id;
    mines;

    constructor(board) {
        this.id = board.id;
        this.mines = board.mines;
    }

    static async insertBoard(board) {
        const mines = await pool.query(
            'INSERT INTO board (mines) VALUES ($1) RETURNING *', [board.toString()]
        );
        return new Board(mines.rows[0]);
    }

    static async getById(id) {
        const { rows } = await pool.query('SELECT * FROM board WHERE id=$1', [id]);
        return new Board(rows[0]);
    }

    static async getAll() {
      const { rows } = await pool.query('SELECT * from board');
  
      return rows.map((mine) => new Board(mine));
    }

    static async updateById(id, { mines }) {
        const currentMines = await Board.getById(id);
        const newMines = mines.toString() ?? currentMines.mines;
        const { rows } = await pool.query('UPDATE board SET mines=$1 WHERE id=$2 RETURNING *', [newMines, id])
        return (rows[0]);
    }

    static async deleteById(id) {
        const { rows } = await pool.query('DELETE FROM board WHERE id=$1 RETURNING *', [id]);

        return new Board(rows[0])
    }
}

export default Board;
