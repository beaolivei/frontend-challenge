import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
    font-family: "Inconsolata", monospace;
    color: #FD6E10;
    style: none; 
`

function MyLink (props) {
    return (
        <StyledLink to='/'> {props.text} </StyledLink>
    )
}

export default MyLink
