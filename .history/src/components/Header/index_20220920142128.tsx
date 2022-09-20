import React from 'react'
import  {Container}  from './styles';
import Switch from 'react-switch'
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
        wi
        />
       </Container>
    );
}
export default Header;