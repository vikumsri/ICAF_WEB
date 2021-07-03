import React, { Component } from 'react';
import axios from 'axios';
import Card from "reactstrap/lib/Card";
import {Button, Col, Input, Row} from "reactstrap";
import userCss from '../../../Stylesheets/viewUsers.css';
import BASEURL from '../../../../../url'

class Researchers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            researchers: []
        }

    }

    componentDidMount() {
        const userType = 'RESEARCHER';
        axios.get(`${BASEURL}users/user-type/${userType}`)
            .then(response => {
                    console.log(response.data.data);
                    this.setState({researchers: response.data.data});
                    console.log(this.state.researchers);
                }
            )
            .catch(error => {
                    alert(error.message)
                }
            )
    }

    render() {
        return(
            <div>
                <Row className='userRow'>
                    <Col sm ='2'></Col>
                    <Col sm ='8'>
                        <h1 className='userTopic'>Researchers</h1>
                                <table className="table">
                                    <tr style={{borderBottom:'3px solid #ddd', background:'#341E71', color:'white'}}>
                                        <th>Full Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Contact No</th>
                                        <hr/><hr/>
                                    </tr>


                                    {this.state.researchers.length > 0 && this.state.researchers.map((item, index) => (
                                            <tr key={index} style={{borderBottom:'2px solid #ddd'}} className='rowHover'>
                                                <td>{item.fullName}</td>
                                                <td>{item.userName}</td>
                                                <td>{item.email}</td>
                                                <td>{item.contactNo}</td>
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

export default Researchers
