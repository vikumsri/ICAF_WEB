import React, { Component } from 'react'
import { Button, Col, Row } from "reactstrap";
import axios from 'axios';
import navBar from "../../ClientSideNavBar/navBar";
import LoginCss from '../../../Stylesheets/login.css'
import { Mail } from 'react-feather';
import login from '../../actions/auth';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import BASEURL from '../../../../../url'



class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        // this.navigateResearcher = this.navigateResearcher.bind(this);
        // this.navigateAttendee= this.navigateAttendee.bind(this);
        this.state = {
            email: "",
            password: "",
        }
    }



    onSubmit(e) {
        e.preventDefault();
        let loginForm = {
            email: this.state.email,
            password: this.state.password
        }
        // console.log(loginForm);

        axios.post(`${BASEURL}user/admin-login`, loginForm)
            .then(response => {
                alert('Login Successful');
                // console.log(response.data);
                let data = response.data;
                let userType = response.data.result.role;
                console.log(data);
                localStorage.setItem("Login message", response.data.message);
                localStorage.setItem("UserToken", response.data.token);

                console.log(userType)

                if (userType == 'Reviewer') {
                    console.log('navigating to Reviwer')
                    this.navigate('/reviwer-dashboard')

                }
                else if (userType == 'Editor') {
                    console.log('navigating to Editor')
                    this.navigate('/editor-dashboard')

                } else if (userType == 'Admin') {
                    console.log('navigating to Admin')
                    this.navigate('/dashboard')

                }




            })
            .catch(error => {
                console.log(error.message);
                alert('Invalid Login. Please fill all Fields');
            })
    }


    navigate(path) {
        console.log('navigating to relevent user')
        window.location = (path);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }




    render() {
        return (
            <div style={{ paddingTop: '1rem' }}>
                <Row id='mainRow'>
                    <Col sm='3'></Col>
                    <Col sm='6'>
                        <h1 className='topic' style={{ textAlign: 'center' }}>ICAF</h1>
                        <h3 className='subTopic' style={{ textAlign: 'center' }}>International Conference on Application Frameworks</h3>

                        <h3 className='login' style={{ textAlign: 'center', paddingTop: '1rem' }}>Admin Login</h3>
                        <h3 className='instructions' style={{ textAlign: 'center' }}>Please enter Email and Password to login</h3>
                        <form onSubmit={this.onSubmit} style={{ textAlign: 'center', paddingTop: '3rem' }}>

                            {/*input field to enter email*/}
                            <input className='inputfield'
                                style={{ align: 'center', marginLeft: '0rem' }}
                                placeholder='Enter Email here'
                                name='email'
                                id='email'
                                value={this.state.email}
                                onChange={this.onChange}
                            >

                                {/*input field to enter password*/}
                            </input>
                            <input className='inputfield'
                                style={{ align: 'center', marginLeft: '0rem' }}
                                placeholder='Enter Password here'
                                name='password'
                                id='password'
                                value={this.state.password}
                                onChange={this.onChange}
                                type='password'
                            >
                            </input>

                            <row className='d-flex justify-content-between' style={{ align: 'center', marginLeft: '0rem' }}>

                                {/*Login button*/}
                                <Col sm='1'></Col>
                                <button className='loginbtn'>
                                    <span className='btnTxt'>LOGIN</span>
                                </button>
                                <Col sm='1'></Col>


                            </row>

                        </form>
                    </Col>
                    <Col sm='3'></Col>
                </Row>
            </div>
        )
    }

}

export default AdminLogin