import React, { useEffect, useState } from 'react';
import './App.css';
import { Board, LostFigures } from './components';
import { BoardModel } from './models/BoardModel';
import { Colors } from './models/Colors';
import Player from './models/Player';

function App() {
  const [board, setBoard] = useState(new BoardModel());
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    restart();
  }, []);
  const restart = () => {
    setCurrentPlayer(whitePlayer);
    const newBoard = new BoardModel();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };
  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  };
  return (
    <>
      <p>{`Сейчас ходит ${currentPlayer?.color}`}</p>
      <div className="App">
        <Board
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <LostFigures title='Потерянные черные фигуры' figures={board.lostBlackFigures}/>
        <LostFigures title='Потерянные белые фигуры' figures={board.lostWhiteFigures}/>
      </div>
    </>
  );
};

export default App;
