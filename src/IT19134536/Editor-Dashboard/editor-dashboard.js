
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Col, Row } from "reactstrap";
import ImgStyles from '../Stylesheet/Imgstyles'
import { Player, Controls } from '@lottiefiles/react-lottie-player';



class EditorDashboard extends Component {
    constructor(props) {
        super(props);

        this.navigate = this.navigate.bind(this)

    }

    navigate(path) {
        this.props.history.push(path)
    }



    render() {
        return (

            <div>
                <div>
                    <Player
                        autoplay
                        loop
                        src="https://assets6.lottiefiles.com/packages/lf20_2cwDXD.json"
                        style={{ height: '600px', width: '600px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
                <div className="cardCss">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="workshopBlock"></div>
                                    <h5 class="card-title">Add Conferance</h5>


                                    <Button className='gobtn'
                                        onClick={() => this.navigate('/add-conference')}
                                        style={{
                                            backgroundColor: '#341E71',
                                            borderRadius: '93px'
                                        }}>
                                        <span className='btnTxt'>GO</span>
                                    </Button>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="editWorkShopBlock"></div>
                                    <h5 class="card-title">Edit Conferance</h5>
                                    <Button className='gobtn'
                                        onClick={() => this.navigate('/edit-conference')}
                                        style={{
                                            backgroundColor: '#341E71',
                                            borderRadius: '93px'
                                        }}>
                                        <span className='btnTxt'>GO</span>
                                    </Button>


                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="keySpeakerBlock"></div>
                                    <h5 class="card-title">Add Key Speakers</h5>

                                    <Button className='gobtn'
                                        onClick={() => this.navigate('/add-key-speakers')}
                                        style={{
                                            backgroundColor: '#341E71',
                                            borderRadius: '93px'
                                        }}>
                                        <span className='btnTxt'>GO</span>
                                    </Button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}

export default EditorDashboard;