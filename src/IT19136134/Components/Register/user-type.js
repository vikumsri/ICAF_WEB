import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import axios from "axios";
//import { Player, Controls } from "@lottiefiles/react-lottie-player";

import User from "../../Stylesheets/userType.css";

class UserType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      type: "",
    };

    this.navigateToResearch = this.navigateToResearch.bind(this);
    this.navigateWorkshop = this.navigateWorkshop.bind(this);
    this.navigateToPayment = this.navigateToPayment.bind(this);
    this.onSUbmit = this.onSUbmit.bind(this);
  }

  componentDidMount() {
    this.state.id = this.props.match.params.id;
    console.log("User ID :", this.state.id);
  }

  onSUbmit(e) {
    e.preventDefault();
    let userType = {
      type: e.target.value,
    };
    console.log(userType.type);
    console.log(this.state.id);
    axios
      .put(`http://localhost:5000/user/update/${this.state.id}`, userType)
      .then((response) => {
        console.log("User:", response.data);
      })
      .catch((error) => {
        alert(error.message);
      });

    if (userType.type == "WORKSHOP PRESENTER") {
      console.log(" workshopTrue");
      this.navigateWorkshop(e, this.state.id);
    } else if (userType.type == "RESEARCHER") {
      this.navigateToResearch(e, this.state.id);
      console.log("researcher true");
    } else {
      console.log("attendee true");
      this.navigateToPayment(e, this.state.id);
    }
  }

  navigateWorkshop(e, id) {
    window.location = `/workshop-presentation/${id}`;
  }

  navigateToResearch(e, id) {
    window.location = `/research-upload/${id}`;
  }

  navigateToPayment(e) {
    window.location = `/payment-gateway/${id}`;
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="1"></Col>
          <Col sm="6">
            <h1 className="userTypeMainTopic">What are you ?</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="1"></Col>
          <Col sm="10" className="subTopic">
            <h3>
              What you will be doing in this conference. Please select one of
              the below to continue
            </h3>
          </Col>
          <Col sm="1"></Col>
        </Row>
        <row className="d-flex justify-content-between">
          <Col sm="1"></Col>
          <Col sm="10">
            <button
              type="submit"
              className="userButtonWorkshop"
              value="WORKSHOP PRESENTER"
              onClick={this.onSUbmit}
            ></button>
            <button
              type="submit"
              className="userButtonResearch"
              value="RESEARCHER"
              onClick={this.onSUbmit}
            ></button>
            <button
              type="submit"
              className="userButtonAttendee"
              value="ATTENDEE"
              onClick={this.onSUbmit}
            ></button>
          </Col>
          <Col sm="1"></Col>
        </row>
        <Row className="d-flex justify-content-between">
          <Col sm="1"></Col>
          <Col sm="3">
            {" "}
            <label className="userLabel">Workshop presenter</label>
          </Col>
          <Col sm="3">
            {" "}
            <label className="userLabel">Researcher</label>
          </Col>
          <Col sm="3">
            {" "}
            <label className="userLabel">Attendee</label>
          </Col>
          <Col sm="1"></Col>
        </Row>
      </div>
    );
  }
}

export default UserType;
