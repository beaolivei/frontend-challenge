import React from 'react'
import styled from 'styled-components'

const TextStyle = styled.p `
    font-family: "Inconsolata", monospace;
    color: #FD6E10;
    style: none;
    text-align: center;
    font-size: 26px;
`
function Text (props){
    return(
        <TextStyle> {props.text} </TextStyle>
    )
}
export default Text