import React,{useContext} from 'react'
import  {Container}  from './styles';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components';
const Header:React.FC=()=>{
    const {colors}=useContext(ThemeContext)
    return(
       <Container>
        Hello
        <Switch
        onChange={()=>{}}
        checked={false}
        checkedIcon={fals}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor=""
        onColor={colors.secundary}
        />
       </Container>
    );
}
export default Header;