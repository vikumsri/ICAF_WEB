import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Research from "../../Stylesheets/research.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import axios from "axios";
import firebase from "./firebase";
import FooterPage from "../Footer/footer-page";

class ResearchUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      tittle: "",
      descritpion: "",
      document: null,
      urlFile: "",
      status: "PENDING",
      paymentStatus: "UNPAID",
      componentStatus: false,
      readyToSubmit: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.onNotUpload = this.onNotUpload.bind(this)
  }

  componentDidMount() {
    this.state.userId = this.props.match.params.id;
    console.log("User ID :", this.state.userId);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFileChange = (event) => {

    // Update the state
    this.setState({ document: event.target.files[0] });
  };

  //this is the method invokes when upload button clicks 
  handleSave =  () => {

    this.setState({
      componentStatus: true
    })

    //uploading file to storage and setting the download link to state
    let bucketName = "documents";
    let file = this.state.document;
    let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
    let uploadTask =  storageRef.put(file)

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
      let downloadURL = uploadTask.snapshot.downloadURL;

      storageRef.getDownloadURL().then((url) => {
        this.setState({ urlFile: url });
        console.log("Download:", this.state.urlFile);
        this.setState({
          componentStatus: false,
          readyToSubmit: true
        })
      });
    });
  };

  onSubmit(e) {
    e.preventDefault();

    console.log("Document:", this.state.urlFile);

    let research = {
      userId: this.state.userId,
      tittle: this.state.tittle,
      description: this.state.descritpion,
      document: this.state.urlFile,
      status: this.state.status,
      paymentStatus: this.state.paymentStatus,
    };

    console.log(research);
    axios
      .post("http://localhost:5000/research/createresearch", research)
      .then((response) => {
        console.log("Data :", response);

        alert("Inserted successfully");

        window.location = '/home-page'
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  onNotUpload() {
    e.preventDefault()
    alert('File upload not complete please wait...')
  }

  render() {
    return (
      <div>
        <Row>
          <Col sm="1"></Col>
          <Col sm="2">
            <div className="imageStyle">
              <Player
                autoplay
                loop
                src="https://assets6.lottiefiles.com/packages/lf20_h59xofz0.json"
                style={{ height: "160px", width: "160px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </Col>
          <Col sm="5">
            <h1 className="topic">Researcher</h1>
          </Col>
        </Row>
        <Row>
          <Col sm="1"></Col>
          <Col sm="7">
            <row className="d-flex justify-content-between">
              <input
                type="file"
                className="researchfile"
                onChange={this.onFileChange}
                accept="application/pdf"
                required
              ></input>
              <div className={this.state.componentStatus ? "uploadIndicator" : "uploadIndicatorNotVisible"}>
                <Player
                  autoplay
                  loop
                  src="https://assets4.lottiefiles.com/temp/lf20_edwUDF.json"
                  style={{ marginTop: "10px", height: "50px", width: "50px" }}
                >
                  <Controls
                    visible={false}
                    buttons={["play", "repeat", "frame", "debug"]}
                  />
                </Player>
              </div>
              <button className="submitbtn" onClick={this.handleSave}>
                Upload
              </button>
            </row>
            <form onSubmit={this.state.readyToSubmit ? this.onSubmit : this.onNotUpload}>
              <input
                className="researchInput"
                placeholder="Tittle of the Research"
                name="tittle"
                value={this.state.tittle}
                onChange={this.onChange}
                required
              ></input>
              <row className="d-flex justify-content-between">
                <textarea
                  className="researchtextarea"
                  placeholder="Brief Description"
                  name="descritpion"
                  value={this.state.descritpion}
                  onChange={this.onChange}
                  required
                >
                  {this.state.descritpion}
                </textarea>

                <button
                  className="submitbtn"

                  style={{ marginTop: "37vh", marginLeft: "3vh" }}
                >
                  Submit
                </button>
              </row>
            </form>
          </Col>
        </Row>
        <br></br>
        <FooterPage></FooterPage>
      </div>
    );
  }
}

export default ResearchUpload;
