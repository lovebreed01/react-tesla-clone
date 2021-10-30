import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

import Zoom from 'react-reveal/Zoom';

function Section({title, desc, rightBtnText,leftBtnText,backgroundImage}) {
    return (
        <Wrap bgImage={backgroundImage}>
            <Fade bottom >
            <ItemText>
                <h2>{title}</h2>
                <span> {desc} </span>
            </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
                </Fade>
                
                <ArrowButton src='/tesla cars/arrow2.png'>

                </ArrowButton>
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.div`
    height:100vh;
    width:100vw;
    background-image: ${props => ` url("tesla cars/${props.bgImage}")`};
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;

`

const ItemText = styled.div`
    padding-top:10vh;
    text-align:center;
    display:flex;
    font-size:25px;
    color:;
    flex-direction:column;
    
`

const ButtonGroup = styled.div`
    display:flex;
    text-align:center;

    @media (max-width :768px){
        flex-direction:column;
    }
    
`
const LeftButton = styled.div`
    background-color:#f00;
    color:white;
    height:40px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    text-transform:uppercase;
    cursor:pointer;
    width:256px;
    margin:10px;
`
const RightButton = styled(LeftButton)`
    background-color:white;
    color:black;
`
const Buttons = styled.div`
    text-align:center;
    margin-top:30px;
`
const ArrowButton = styled.img`
    width:30px;
    height:20px;
    margin-top:10px;
    cursor:pointer;
  
    animation: animateDown infinite 1.5s;

`
export default Section
