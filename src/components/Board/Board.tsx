import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { BoardModel } from '../../models/BoardModel';
import { CellModel } from '../../models/CellModel';
import Player from '../../models/Player';
import Cell from '../Cell/Cell';
import "./Board.css";

interface IBoard {
    board: BoardModel;
    setBoard: (board: BoardModel) => void;
    swapPlayer: () => void;
    currentPlayer: Player | null;
};

const Board: FC<IBoard> = ({ board, setBoard, swapPlayer, currentPlayer }) => {
    const [selectedCell, setSelectedCell] = useState<CellModel | null>(null);
    const click = (cell: CellModel) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
            updateBoard();
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            };
        }
    };
    const highlightCell = () => {
        board.highlightCells(selectedCell);
        updateBoard();
    };
    const updateBoard = () => {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    };
    useEffect(() => {
        highlightCell()
    }, [selectedCell]);
    return (
        <div className='Board'>
            <div className="Board_inner">
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <Cell
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y ? true : false}
                                click={click}
                            />
                        )}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
};

export default Board;
