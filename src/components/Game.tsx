import * as React from 'react';
import { useGameState } from './GameState';
import { Log } from './Log';
import { Board } from './Board';
import { Row, Column } from './Layout';

function Game() {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();

  return (
    <Row gap={50}>
      <Column gap={50}>
        <div >{
          winner
            ? `Winner ${winner}`
            : `Next Player: ${xIsNext ? 'X' : 'O'}`
        }</div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo}/>
    </Row>
  );
}
export default Game;