import React,{Component} from 'react'
import {Button,Col, Row} from "reactstrap";
import AddUserCss from '../../Stylesheets/add-user.css';
import Dropdown from 'react-dropdown';
import Select from 'react-select'
import axios from 'axios'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

 
class EditBackPanelUser extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
        this.onDeleteUser = this.onDeleteUser.bind(this);
       
        this.state = {
              options : [
                { value: 'Admin', label: 'Admin' },
                { value: 'Reviewer', label: 'Reviewer' },
                { value: 'Editor', label: 'Editor' }
              ],
              name :'',
              userName : '',
              email : '',
              contactNumber : '',
              password : '',
              selectedOption :'',
              backPanelUser : []
           
                   
        }
    }
    
    componentDidMount(){
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:5000/back-panel-user/${this.props.match.params.id}`)
        .then(response => {
       
          console.log(this.state.backPanelUser);
       
                 
                this.setState ({    name :response.data.backpanelusers.name,
                                    userName : response.data.backpanelusers.userName,
                                    email : response.data.backpanelusers.email,
                                    contactNumber : response.data.backpanelusers.contactNumber,
                                    password : response.data.backpanelusers.password,
                                    role : response.data.backpanelusers.role
                })       
               
        })
        .catch(error => {
          alert(error.message)
        })
    }

    onDeleteUser(e){
        axios.delete(`http://localhost:5000/back-panel-user/delete/${this.props.match.params.id}`)
        .then(response => {
            alert('Data Successfully Deleted.')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)

        })
    }
    
    onChange(e) {
        this.setState( { [e.target.name] : e.target.value })
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }
 
    onSubmit(e){
        
        e.preventDefault();
        
        let backPanelUser = {
            name : this.state.name,
            userName : this.state.userName,
            email : this.state.email,
            contactNumber : this.state.contactNumber,
            password : this.state.password,
            role : this.state.selectedOption

        };

        console.log('Data to Send', backPanelUser)
        axios.put(`http://localhost:5000/back-panel-user/edit/${this.props.match.params.id}`, backPanelUser)
        .then(response => {
            alert('Data Successfully Updated.')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)

        })
        

    }


    render(){
        return(
            <div>

                <Row>
                    <Col sm ='1'></Col>
                    <Col sm ='5'>
                        <h1 className='topic'>Edit User</h1>

                        <diV>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_kklehbnf.json"
                            style={{ height: '600px', width: '600px' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        </diV>
                    </Col>
                    <Col sm='4' className='rightcontent'>
                   
                        <form onSubmit = { this.onSubmit }>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}
                        
                            <input className='inputfield'
                                placeholder='Full Name'
                                type = "text" 
                                id = "name"
                                name = "name"
                                disabled
                                value = { this.state.name }
                                onChange = { this.onChange } 
                            >
                            </input>
                           
                            <input className='inputfield'
                                   placeholder='Username'
                                   type = "text" 
                                    id = "userName"
                                    name = "userName"
                                    disabled
                                    value = { this.state.userName }
                                    onChange = { this.onChange }
                            >
                              
                            </input>

                            <input className='inputfield'
                                   placeholder='Email'
                                   type = "text" 
                                   id = "email"
                                   name = "email"
                                   value = { this.state.email }
                                   onChange = { this.onChange }
                            >
                            </input>

                            <input className='inputfield'
                                   placeholder='Contact Number'
                                   type = "text" 
                                    id = "contactNumber"
                                    name = "contactNumber"
                                    value = { this.state.contactNumber }
                                    onChange = { this.onChange }
                            >
                            </input>

                            <input className='inputfield'
                                   placeholder='Password'
                                   type = "text" 
                                   id = "password"
                                   name = "password"
                                   value = { this.state.password }
                                   onChange = { this.onChange }
                            >
                            </input>

                             
                            <Row>
                                <Col sm='1'></Col>
                                <Col sm='3'>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Reviewer"
                                                checked={this.state.selectedOption === "Reviewer"}
                                                onChange={this.onValueChange}
                                            />
                                            Reviewer
                                        </label>
                                    </div>
                                </Col>
                                <Col sm='3'>
                                    <div className="radio">
                                        <label>
                                            <input
                                                type="radio"
                                                value="Admin"
                                                checked={this.state.selectedOption === "Admin"}
                                                onChange={this.onValueChange}
                                            />
                                            Admin
                                        </label>
                                    </div>
                                </Col>
                                <Col sm='3'>
                                    <div className="radio">
                                        <label className="">
                                            <input
                                                type="radio"
                                                value="Editor"
                                                checked={this.state.selectedOption === "Editor"}
                                                onChange={this.onValueChange}
                                            />
                                            Editor
                                        </label>
                                    </div>
                                </Col>

                            </Row>
                            
                            
                            
                            <Row>
                                <Col sm='4'>
                                    <Button className='submitbtn' style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Edit</span>
                                    </Button>

                                </Col>


                                <Col sm='4'>
                                    <Button className='submitbtn' onClick={this.onDeleteUser} style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Delete</span>
                                    </Button>

                                </Col>
                            </Row>

                       
                        </form>
                      
                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default EditBackPanelUser