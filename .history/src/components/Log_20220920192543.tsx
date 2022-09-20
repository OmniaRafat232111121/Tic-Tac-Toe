import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { BoardState } from './GameState';
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
            <Button    onClick={() => props.jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </Button>
          </li>
        );
      })}
    </ol>
  );
}