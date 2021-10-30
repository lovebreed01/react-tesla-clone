import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
function Header() {

    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
        <Container>
            <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="60" width="100" viewBox="-41.8008 -9.08425 362.2736 54.5055"><path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07"/></svg>            </a>
        <Menu>

            <a href="#" >Model S</a>
            <a href="#" >Model Y</a>
            <a href="#" >Model 3</a>
            <a href="#" >Model X</a>

        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={()=> setBurgerStatus(false)}/>
            </CloseWrapper>

            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Cyber Truck</a></li>
            <li><a href="#">Trading</a></li>
            <li><a href="#">Investment</a></li>
            <li><a href="#">Affilate Programs</a></li>
            <li><a href="#">Affilate Programs</a></li><li><a href="#">Affilate Programs</a></li><li><a href="#">Affilate Programs</a></li><li><a href="#">Affilate Programs</a></li><li><a href="#">Affilate Programs</a></li>
           

        </BurgerNav>
        </Container>
    )
}

const Container = styled.div`
    min-height:60px;
    position:fixed;
    display:flex;
    top:0;
    left:0;
    z-index:1;
    right:0;
    background:white;
    align-items:center;
    justify-content:space-between;
    padding:0 20px;
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    padding-bottom:5px;
    justify-content:center;
    flex:1;
    ;
    
    @media (max-width:768px){
        display:none;
    }

    a{
        font-weight:600;
        text-transform:uppercase;
        padding:0 8px;
        color:inherit;
        
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;

a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:15px;
    color:inherit;
    
}
`
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
    width:150px;

`
const BurgerNav = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    overflow-y:scroll;
    transition:transform ease-in-out .5s;
    background:white;
    width:300px;
    padding:20px;
    display:flex;
    flex-direction:column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    
    li{
        list-style:none;
        padding:20px 0;
        border-bottom:1px solid rgba(0,0,0, .2);

        a{
            font-weight:600;
            color:black;
        }
    }
    
`
const CloseWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    
`
const CustomClose = styled(CloseIcon)`
 cursor:pointer;
 color:red;
`
export default Header
