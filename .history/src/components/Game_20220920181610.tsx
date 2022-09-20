import *  as React from 'react'
import styled from 'styled-components'
type LayoutProps={
   gap:number, 
}
const Row=styled.div<LayoutProps>`
    display:flex;
    flex-direction:row;
    gap:${(props)=>props.gap}px;
`;
const column=styled.div<LayoutProps>`
    display:flex;
    flex-direction:column;
    gap:${(props)=>props.gap}px;

`
function Game(){
return(
<Column gap={20}>
    <div>Like</div>
    <div>Share</div>
    <div></div>

</Column>
);
}
export default Game;