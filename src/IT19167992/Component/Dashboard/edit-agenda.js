import React,{Component} from 'react'
import {Button,Col, Row} from "reactstrap";
import AddUserCss from '../../Stylesheets/add-user.css'; 
import { Player, Controls } from '@lottiefiles/react-lottie-player'; 
import axios from 'axios';

class EditAgenda extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDeleteEvent=this.onDeleteEvent.bind(this);
        this.state = {
            eventId:'', 
            event : '',
            person:'',
            date:'',
            startingTime:  '',
            endingTime :'',
            venue : '',
            agendas :[]
           
    
         };
        
         
    }

    componentDidMount(){
        const eventIdentification = this.props.location.state.eventId
        console.log(eventIdentification)
        this.setState ({ eventId : eventIdentification})
 
        axios.get(`http://localhost:5000/agenda/${eventIdentification}`)
        .then(response => {

            console.log(response.data.data);
       
          console.log(this.state.agendas);
       
                 
                this.setState ({    event :response.data.agendas.event,
                                    person : response.data.agendas.person,
                                    date : response.data.agendas.date,
                                    startingTime : response.data.agendas.startingTime,
                                    endingTime : response.data.agendas.endingTime,
                                    venue : response.data.agendas.venue
                })       
               
        })
        .catch(error => {
          alert(error.message)
        })

        
        
    }

    
    

    onSubmit(e){
        e.preventDefault();
        let agendas = {
            event : this.state.event,
            person : this.state.person,
            date : this.state.date,
            startingTime : this.state.startingTime,
            endingTime : this.state.endingTime,
            venue : this.state.venue

        };

        console.log('Data to Send', agendas);
        const eventIdentification = this.props.location.state.eventId
        axios.put(`http://localhost:5000/agenda/edit/${eventIdentification}`, agendas)
        .then(response => {
            alert('Data Successfully Updated.')
        })
        .catch(error => {
            console.log(error.message);
            alert(error.message)

        })

    }

    onChange(e) {
        this.setState( { [e.target.name] : e.target.value })
    }

    onDeleteEvent(e){
        const eventIdentification = this.props.location.state.eventId
        axios.delete(`http://localhost:5000/agenda/delete/${eventIdentification}`)
        .then(response => {
            alert('Data Successfully Deleted.')
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
                        <h1 className='topic'>Edit Events in Agenda</h1>
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
                                disabled
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
                            <label className='lbl'>Time</label>
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
                                    <Button className='submitbtn' style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Edit</span>
                                    </Button>
                                </Col>
                                <Col sm='4'>
                                    <Button className='submitbtn' onClick={this.onDeleteEvent} style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
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

export default EditAgenda