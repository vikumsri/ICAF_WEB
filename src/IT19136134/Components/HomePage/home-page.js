import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import home from "../../Stylesheets/homepage.css";
import "@fontsource/poiret-one"; // Defaults to weight 400.
import FooterPage from "../Footer/footer-page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import navBar from '../../../IT19135830/Components/ClientSideNavBar/navBar'
import axios from "axios";

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conference_title: "",
      conference_date: "",
      conference_description: "",
      conference_logo_link: "",
      conference_background_image_link: "",
      conference_annoucement: "",
      conference_venue: "",
      page: <div></div>

    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/conference/get-conference-details').then(res => {

      console.log(res)
      this.setState({
        conference_title: res.data[0].conference_title,
        conference_date: res.data[0].conference_date,
        conference_description: res.data[0].conference_description,
        conference_logo_link: res.data[0].conference_logo_link,
        conference_background_image_link: res.data[0].conference_background_image_link,
        conference_annoucement: res.data[0].conference_announcement,
        conference_venue: res.data[0].conference_venue,
        status: res.data[0].status,
      })

      if (res.data[0].status == "ACCEPTED") {
        this.setState({
          page: <div>
            <Route component={navBar}></Route>
            <Row className="rowstyle">
              <Col sm="1"></Col>
              <Col>
                <div className="divHomeImage">
                  <div style={{ backdropFilter: "blur(2px)" }}>
                    <h1
                      className="homeTopic"
                      style={{
                        fontFamily: "Poiret One",
                      }}
                    >
                      {this.state.conference_title}
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="https://i.imgur.com/OgreQtW.png" className="logoSliit"
                        style={{
                          width: "200px",
                          height: "200px",
                        }} />
                    </div>
                    <br></br>
                    <h4 className="homeDate">{this.state.conference_date}</h4>
                    <h4 className="homesliit">
                      {this.state.conference_venue}
                    </h4>
                  </div>
                </div>
                <br></br>
                <h6 className="aboutTopic">About Conference</h6>
                <p className="aboutParagragh ">
                  {this.state.conference_description}
                </p>
                <br></br>
                <div className="callsOpen">
                  <h4>{this.state.conference_annoucement}</h4>
                </div>
              </Col>

              <Col sm="1"></Col>
            </Row>
            <FooterPage />
          </div>
        })
      } else {
        this.setState({
          page: <h1>This conference is not approved yet</h1>
        })
      }

    })
  }

  render() {
    return (
      <div>{this.state.page}</div>
    );
  }
}

export default Homepage;
