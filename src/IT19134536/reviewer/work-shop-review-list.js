import React, { Component } from "react"
import { Button, Col, Row } from "reactstrap";
import BaseStyles from '../Stylesheet/base-styles';
import axios from 'axios'

class WorkShopReviewList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            workshoplist: []
        }

        this.navigateToSingleView = this.navigateToSingleView.bind(this)
    }

    componentDidMount() {

        //make axios call to get data from the back end
        axios.get('http://localhost:5000/reviwer/view-workshop-for-review').then(res => {
            this.setState({
                workshoplist: res.data
            })
        })

    }

    navigateToSingleView(e, id, userId, title, description, document) {

        axios.get('http://localhost:5000/user/getUserById/' + userId).then(res => {
            console.log('+++++++++++++++')
            console.log(res)
            let data = {
                id: id,
                workShopTitle: title,
                workShopDescription: description,
                workShopDocument: document,
                name: res.data.fullName,
                email: res.data.email
            }
            this.props.history.push('/work-shop-single-view', data)
        }
        )

    }
    render() {
        return (
            <div>
                <Row className='userRow'>
                    <Col sm='2'></Col>
                    <Col sm='8'>
                        <h1 className='userTopic'>Workshop proposals for Approval</h1>
                        <table className="table">
                            <tr style={{ borderBottom: '3px solid #ddd', background: '#341E71', color: 'white' }}>
                                <th>WorkShop Title</th>
                                <th>Description</th>
                                <hr /><hr />
                            </tr>


                            {this.state.workshoplist.length > 0 && this.state.workshoplist.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '2px solid #ddd' }} className='rowHover'>
                                    <td>{item.tittle}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button className='submitbtn' onClick={e => this.navigateToSingleView(e, item._id, item.userId, item.tittle, item.description, item.document)} style={{ backgroundColor: '#341E71', borderRadius: '25px' }}>
                                            <span className='btnTxt'>View</span>
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

export default WorkShopReviewList