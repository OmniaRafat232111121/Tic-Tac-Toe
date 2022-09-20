import styled from 'styled-components';
type LayoutProps = {
  gap: number;
};

export const R = styled.div<LogProps></LogProps>
export const Row = styled.div<LayoutProps> `
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: row;
  font-size:40px;
  gap: ${(props) => props.gap}px;
`;
export const Title = styled.div<LayoutProps>`
/* color:green;
padding:50px; */

`;

export const Column = styled.div<LayoutProps> `
  display: flex;
  flex-direction: column;
  padding:30px;
  font-size:40px;
  gap: ${(props) => props.gap}px;
`;