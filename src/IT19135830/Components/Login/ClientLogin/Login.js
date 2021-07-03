import React,{Component} from 'react'
import {Button,Col, Row} from "reactstrap";
import axios from 'axios';
import LoginCss from '../../../Stylesheets/login.css'
import {Mail} from 'react-feather';
import login from '../../actions/auth';
import { Player, Controls } from '@lottiefiles/react-lottie-player';



class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit= this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.navigateResearcher = this.navigateResearcher.bind(this);
        this.navigateAttendee= this.navigateAttendee.bind(this);
        this.navigateToRegistration= this.navigateToRegistration.bind(this);
        this.state={
            email:"",
            password:"",
        }



    }
    //
    // componentDidMount(){
    //     axios.get('http://localhost:5000)
    // }




    onSubmit(e) {
        e.preventDefault();
        let loginForm = {
            email: this.state.email,
            password: this.state.password
        }

        const url = axios.create({baseURL:'http://localhost:5000'});
        // url.interceptors.request.use((req) =>{
        //     if(localStorage.getItem('UserToken')) {
        //         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('UserToken')).token}`
        //     }
        // })
        console.log(loginForm);

        url.post('/user/client-login', loginForm)
            .then(response => {
                alert('Login Successful');
                // console.log(response.data);
                let data = response.data;
                console.log(data);
                // localStorage.setItem("Login message", response.data.message);
                // localStorage.setItem("UserToken", response.data.token);

                localStorage.setItem("UserId", response.data.result._id);

                let userType = response.data.result.type;

                if(userType == 'RESEARCHER'){
                    this.navigateResearcher(e);
                    localStorage.setItem("Login message", response.data.message);
                    localStorage.setItem("UserToken", response.data.token);
                }
                else if (userType == 'ATTENDEE'){
                    this.navigateAttendee(e);
                    localStorage.setItem("Login message", response.data.message);
                    localStorage.setItem("UserToken", response.data.token);
                    localStorage.setItem("UserId", response.data.data);
                }



                // this.navigate(e);

            })
            .catch(error => {
                console.log(error.message);
                alert('Invalid Login');
            })
    }


    navigateResearcher (e){
        window.location=('/home-page');
    }

    navigateAttendee(e){
        window.location=('/sample1');
    }

    navigateToRegistration(e){
        window.location = `/register`;
    }



    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }




    render(){
        return(
            <div style={{paddingTop:'1rem'}}>
                <Row>
                    <Col sm ='1'></Col>
                    <Col sm ='5'>
                        <h1 className='topic'>ICAF</h1>
                        <h3 className='subTopic'>International Conference on Application Frameworks</h3>

                        <div>
                            <Player
                                autoplay
                                loop
                                src="https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json"
                                style={{ height: '40rem', width: '40rem', paddingTop:'2rem', paddingLeft:'2rem' }}
                            >
                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>

                        </div>
                    </Col>
                    <Col sm='4'>
                        <h3 className='login'>Login</h3>
                        <h3 className='instructions'>Please enter Email and Password to login</h3>
                        <form onSubmit={this.onSubmit}>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}
                            <input className='input_field'
                                   placeholder='Enter Email here'
                                   name='email'
                                   id='email'
                                   value={this.state.email}
                                   onChange={this.onChange}
                            >
                            </input>
                            {/*<Mail size={25}/>*/}
                            <input className='input_field'
                                   placeholder='Enter Password here'
                                   name = 'password'
                                   id='password'
                                   value={this.state.password}
                                   onChange={this.onChange}
                                   type='password'
                            >
                            </input>

                            <row className='d-flex justify-content-between'>

                                <Col sm='4'></Col>


                                    <a
                                        style={{paddingTop:'1rem'}}
                                        href="/registration"
                                        className="loginbutton">
                                    <span className='btnTxt'>REGISTER</span>
                                    </a>

                                <button className ='loginbutton'>
                                    <span className='btnTxt'>LOGIN</span>
                                </button>


                            </row>

                        </form>
                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default Login