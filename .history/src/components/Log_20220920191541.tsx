import * as React from 'react';
import styled from 'styled-components';
import { BoardState } from './GameState';
type LogProps = {
  history: BoardState[];
  jumpTo: (step: number) => void;

};
export const Button = styled.button<LogProps>`
background-color:green;
`;
export function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button class onClick={() => props.jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}