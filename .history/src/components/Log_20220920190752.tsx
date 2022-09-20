import * as React from 'react';
import { BoardState } from './GameState';
import "./Layout"
export const Button = styled.butto
type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;
};
export function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button  onClick={() => props.jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}