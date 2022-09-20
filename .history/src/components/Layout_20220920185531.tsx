import styled from 'styled-components';
type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps> `
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;
export const Title = styled.div<LayoutProps>`
color:green;


`;
export const Column = styled.div<LayoutProps> `
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;