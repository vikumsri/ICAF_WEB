import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import RegisterCss from "../../Stylesheets/register.css";
import axios from "axios";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import FooterPage from "../Footer/footer-page";

const initialState = {
  id: "",
  fullName: "",
  userName: "",
  email: "",
  contactNo: "",
  password: "",
  type: "",
};

class Register extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.navigateToUserType = this.navigateToUserType.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let user = {
      fullName: this.state.fullName,
      userName: this.state.userName,
      email: this.state.email,
      contactNo: this.state.contactNo,
      password: this.state.password,
      type: this.state.type,
    };
    console.log("User Data", user);
    axios
      .post("http://localhost:5000/user/create", user)
      .then((response) => {
        console.log("Data :", response);
        this.state.id = response.data.data._id;
        console.log("UserID :", this.state.id);
        alert("Registered successfully");

        this.navigateToUserType(e, this.state.id);
      })
      .catch((error) => {
        console.log(error.message);
        alert("Please fill the required details");
      });
  }

  navigateToUserType(e, id) {
    console.log(id);
    window.location = `/user-type/${id}`;
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="1"></Col>
          <Col sm="5">
            <h1 className="topic">ICAF</h1>
            <h4 className="subTopic">
              International Conference on Application Frameworks
            </h4>
            <div className="imagebackground">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_u8o7BL.json"
                style={{ height: "398px", width: "600px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </Col>
          <Col sm="5">
            <h3 className="register">Register Now</h3>
            <h6 className="instructions">
              Please fill the following form and go through the guided
              registation
            </h6>
            <form onSubmit={this.onSubmit}>
              <input
                className="inputfield"
                placeholder="Full Name"
                name="fullName"
                value={this.state.fullName}
                required
                onChange={this.onChange}
              ></input>
              <input
                className="inputfield"
                placeholder="User Name"
                name="userName"
                value={this.state.userName}
                required
                onChange={this.onChange}
              ></input>
              <input
                type="email"
                className="inputfield"
                placeholder="Email"
                name="email"
                value={this.state.email}
                required
                onChange={this.onChange}
              ></input>
              <input
                type="number"
                className="inputfield"
                placeholder="Contact Number"
                name="contactNo"
                value={this.state.contactNo}
                required
                onChange={this.onChange}
              ></input>
              <input
                type="password"
                className="inputfield"
                placeholder="Password"
                name="password"
                value={this.state.password}
                required
                onChange={this.onChange}
              ></input>

              <row className="d-flex justify-content-between">
                <Col sm="1"></Col>
                {/* <button className="loginbtn">
                  <span className="btnTxt">Login</span>
                </button> */}
                <a
                  href="/user-login"
                  className="loginbtn"
                  // onClick={() => {
                  //   this.handleClick;
                  // }}
                >
                  Login
                </a>
                <button
                  type="submit"
                  className="registerButton"
                  //onClick={(e) => this.navigateToUserType(e, this.state.id)}
                >
                  Register
                </button>
              </row>
            </form>
          </Col>
        </Row>
        <FooterPage></FooterPage>
      </div>
    );
  }
}

export default Register;
