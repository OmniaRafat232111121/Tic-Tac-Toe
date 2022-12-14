import React,{useContext} from 'react'
import  {Container}  from './styles';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
import {shade} from 'polished'
interface toggleTheme{
toggleTheme():void
}
const Header:React.FC<toggleTheme>=({toggleTheme})=>{
    const {colors,title}=useContext(ThemeContext)
    return(
       <Container>
         Tic Tac Toe
        <Switch
        onChange={toggleTheme}
        checked={title==='dark'}
        checkedIcon={true}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.20,colors.primary)}
        onColor={colors.secundary}
        />
       </Container>
    );
}
export default Header;