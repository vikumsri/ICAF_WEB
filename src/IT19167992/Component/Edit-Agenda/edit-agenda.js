import React,{Component} from 'react'
import {Button,Col, Row} from "reactstrap";
import AddUserCss from '../../Stylesheets/add-user.css';
import "react-datepicker/dist/react-datepicker.css";
import TableDatePicker from '../Add-Agenda/DatePicker'
import TimePicker from 'react-bootstrap-time-picker';

class EditAgenda extends Component {
    constructor(props) {
        super(props);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.state = { time: 0 };
        
        
    }

    handleTimeChange(time) {
        console.log(time);     // <- prints "3600" if "01:00" is picked
        this.setState({ time });
      }
     

    render(){
        return(
            <div>

                <Row>
                    <Col sm ='1'></Col>
                    <Col sm ='5'>
                        <h1 className='topic'>Add Events To Agenda</h1>
                    </Col>
                    <Col sm='4' className='rightcontent'>
                         
                        <form>
                           
                            <input className='inputfield'
                                placeholder='Event Name'
   
                            >
                            </input>
                            <TableDatePicker
                                style = {{ 
                                    borderRadius: '60px',
                                    width:'60vh',
                                    height: '7vh'
                                }}
                            >

                            </TableDatePicker>

                             <TimePicker
                                className='inputfield'
                                style = {{ 
                                    borderRadius: '60px',
                                    width:'60vh',
                                    height: '7vh'
                                }}
                                onChange={this.handleTimeChange} 
                                value={this.state.time} 
                            />

                             <TimePicker 
                                className='inputfield'
                                style = {{ 
                                    borderRadius: '60px',
                                    width:'60vh',
                                    height: '7vh'
                                }}
                                onChange={this.handleTimeChange} 
                                value={this.state.time} 
                            /> 

                            <input className='inputfield'
                                   placeholder='Venue'
                            >
                            </input>

            
                            <Button className ='submitbtn' style={{backgroundColor:'#341E71',borderRadius: '93px'}}>
                                <span className='btnTxt'>Submit</span>
                            </Button>

                        </form>
                    </Col>
                    <Col sm ='2'></Col>
                </Row>
            </div>
        )
    }

}

export default EditAgenda