import *  as React from 'react'
import styled from 'styled-components'
type LayoutProps={
   gap:number, 
}
const Row=styled.div<LayoutProps>`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:30px;
    flex-direction:row;
    gap:${(props)=>props.gap}px;
`;
const Column=styled.div<LayoutProps>`

    display:flex;
    flex-direction:column;
    gap:${(props)=>props.gap}px;

`
function Game(){
    const {
        gameState,
        current,
        xIsNext,
        jumpTo,
        winner,
        handleClick,
      } = use
    
return(
<Row gap={20}>
      <Column gap={20}>
        <div>{
          winner
            ? `Winner ${winner}`
            : `Next Player ${xIsNext ? 'X' : 'O'}`
        }</div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo}/>
    </Row>
);
}
type BoardProps = {
    board: BoardState;
    onClick: (square: number) => void;
  };
  export function Board({ board, onClick }: BoardProps) {
    const createProps = (square: number): SquareProps => {
      return {
        value: board[square],
        onClick: () => onClick(square),
      };
    };
    return (
      <Column gap={0}>
        <Row gap={0}>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>
    );
  }
const StyledSquare = styled.button`
  width: 34px;
  height: 34px;
  background:#fff;
  border: 1px solid #999;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;
function Square(){
    return(
        <StyledSquare>
            x
        </StyledSquare>

    );

}
function Log(){
    return(
        <ol>
            <li><button> Go to Move</button></li>
        </ol>
    )
}
export default Game;