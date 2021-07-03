import React, { Component } from 'react';
import axios from 'axios';
import { Button, Col, Row } from "reactstrap";
import TableCss from '../../Stylesheets/table.css';
import cardImgCss from '../../Stylesheets/cardImg.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminNavBar from '../Admin-NavBar/admin-navBar'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.navigateToEditAgenda = this.navigateToEditAgenda.bind(this);
        this.state = {
            agenda: [],
            atendeeCount: 0,
            workshopPresenters: 0,
            researchers: 0
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/agenda')
            .then(response => {
                this.setState({ agenda: response.data.data });
                console.log(this.state.agenda)
            })
            .catch(error => {
                alert(error.message)
            })

        axios.get(`http://localhost:5000/counter/Atendee-count`)
            .then(response => {
                this.setState({ atendeeCount: response.data.data })
            })
            .catch(error => {
                alert(error.message)
            })
        axios.get(`http://localhost:5000/counter/workshop-count`)
            .then(response => {
                this.setState({ workshopPresenters: response.data.data })
            })
            .catch(error => {
                alert(error.message)
            })
        axios.get(`http://localhost:5000/counter/researcher-count`)
            .then(response => {
                this.setState({ researchers: response.data.data })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    navigateToEditAgenda(e, eventId) {
        // window.location = `/edit-agenda/${eventId}`
        let data = {
            eventId: eventId
        }
        this.props.history.push("/edit-agenda", data)


    }

    render() {
        return (

            <div>
                <Route component={AdminNavBar}></Route>
                <div className="cardCss">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">

                                    <Row>
                                        <Col sm='3'>
                                            <div className="atendeeBlock"></div>
                                        </Col>
                                        <Col sm='6'>
                                            <h3 className="card-title">Attendees :</h3>
                                        </Col>
                                        <Col sm='1'>
                                            <h3 className="card-text">{this.state.atendeeCount}</h3>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">

                                    <Row>
                                        <Col sm='3'>
                                            <div className="workshopBlock"></div>
                                        </Col>
                                        <Col sm='7'>
                                            <h3 className="card-title">Workshop Presenters :</h3>
                                        </Col>
                                        <Col sm='2'>
                                            <h3 className="card-text">{this.state.workshopPresenters}</h3>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">

                                    <Row>
                                        <Col sm='3'>
                                            <div className="researchBlock"></div>
                                        </Col>
                                        <Col sm='6'>
                                            <h3 className="card-title">Researchers :</h3>
                                        </Col>
                                        <Col sm='1'>
                                            <h3 className="card-text">{this.state.researchers}</h3>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Row className='userRow'>
                    <Col sm='2'></Col>
                    <Col sm='8'>
                        <h1 className='userTopic'>Agenda</h1>
                        <table className="table">
                            <tr style={{ borderBottom: '3px solid #ddd', background: '#341E71', color: 'white' }}>
                                <th>Event</th>
                                <th>Person</th>
                                <th>Date</th>
                                <th>Starting Time</th>
                                <th>Ending Time</th>
                                <th>Venue</th>

                                <hr /><hr />
                            </tr>


                            {this.state.agenda.length > 0 && this.state.agenda.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '2px solid #ddd' }} className='rowHover'>
                                    <td>{item.event}</td>
                                    <td>{item.person}</td>
                                    <td>{item.date}</td>
                                    <td>{item.startingTime}</td>
                                    <td>{item.endingTime}</td>
                                    <td>{item.venue}</td>
                                    <td>
                                        <Button className='editbtn' onClick={e => this.navigateToEditAgenda(e, item._id)} style={{ backgroundColor: '#341E71' }}>
                                            <span className='btnTxt'>Edit</span>
                                        </Button>
                                    </td>
                                    <hr /> <hr />
                                </tr>
                            ))}


                        </table>

                    </Col>
                    <Col sm='2'></Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;