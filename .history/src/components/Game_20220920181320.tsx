import *  as React from 'react'
import styled from 'styled-components'
type LayoutProps={
   gap:number, 
}
const Row=styled.div<LayoutProps>`
    display:flex;
    flex-direction:ro
`;
function Game(){
return(
<div>
    Hello
</div>
);
}
export default Game;