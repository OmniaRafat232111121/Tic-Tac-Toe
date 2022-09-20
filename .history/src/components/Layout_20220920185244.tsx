import styled from 'styled-components';
type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps> `
  display: flex;
  align-items:center;
  justify-content:center;
  margin-top:40p
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;