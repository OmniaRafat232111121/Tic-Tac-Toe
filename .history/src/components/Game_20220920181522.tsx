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
    

`
function Game(){
return(
<div>
    Hello
</div>
);
}
export default Game;