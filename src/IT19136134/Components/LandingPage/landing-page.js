import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import home from "../../Stylesheets/landingpage.css";
import "@fontsource/poiret-one"; // Defaults to weight 400.

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage(e) {
    window.location = `/home-page`;
  }

  render() {
    return (
      <div className="bngImage">
        <div>
          <Row className="rowstyle">
            <Col sm="3"></Col>
            <Col className="logoBlock"></Col>
            <Col sm="3"></Col>
          </Row>
          <Row>
            <Col sm="3"></Col>
            <Col>
              {" "}
              <h1 className="headTopic" style={{ fontFamily: "Poiret One" }}>
                International Conference on Application Frameworks
              </h1>
              <h1 className="headDate">2021</h1>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  className="viewEvent"
                  onClick={(e) => this.navigateToHomePage(e)}
                >
                  View Events
                </button>
              </div>
            </Col>
            <Col sm="3"></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default LandingPage;
