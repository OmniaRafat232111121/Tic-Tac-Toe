import React,{useContext} from 'react'
import  {Container}  from './styles';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import {shade} from 'polished'
const Header:React.FC=()=>{
    const {colors}=useContext(ThemeContext)
    return(
       <Container>
        Hello
        <Switch
        onChange={()=>{}}
        checked={false}
        checkedIcon={true}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.20,colors.)}
        onColor={colors.secundary}
        />
       </Container>
    );
}
export default Header;