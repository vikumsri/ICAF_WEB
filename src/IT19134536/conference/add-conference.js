import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import AddConferenceStyles from '../Stylesheet/add-conference.css'
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from 'axios'

class conference extends Component {
    constructor(props) {
        super(props)
        this.state = {
            conference_title: "",
            conference_date: "",
            conference_description: "",
            conference_logo_link: "",
            conference_background_image_link: "",
            conference_annoucement: "",
            conference_venue: ""
        }
        this.addConferenceDeatils = this.addConferenceDeatils.bind(this)
        this.onChange = this.onChange.bind(this)

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addConferenceDeatils(e) {
        e.preventDefault()
        console.log('Sending data to back end')
        var data = {
            conference_title: this.state.conference_title,
            conference_date: this.state.conference_date,
            conference_description: this.state.conference_description,
            conference_logo_link: this.state.conference_logo_link,
            conference_background_image_link: this.state.conference_background_image_link,
            conference_annoucement: this.state.conference_annoucement,
            conference_venue: this.state.conference_venue,
            status: 'PENDING'
        }

        console.log(data)

        axios.post('http://localhost:5000/conference/add-details', data).then((res) => {
            console.log("Conference details added sucess fully")

            //call the method to navigate to add key speakers page
        })

        this.props.history.push('/add-key-speakers')
    }

    render() {
        return (
            <div>

                <Row>
                    <Col sm='1'></Col>
                    <Col sm='5'>
                        <h1 className='Add user'>ICAF</h1>
                        <div className="imagebackground">
                            <Player
                                autoplay
                                loop
                                src="https://assets6.lottiefiles.com/private_files/lf30_jrhj68re.json"
                                style={{ height: "600px", width: "600px" }}
                            >
                                <Controls
                                    visible={false}
                                    buttons={["play", "repeat", "frame", "debug"]}
                                />
                            </Player>
                        </div>
                    </Col>
                    <Col sm='4'>
                        <h3 className='login'>Add Conference</h3>
                        <h3 className='instructions'>Add conference details here</h3>

                        <form onSubmit={this.addConferenceDeatils}>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}
                            <input className='inputfield'
                                name="conference_title"
                                placeholder='Conference Title'
                                onChange={this.onChange}
                                value={this.state.conference_title}
                            >
                            </input>


                            {/*<Mail size={25}/>*/}
                            <input className='inputfield'
                                name="conference_date"
                                placeholder='Date as text'
                                onChange={this.onChange}
                                value={this.state.conference_date}
                            >
                            </input>

                            <input className='inputfield'
                                name="conference_venue"
                                placeholder='Venue'
                                onChange={this.onChange}
                                value={this.state.conference_venue}
                            >
                            </input>

                            <input className='inputfield'
                                name="conference_description"
                                placeholder='Description'
                                onChange={this.onChange}
                                value={this.state.conference_description}
                            >
                            </input>

                            <input className='inputfield'
                                name="conference_annoucement"
                                placeholder='Annoucment'
                                onChange={this.onChange}
                                value={this.state.conference_annoucement}
                            >
                            </input>


                            <input className='inputfield'
                                name="conference_logo_link"
                                placeholder='logo image link'
                                onChange={this.onChange}
                                value={this.state.conference_logo_link}
                            >
                            </input>

                            <row className='d-flex justify-content-between'>

                                <Col sm='4'></Col>

                                <button className='nextBtn'>
                                    <span className='btnTxt'>Next</span>
                                </button>


                            </row>

                        </form>
                    </Col>
                    <Col sm='2'></Col>
                </Row>
            </div>
        )
    }
}

export default conference