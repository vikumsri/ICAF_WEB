import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import KeySpeakerStyles from '../Stylesheet/key-speaker.css';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
c

class AddKeySpeaker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            image: '',
        }
        this.onChange = this.onChange.bind(this)
        this.addKeySpeaker = this.addKeySpeaker.bind(this)
        this.restFields = this.restFields.bind(this)
    }

    restFields(e) {
        this.setState({
            name: '',
            description: '',
            image: '',
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addKeySpeaker(e) {
        e.preventDefault()

        let data = {
            name: this.state.name,
            description: this.state.description,
            image: this.state.image
        }

        console.log(data)

        axios.post('http://localhost:5000/conference/add-key-speakers', data).then((res) => {
            console.log("Key speaker details added sucess fully")

            //call the method to navigate to add key speakers page
        })
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
                                src="https://assets6.lottiefiles.com/packages/lf20_fksm3n4x.json"
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
                        <h3 className='login'>Add Key Speakers</h3>
                        <h3 className='instructions'>Add Key speaker's details here</h3>
                        <form onSubmit={this.addKeySpeaker}>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}
                            <input className='inputfield'
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                placeholder='Key speaker name'>
                            </input>
                            {/*<Mail size={25}/>*/}


                            <input className='inputfield'
                                name="image"
                                onChange={this.onChange}
                                value={this.state.image}
                                placeholder='Key Speaker image link'
                            >
                            </input>

                            <input className='inputDescriptionfield'
                                name="description"
                                onChange={this.onChange}
                                value={this.state.description}
                                placeholder='Description'
                            >
                            </input>

                            <row className='d-flex justify-content-between'>

                                <Col sm='4'></Col>

                                <button className='nextBtn' onClick={this.restFields}>
                                    <span className='btnTxt'>Reset</span>
                                </button>
                                <Col sm='2'></Col>
                                <button className='nextBtn'>
                                    <span className='btnTxt'>Add</span>
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

export default AddKeySpeaker