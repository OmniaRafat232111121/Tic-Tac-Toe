import React from 'react'
import  {Container}  from './styles';
import Switch from 'react-switch'
import {Them}
const Header:React.FC=()=>{
    return(
       <Container>
        Hello
        <Switch
        onChange={()=>{}}
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor=""
        onColor=""
        />
       </Container>
    );
}
export default Header;