import makeBoard from '../utils/board.js';
import Board from '../models/Models.js';

class Minesweeper {
    static async create() {
        const newBoard = makeBoard();
        const board = await Board.insertBoard(newBoard);
        return board;
    }
}

export default Minesweeper;
