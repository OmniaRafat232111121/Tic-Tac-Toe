import styled from 'styled-components';
import { BoardState } from './GameState';
im
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
            <button className='Button' onClick={() => props.jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  );
}