import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../assets/images/formula1.jpg'
import TextBox from '../components/textBox'
import TextBoxHolder from '../components/textBox'
import My2005List from '../components/tables/list2005.js'
import My2006List from '../components/tables/list2006'
import My2007List from '../components/tables/list2007'
import My2008List from '../components/tables/list2008'
import My2009List from '../components/tables/list2009'
import My2010List from '../components/tables/list2010'
import My2011List from '../components/tables/list2011'
import My2012List from '../components/tables/list2012'
import My2013List from '../components/tables/list2013'
import My2014List from '../components/tables/list2014'
import My2015List from '../components/tables/list2015'


// const WelcomeDiv = styled.div`
//     background-image: url(${BackgroundImage});
//     background-size: cover; 
//     width: 100%; 
//     height:1000px;
//     margin: 0;
//     @media (max-width: 600px){
//         background-position: 652px 188px;
//     }
// `
const TransparencyLayer = styled.div `
    background-color: rgba(236,62,30,0.4);
    height: 1000px;

`

class DisplayData extends React.Component {
    constructor (props){
        super(props);
        this.state={
            year:null,
        }
    }
    render(){
    return(
    <div>
        <My2005List/>        
    </div>

    )
}
}

export default DisplayData