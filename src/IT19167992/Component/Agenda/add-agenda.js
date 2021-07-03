import React,{Component} from 'react'
import {Button,Col, Row} from "reactstrap";
import AddUserCss from '../../Stylesheets/add-user.css'; 
import axios from 'axios';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

class AddAgenda extends Component {
    constructor(props) {
        super(props); 
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = { 
            event : '',
            person:'',
            date:'',
            startingTime:  '',
            endingTime :'',
            venue : ''
           
    
         };
        
         
    }

    onSubmit(e){
        e.preventDefault();
        let agenda = {
            event : this.state.event,
            person : this.state.person,
            date : this.state.date,
            startingTime : this.state.startingTime,
            endingTime : this.state.endingTime,
            venue : this.state.venue

        }
        console.log('Data to Send', agenda);
        axios.post('http://localhost:5000/agenda/add',agenda)
        .then(response => {
            alert('Data Successfully Inserted.')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)

        })

    }

    onChange(e) {
        this.setState( { [e.target.name] : e.target.value })
    }
      
     

    render(){
        return(
            <div>
                
                <Row>
                    <Col sm ='1'></Col>
                    <Col sm ='5'>
                        <h1 className='topic'>Add Events To Agenda</h1>
                        <diV>
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_aKRZfw.json"
                            style={{ height: '600px', width: '600px' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                        </diV>
                    </Col>
                    <Col sm='4' className='rightcontent'>
                         
                        <form onSubmit = { this.onSubmit }>
                            <label className='lbl'>Event Name</label>
                            <input className='inputfield'
                                placeholder='Event Name'
                                type = 'text'
                                id = "event"
                                name = "event"
                                value = { this.state.event }
                                onChange = { this.onChange } 
   
                            >
                            </input>
                            <label className='lbl'>Person</label>
                            <input className='inputfield'
                                placeholder='Person'
                                type = 'text'
                                id = "person"
                                name = "person"
                                value = { this.state.person }
                                onChange = { this.onChange } 
   
                            >
                            </input>
                            <label className='lbl'>Date</label>
                            <input className='inputfield'
                                placeholder= 'Date'
                                type = 'date'
                                id = "date"
                                name = "date"
                                value = { this.state.date }
                                onChange = { this.onChange } 
   
                            >
                            </input>
                            <label className='lbl'>Starting Time</label>
                            <input className='inputfield'
                                placeholder='Starting Time'
                                type = 'time'
                                id = "startingTime"
                                name = "startingTime"
                                value = { this.state.startingTime }
                                onChange = { this.onChange } 
   
                            >
                            </input>
                            <label className='lbl'>Ending Time</label>
                            <input className='inputfield'
                                placeholder='Ending Time'
                                type = 'time'
                                id = "endingTime"
                                name = "endingTime"
                                value = { this.state.endingTime }
                                onChange = { this.onChange } 
   
                            >
                            </input>
                            <label className='lbl'>Venue</label>                           
                            <input className='inputfield'
                                   placeholder='Venue'
                                   type = 'text'
                                    id = "venue"
                                    name = "venue"
                                    value = { this.state.venue }
                                    onChange = { this.onChange }
                            >
                            </input>

                            <Row>
                                <Col sm='4'>
                                    
                                </Col>
                                <Col sm='8'>
                                    <Button className='submitbtn' style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Submit</span>
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

export default AddAgenda