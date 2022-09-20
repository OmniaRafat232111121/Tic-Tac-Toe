import * as React from 'react';
import styled from 'styled-components';
import { Value } from './GameState';
import '../styles/global.ts'
const StyledSquare = styled.button`
  width: 100px;
  height: 100px;
  background:#C62E65;
  border: 4px solid #;
  padding: 0;
  font-size: 30px;
  font-weight: bold;
`;
export type SquareProps = {
  value: Value;
  onClick: () => void;
};
export function Square(props: SquareProps) {
  return (
    <StyledSquare onClick={props.onClick}>
      {props.value}
    </StyledSquare>
  );
}