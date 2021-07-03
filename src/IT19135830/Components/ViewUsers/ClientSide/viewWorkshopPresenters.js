import React, { Component } from 'react';
import axios from 'axios';
import Card from "reactstrap/lib/Card";
import {Button, Col, Input, Row} from "reactstrap";
import userCss from '../../../Stylesheets/viewUsers.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import navBar from "../../ClientSideNavBar/navBar";

class presenter extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            presenters: [],
            submissions:[],
            status:"ACCEPTED"
        }

    }

    componentDidMount() {
        const status = 'ACCEPTED';
        axios.get(`http://localhost:5000/users/presenter/${status}`)
            .then(response => {
                    console.log(response.data.data);
                    console.log(response.data.info);

                    this.setState({presenters: response.data.info});
                    this.setState({submissions: response.data.data});
                    //     console.log(this.state.submissions.length)
                    // console.log(this.state.submissions[1].userId)
                }
            )
            .catch(error => {
                    alert(error.message)
                }
            )
    }

    onClick(e, id){

        for(let i = 0; i < this.state.submissions.length; i++){
            let cId = this.state.submissions[i].userId;
            if(id === cId){
                console.log(cId);
                console.log(id);
                const path = this.state.submissions[i].document;
                window.open(path);
            }
        }
    }

    render() {
        return(
            <div>
                <Route component={navBar}></Route>
                <Row className='userRow'>
                    <Col sm ='2'></Col>
                    <Col sm ='8'>
                        <h1 className='userTopic'>Presenters</h1>
                        {/*{this.state.researchers.length > 0 && this.state.researchers.map((item, index) => (*/}
                        {/*    <div key={index}>*/}
                        {/*        <Row>*/}
                        {/*        <ul className="list-group list-group-flush">*/}
                        {/*            <li className="list-group-item">{item.fullName}</li>*/}
                        {/*            <button>hi</button>*/}

                        {/*        </ul>*/}
                        {/*        </Row>*/}
                        {/*    </div>*/}
                        {/*))}*/}

                        <table className="table">
                            <tr style={{borderBottom:'transparent'}}>
                                <th></th>
                                <th></th>

                            </tr>


                            {this.state.presenters.length > 0 && this.state.presenters.map((item, index) => (
                                <tr key={index} style={{borderBottom:'2px solid #ddd'}} className='rowHover' >
                                    <td style={{paddingLeft:'2rem'}}>{item.fullName}</td>
                                    <td><button onClick={(e) => this.onClick(e, item._id)}>hi</button></td>

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

export default presenter
