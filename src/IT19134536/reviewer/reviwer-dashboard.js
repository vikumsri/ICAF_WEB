import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Reviwer from '../Stylesheet/reviwer.css'
import { Player, Controls } from "@lottiefiles/react-lottie-player";

class ReviewerDashboard extends Component {
    constructor(props) {
        super(props)
        this.navigateToReserchReviewPage = this.navigateToReserchReviewPage.bind(this)
        this.navigateToWorkShopPropsalReviewPage = this.navigateToWorkShopPropsalReviewPage.bind(this)
    }

    navigateToReserchReviewPage(e) {
        this.props.history.push('/research-review')
    }

    navigateToWorkShopPropsalReviewPage(e) {
        this.props.history.push('/work-shop-list')
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="10">
                        <row className='d-flex justify-content-between'>

                            <Col sm='1'></Col>

                            <button className='box1' value="Research" onClick={this.navigateToReserchReviewPage}>
                                <div className="">
                                    <Player
                                        value="Research"
                                        autoplay
                                        loop
                                        src="https://assets6.lottiefiles.com/private_files/lf30_jrhj68re.json"
                                        style={{ height: "600px", width: "600px" }}>
                                        <Controls
                                            visible={false}
                                            buttons={["play", "repeat", "frame", "debug"]}
                                        />
                                    </Player>
                                    <label className="titleText">Research</label>
                                </div>
                            </button>



                            <button className='box2' value="Research" onClick={this.navigateToWorkShopPropsalReviewPage}>
                                <Player
                                    autoplay
                                    loop
                                    src="https://assets7.lottiefiles.com/packages/lf20_kle1s9re.json"
                                    style={{ height: "600px", width: "600px" }}>
                                    <Controls
                                        visible={false}
                                        buttons={["play", "repeat", "frame", "debug"]}
                                    />
                                </Player>
                                <label className="titleText">Workshop</label>
                            </button>




                        </row>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default ReviewerDashboard