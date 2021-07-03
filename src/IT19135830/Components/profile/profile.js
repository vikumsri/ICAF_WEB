import React, { Component } from 'react';
import axios from 'axios';
import Card from "reactstrap/lib/Card";
import {Button, Col, Input, Row} from "reactstrap";
import {Controls, Player} from "@lottiefiles/react-lottie-player";
// import userCss from '../../../Stylesheets/viewUsers.css';

class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            stats:"",

        }

    }

    componentDidMount() {
        const userid = localStorage.getItem('UserId');
        console.log(userid)
        axios.get(`http://localhost:5000/users/researcher-status/${userid}`)
            .then(response => {
                    console.log(response.data.data);
                    this.setState({user: response.data.data});
                    console.log(this.state.user);
                }
            )
            .catch(error => {
                    alert(error.message)
                }
            )

        if(this.state.user == []){
            axios.get(`http://localhost:5000/users/presenter-status/${userid}`)
            .then(response => {
                        console.log(response.data.data);
                        this.setState({user: response.data.data});
                        console.log(this.state.user);
                    }
                )
                    .catch(error => {
                            alert(error.message)
                        }
                    )
            }
        }


    render() {
        return(
            <div>
                <Row className='userRow'>
                    <Col sm ='2'></Col>
                    <Col sm ='5'>
                        <h1 className='userTopic'>Welcome!</h1>
                        <h3 className='subTopic'> Your submission status is : {this.state.user.status}</h3>




                    </Col>
                    <Col sm ='4'>  <Player
                        autoplay
                        loop
                        src="https://assets4.lottiefiles.com/packages/lf20_4sepc5sh.json"
                        style={{ height: '40rem', width: '40rem', paddingTop:'2rem', paddingLeft:'2rem' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player></Col>

                    <Col sm ='1'></Col>
                </Row>
            </div>
        )
    }

}

export default profile
