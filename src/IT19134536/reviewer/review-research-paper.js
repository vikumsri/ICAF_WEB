import React, { Component } from 'react';
import { Button, Col, Row } from "reactstrap";
import BaseStyles from '../Stylesheet/base-styles';
import axios from 'axios';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


class ReviewResearchPaper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            researcher: '',
            email: '',
            title: '',
            description: '',
            document: '',
        }

        this.onApprove = this.onApprove.bind(this);
        this.onDecline = this.onDecline.bind(this);
        this.viewDocument = this.viewDocument.bind(this);

    }

    componentDidMount() {

        let data = this.props.location.state


        console.log(data)
        this.setState({
            id: data.id,
            researcher: data.name,
            email: data.email,
            title: data.researchTitle,
            description: data.researchDescription,
            document: data.researchDocument
        })

    }

    onDecline = (e) => {
        e.preventDefault()

        let data = {
            id: this.state.id,
            to: this.state.email,
            subject: "ICAF research paper review completion",
            message: "Dear " + this.state.researcher + " \n" +
                "We are sorry to inform that your Research paper has been rejected for the ICAF conference"
                + "\n\n Best Regards, \n"
                + " ICAF reviwer team"
        }

        //axios call to decline research paper request
        axios.put('http://localhost:5000/reviwer/decline-research-paper', data).then(res => {
            this.props.history.push('/research-review')
        })
    }

    onApprove = (e) => {
        e.preventDefault()

        let data = {
            id: this.state.id,
            to: this.state.email,
            subject: "ICAF research paper review completion",
            message: "Dear " + this.state.researcher + " \n" +
                "Your Research paper has been approved for the ICAF conference Congradulations"
                + " \n\n"
                + 'Click here to complete payment : http://localhost:1234/'
                + "\n\n Best Regards, \n"
                + " ICAF reviwer team"
        }

        axios.put('http://localhost:5000/reviwer/accept-research-paper', data).then(res => {
            this.props.history.push('/research-review')
        })
        //axios call to approve research paper request

    }

    viewDocument = (e) => {
        e.preventDefault()
        window.open(this.state.document)
    }

    render() {
        return (
            <div>

                <Row>
                    <Col sm='1'></Col>
                    <Col sm='5'>
                        <h6 className='topic'>Review Research Paper</h6>

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

                        <form onSubmit={this.onSubmit}>
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}

                            <input className='inputfield'
                                type="text"
                                id="name"
                                name="name"
                                disabled
                                value={this.state.researcher}

                            >
                            </input>

                            <input className='inputfield'
                                type="text"
                                id="email"
                                name="email"
                                disabled
                                value={this.state.email}

                            >
                            </input>

                            <input className='inputfield'
                                type="text"
                                id="title"
                                name="title"
                                disabled
                                value={this.state.title}

                            >

                            </input>

                            <input className='inputfield'
                                type="text"
                                id="description"
                                name="description"
                                disabled
                                value={this.state.description}

                            >

                            </input>

                            <Button className='submitbtn' onClick={this.viewDocument} style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                <span className='btnTxt'>View Document</span>
                            </Button>

                            <Row>
                                <Col sm='4'>
                                    <Button className='submitbtn' onClick={this.onApprove} style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Approve</span>
                                    </Button>

                                </Col>


                                <Col sm='4'>
                                    <Button className='submitbtn' onClick={this.onDecline} style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Decline</span>
                                    </Button>

                                </Col>
                            </Row>


                        </form>

                    </Col>
                    <Col sm='2'></Col>
                </Row>
            </div>
        )
    }

}

export default ReviewResearchPaper