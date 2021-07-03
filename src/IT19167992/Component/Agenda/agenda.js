import React, { Component } from 'react';
import axios from 'axios';
import {Button,Col, Row} from "reactstrap";
import TableCss from '../../Stylesheets/table.css';
import cardImgCss from '../../Stylesheets/cardImg.css'


class Agenda extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
             agenda :[],
            
         }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/agenda')
        .then(response => {
            this.setState({ agenda : response.data.data });
            console.log(this.state.agenda)
        })
        .catch(error => {
            alert(error.message)
        })

       
    
    }

    

    render(){
        return(
 
            <div>   
                <Row className='userRow'>
                    <Col sm ='2'></Col>
                    <Col sm ='8'>
                        <h1 className='userTopic'>Agenda</h1>
                        <table className="table">
                            <tr style={{borderBottom:'3px solid #ddd', background:'#341E71', color:'white'}}>
                                <th>Event</th>
                                <th>Person</th>
                                <th>Date</th>
                                <th>Starting Time</th>
                                <th>Ending Time</th>
                                <th>Venue</th>
                               
                                <hr/><hr/>
                            </tr>


                            {this.state.agenda.length > 0 && this.state.agenda.map((item, index) => (
                                <tr key={index} style={{borderBottom:'2px solid #ddd'}} className='rowHover'>
                                    <td>{item.event}</td>
                                    <td>{item.person}</td>
                                    <td>{item.date}</td>
                                    <td>{item.startingTime}</td>
                                    <td>{item.endingTime}</td>
                                    <td>{item.venue}</td>
                                     
                                    <hr/> <hr/>
                                </tr>
                            ))}


                        </table>

                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }
}

export default Agenda;