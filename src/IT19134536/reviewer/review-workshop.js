import React, { Component } from 'react';
import { Button, Col, Row } from "reactstrap";
import BaseStyles from '../Stylesheet/base-styles';
import axios from 'axios';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


class ReviewWorkShopPresenter extends Component {
    constructor(props) {
        super(props);
        this.onApprove = this.onApprove.bind(this);
        this.onDecline = this.onDecline.bind(this);
        this.viewDocument = this.viewDocument.bind(this);


        this.state = {
            id: '',
            name: '',
            workshopPresenter: '',
            title: '',
            description: '',
            document: '',
            email: ''


        }
    }

    componentDidMount() {
        let data = this.props.location.state
        console.log(data)
        this.setState({
            id: data.id,
            email: data.email,
            workshopPresenter: data.name,
            title: data.workShopTitle,
            description: data.workShopDescription,
            document: data.workShopDocument
        })

    }

    onDecline(e) {
        e.preventDefault()

        let data = {
            id: this.state.id,
            to: this.state.email,
            subject: "ICAF research paper review completion",
            message: "Dear " + this.state.researcher + " \n" +
                "We are sorry to inform that your Workshop proposal has been rejected for the ICAF conference"
                + "\n\n Best Regards, \n"
                + " ICAF reviwer team"
        }

        //axios call to decline research paper request
        axios.put('http://localhost:5000/reviwer/decline-work-shop', data).then(res => {
            this.props.history.push('/work-shop-list')
        })
    }

    onApprove(e) {
        e.preventDefault()

        console.log(this.state.id)

        let data = {
            id: this.state.id,
            to: this.state.email,
            subject: "ICAF Workshop proposal review completion",
            message: "Dear " + this.state.researcher + " \n" +
                "Your Workshop proposal has been approved for the ICAF"
                + " \n\n"
                + 'Click here to complete payment : http://localhost:1234/'
                + "\n\n Best Regards, \n"
                + " ICAF reviwer team"
        }

        axios.put('http://localhost:5000/reviwer/accept-work-shop', data).then(res => {
            this.props.history.push('/work-shop-list')
        })
        //axios call to approve research paper request

    }

    viewDocument(e) {
        e.preventDefault()
        window.open(this.state.document)
    }

    render() {
        return (
            <div>

                <Row>
                    <Col sm='1'></Col>
                    <Col sm='5'>
                        <h1 className='topic'>Work Shop</h1>

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

                        <form >
                            {/*<AiOutlineMail/>*/}
                            {/*<Mail size={25} className='mailIcon'/>*/}

                            <input className='inputfield'
                                type="text"
                                id="workshopPresenter"
                                name="workshopPresenter"
                                disabled
                                value={this.state.workshopPresenter}

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
                                <Col sm='1'>
                                    <Button className='submitbtn' onClick={this.onApprove} style={{ backgroundColor: '#341E71', borderRadius: '93px' }}>
                                        <span className='btnTxt'>Approve</span>
                                    </Button>

                                </Col>

                                <Col sm='4'></Col>

                                <Col sm='1'>
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

export default ReviewWorkShopPresenter