import React, { Component } from 'react';
import axios from 'axios';
import {Button,Col, Row} from "reactstrap";
import TableCss from '../../Stylesheets/table.css';

class BackPanelUserList extends Component{
    constructor(props) {
        super(props);
        this.navigateToEditBackPanelUser = this.navigateToEditBackPanelUser.bind(this);
        this.state = {
            backPanelUsers : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/back-panel-user/')
        .then(response => {
            this.setState({ backPanelUsers : response.data.data });
        })
    }

    navigateToEditBackPanelUser(e, backPanelUserId){
        window.location = `/edit-back-panel-user/${backPanelUserId}`
    }
    
    render(){
        return(
            
           
            <div>
                 <Row className='userRow'>
                    <Col sm ='2'></Col>
                    <Col sm ='8'>
                        <h1 className='userTopic'>Back Panel Users</h1>
                        <table className="table">
                            <tr style={{borderBottom:'3px solid #ddd', background:'#341E71', color:'white'}}>
                                <th>Full Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Role</th>
                                <th></th>
                               
                                <hr/><hr/>
                            </tr>


                            {this.state.backPanelUsers.length > 0 && this.state.backPanelUsers.map((item, index) => (
                                <tr key={index} style={{borderBottom:'2px solid #ddd'}} className='rowHover'>
                                    <td>{item.name}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contactNumber}</td>
                                    <td>{item.role}</td>
                                    <td>
                                        <Button className='submitbtn' onClick={e => this.navigateToEditBackPanelUser(e, item._id)} style={{ backgroundColor: '#341E71', borderRadius: '25px' }}>
                                            <span className='btnTxt'>Edit</span>
                                        </Button>
                                    </td>
                                 
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

export default BackPanelUserList;