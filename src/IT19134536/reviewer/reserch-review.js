import React, { Component } from "react";
import axios from 'axios'
import { Button, Col, Row } from "reactstrap";


class ResearchReview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            researchPapers: []
        }

        this.navigateToSingleView = this.navigateToSingleView.bind(this)
    }

    componentDidMount() {
        //make axios call to get data from the back end
        axios.get('http://localhost:5000/reviwer/view-posts-for-review').then(res => {

            this.setState({
                researchPapers: res.data
            })

            console.log(res.data)

        })

    }

    navigateToSingleView(e, id, name, title, description, document) {
        e.preventDefault()

        //use id to get user and email from back end

        let data = {
            id: id,
            researchTitle: title,
            researchDescription: description,
            researchDocument: document,
            name: 'sample name',
            email: 'vchamindu@gmail.com'
        }



        this.props.history.push('/research-paper-single-view', data)
    }

    render() {
        return (
            <div>
                <Row className='userRow'>
                    <Col sm='2'></Col>
                    <Col sm='8'>
                        <h1 className='userTopic'>Research Papers for Approval</h1>
                        <table className="table">
                            <tr style={{ borderBottom: '3px solid #ddd', background: '#341E71', color: 'white' }}>
                                <th>Research Title</th>
                                <th>Description</th>
                                <hr /><hr />
                            </tr>


                            {this.state.researchPapers.length > 0 && this.state.researchPapers.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '2px solid #ddd' }} className='rowHover'>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button className='submitbtn' onClick={e => this.navigateToSingleView(e, item._id, item.name, item.tittle, item.description, item.document)} style={{ backgroundColor: '#341E71', borderRadius: '25px' }}>
                                            <span className='btnTxt'>Edit</span>
                                        </Button>
                                    </td>

                                    <hr /> <hr />
                                </tr>
                            ))}


                        </table>

                    </Col>
                    <Col sm='2'></Col>
                </Row>
            </div>
        )
    }
}

export default ResearchReview