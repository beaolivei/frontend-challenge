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
class WelcomeSection extends React.Component {
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
                        <MyLink to="/learnMore"> 
                            <Text text="Learn More"/> 
                        </MyLink>
                    </ButtonsHolderForDesktop>
                    <TextBoxHolder>
                        <TextBox text='For the true formula 1 lovers and for those who just wanna look well informed, 
                        here you find quality information on the big formula 1 winners from 2005 to 2015'/>
                    </TextBoxHolder>
                    <ButtonsHolderForMobile>
                        <MyLink to='/my2005List'> 
                            <MyButton>
                                <Text text='Start Now'/>
                            </MyButton>
                        </MyLink>
                        <MyLink to='/learnMore'> 
                            <Text text='Learn More'/>
                        </MyLink>
                    </ButtonsHolderForMobile>
                    </TransparencyLayer>             
                </WelcomeDiv>


        )
    }
}

export default WelcomeSection