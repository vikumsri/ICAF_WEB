import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import footer from "../../Stylesheets/footer.css";

class FooterPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="0"></Col>
          <Col sm="12" className="bgcolor">
            <Row>
              <Col sm="1"></Col>
              <Col>
                <h5 className="contactUs">Contact Us</h5>
                <hr className="divider"></hr>
              </Col>
              <Col sm="1"></Col>
            </Row>
            <Row>
              <Col sm="1"></Col>
              <Col sm="5">
                <h5 className="sliitheading">
                  Sri Lanka Institue of Information technology, Faculty of
                  computing
                </h5>
                <Row>
                  <Col sm="6">
                    <p className="paragraphs1">
                      Telephone: +94 112076892{" "}
                      <p className="paragraphs2">Email: info.icaf@sliit.lk</p>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col sm="3"></Col>
              <Col className="footerLogo"></Col>

              <Col sm="1"></Col>
            </Row>
          </Col>
          <Col sm="0"></Col>
        </Row>
      </div>
    );
  }
}

export default FooterPage;
