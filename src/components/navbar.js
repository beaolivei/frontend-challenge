import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Text from '../components/text'
import ArrowToRight from '../assets/images/arrowToRight.png'
import ArrowToLeft from '../assets/images/arrowToLeft.png'

const MyNavbar = styled.div`
    background-color: #C40806;
    padding: 1% 42%;
    position: fixed;
`
const MyNavbarButtonsDisplay = styled.div`
    display: flex;
`
const MyInput = styled.input`
    font-family: "Inconsolata", monospace;
    color: #FD6E10;
    style: none;
    font-size: 26px;
    resize: none;
    text-align: center;
`
const MyButton = styled.button`
    background-color:transparent;  
    border-style: none;  
`
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            year: 2005,
        };
    }
    handleChange(event) {
        this.setState({ year: event.target.value })
    }

    render() {
        return (
            <MyNavbar>
                <Text text="Select a year from 2005 to 2015" />
                <MyNavbarButtonsDisplay>
                    <MyInput type="number" value={this.state.year} onChange={this.handleChange.bind(this)} />
                    <Link to={`/${'my' + this.state.year + 'List'}`}>
                        <button>
                            <Text text="Go" />
                        </button>
                    </Link>
                </MyNavbarButtonsDisplay>
                <Link to='/'>
                    <MyButton><Text text="Back to Home" /></MyButton>
                </Link>
            </MyNavbar>
        )
    }
}

export default Navbar
