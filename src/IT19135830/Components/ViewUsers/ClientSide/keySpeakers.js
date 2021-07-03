import React, { Component } from 'react';
import axios from 'axios';
import Card from "reactstrap/lib/Card";
import {Button, Col, Input, Row} from "reactstrap";
import userCss from '../../../Stylesheets/viewUsers.css';

class keySpeaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presenters: []}

    }

    componentDidMount() {
        const userType = 'WORKSHOP PRESENTER';
        axios.get(`http://localhost:5000/users/keyspeakers`)
            .then(response => {
                    console.log(response.data.data);
                    this.setState({presenters: response.data.data});
                    console.log(this.state.presenters);
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
                        <h1 className='userTopic'>Workshop Presenters</h1>
                        {this.state.presenters.length > 0 && this.state.presenters.map((item, index) => (
                            <div key={index}>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{item.name}</li>
                                    <li className="list-group-item">{item.description}</li>
                                    {/*<li className="list-group-item">{item.image}</li>*/}

                                </ul>
                            </div>
                        ))}




                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default keySpeaker
