import React from 'react'
import styled from 'styled-components'
import axios from 'axios';
import LoadingGif from '../../assets/images/loadingGif.gif'
import Navbar from '../navbar'

const ExternalBox = styled.div ` 
    background-color: rgba(253,110,16, 0.7);
    height: 100%;
`
const TableWrapper = styled.div`
    padding: 25% 17%;
    @media (max-width: 600px) {
        padding: 197px 0;
    }

`
const MyTable = styled.table`
    text-align: center;
    background-color: rgb(247,177,85);
    font-family: "Inconsolata", monospace;
    color: #FD6E10;
    style: none;
    font-size: 26px;

`
const WinnerDiv = styled.div `
    background-color: red;
`
class My2010List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winnerId: null,
            seasonRaces: [],
            firstName: null,
            secondName: null,
            round: null,
            isHeTheWorldChampion: false,
        }
    };

    componentDidMount() {
        this.setState({isLoading: false})
        fetch('http://ergast.com/api/f1/2010/results/1.json')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    seasonRaces: data.MRData.RaceTable.Races,
                    season: data.MRData.RaceTable.season,
                    winnerId: this.props.match.params.winnerid,
              }))           
            .catch(error => this.setState({ error, isLoading: false }))
    
}

    render() {
        return (
            <ExternalBox>
                <Navbar arrowToTheLeftPath='/' />
                <TableWrapper>
                {this.state.seasonRaces.length ? 
                    <MyTable>
                    <tr>
                        <th>Season</th>
                        <th>Round No.</th>
                        <th>Race Name</th>
                        <th>Circuit Name</th>

                        <th>Winner</th>

                        <th>Constructor</th>
                        <th>Is he also the world champion?</th>
                    </tr>
                     {this.state.seasonRaces.map(
                        function (race, i) {
                            return (
                                <tr>
                                    <td>{race.season}</td>
                                    <td>{i + 1}</td>
                                    <td>{race.raceName}</td>
                                    <td>{race.Circuit.circuitName}</td>
                                    <td>{race.Results[0].Driver.givenName} {race.Results[0].Driver.familyName}</td>
                                    <td>{race.Results[0].Constructor.name}</td>
                                    <td>{race.Results[0].Driver.familyName === "Vettel" ? "yes" : "no"}</td>
                                </tr>


                            )
                        }.bind(this)
                    )}

                    </MyTable>
                    : (
                            <div>
                               <img src={LoadingGif}/>
                           </div>
                       )}
                </TableWrapper>
                </ExternalBox>
 )
}

}


export default My2010List
