import React from 'react'
import styled  from 'styled-components'
import Section from '../Section'
import Zoom from 'react-reveal/Zoom'
function Home() {
    return (
        <Container>
            <Section
            title='Model S '
            desc='Order online for Touchless Delivery'
            backgroundImage='tesla-car1.jpg'
            leftBtnText='Order Online'
            rightBtnText='Inventory'
            />
            <Section
            title='Model Y '
            desc='You cant afford not to drive this'
            backgroundImage='tesla2.jpg'
            leftBtnText='Order Online'
            rightBtnText='Inventory'
            />
            <Section
            title='Model 3'
            desc='Truly awesome feature you are gonna love'
            backgroundImage='tesla4.jpg'
            leftBtnText='Order Online'
            rightBtnText='Inventory'
            />
            <Section
            title='Model X '
            desc='Attractive and suiting with comforting tech'
            backgroundImage='tesla5.jpg'
            leftBtnText='Order Online'
            rightBtnText='Inventory'
            />
            {/* <Section/> */}
        </Container>
    )
}

const Container = styled.div`
    height:100vh;

`

export default Home
