import React from 'react'
import styled from 'styled-components'
import Text from './text'

const ExternalBox = styled.div ` 
    background-color: rgba(253,110,16, 0.7);
    padding: 2%;
`
const InternalBox = styled.div `
    background-color: rgb(247,177,85);
    padding: 5%;
`
function TextBox (props) {
    return(
        <ExternalBox>
            <InternalBox>
                 <Text text={props.text}/> 
            </InternalBox>
        </ExternalBox>
    )
}

export default TextBox