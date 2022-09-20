import *  as React from 'react'
import styled from 'styled-components'
type LayoutProps={
   gap:number, 
}
const Row=styled.div<LayoutProps>`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:30px;
    flex-direction:row;
    gap:${(props)=>props.gap}px;
`;
const Column=styled.div<LayoutProps>`

    display:flex;
    flex-direction:column;
    gap:${(props)=>props.gap}px;

`
function Game(){
return(
    
<Row gap={20}>
<Column gap={20}>
    <div>Status</div>
    <Board/>
</Column>
<Log/>
</Row>
);
}
function Board(){
    return(
        <div>TODO:Board</div>
    )
}
const StyledQuare=styled.button` 
width:34px;
height:34px;
background:#fff;
border:1px solid #999;
padding:0;
font-size:24px;
font-weight:bold;
`;
function square(props:sq)
function Log(){
    return(
        <ol>
            <li><button> Go to Move</button></li>
        </ol>
    )
}
export default Game;