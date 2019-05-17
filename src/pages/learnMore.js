import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../assets/images/formula1.jpg'
import TextBox from '../components/textBox'
import Text from '../components/text'
import { Link } from 'react-router-dom'

const WelcomeDiv = styled.div`
    background-image: url(${BackgroundImage});
    background-size: cover; 
    width: 100%; 
    height:1000px;
    margin: 0;
    @media (max-width: 600px){
        background-position: 652px 188px;
    }
`
const TransparencyLayer = styled.div `
    background-color: rgba(236,62,30,0.4);
    height: 1000px;

`
const ButtonsHolderForDesktop = styled.div `
    display: flex; 
    position: left; 
    padding: 2% 0 2% 70%;
    @media (max-width: 600px){
        display: none;
    }
`
const ButtonsHolderForMobile = styled.div `
    display: block; 
    padding: 2% 0 0% 30%;
    @media (min-width: 600px){
        display: none;
    }
`
const TextBoxHolder = styled.div `
    padding: 10%;
`
const MyLink = styled(Link)`
    text-decoration: none;
    padding: 0 10% 0 0;
`
const MyButton = styled.button `
    border: 5px solid #EC3E1E;
    box-sizing: border-box;
    background-color: transparent;
`
class LearnMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startButtonClicked : false,
               }
    }
    render() {
        return(
                <WelcomeDiv>
                    <TransparencyLayer>
                    <ButtonsHolderForDesktop>
                        <MyLink to='/my2005List'> 
                            <MyButton>
                                <Text text='Start Now'/>
                            </MyButton>
                        </MyLink>
                        <MyLink to="/"> 
                            <Text text="Learn More"/> 
                        </MyLink>
                    </ButtonsHolderForDesktop>
                    <TextBoxHolder>
                        <TextBox text='This little Single Page Application was developed for the FinCompare HR Process. As a first step, I developed a concept, understanding what information I wanted to display and what was the right look to it. The prototype can be seen in the page: https://www.figma.com/file/JAsPXp9VP3ksH3auXASs2nRk/Formula1_FinCompare?node-id=9%3A3. I separted the components and tryed to imagine the best way in which I could re-use components in the pages. Unfortunatelly I just had one day to do the development because I need to hand-in my thesis manuscript begging of next week and we had to solve many problems with our database. I had a completly different strategy to make the API requests and use the data in a more efficient way, but considering the time I opted for a solution that would deliver a working product. Because of the short time I had, I also did not follow exactly what I planned in terms of design and component destribution. My focus was on checking the exercise boxes and delivering something that works, even though I can think of many ways to improve this SPA'/>
                    </TextBoxHolder>
                    <ButtonsHolderForMobile>
                        <MyLink to='/my2005List'> 
                            <MyButton>
                                <Text text='Start Now'/>
                            </MyButton>
                        </MyLink>
                        <MyLink to="/"> 
                            <Text text="Learn More"/> 
                        </MyLink>
                    </ButtonsHolderForMobile>
                    </TransparencyLayer>             
                </WelcomeDiv>


        )
    }
}

export default LearnMore