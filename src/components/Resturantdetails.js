import React, { Component } from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { Rating } from './Rating';
class Resturantdetails extends Component {
    constructor() {
        super();
        this.state = {
            restoraunt: null
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        fetch("http://localhost:3000/restoruants/" + id).then((response) => {
            response.json().then(result => {
                // console.log(result);
                this.setState({
                    restoraunt: result
                })
            })
        })
    }

    render() {
        return (
            <div className="details">
                {this.state.restoraunt ?
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                <Image src="https://www.elitetraveler.com/wp-content/uploads/2017/10/Hotel-Eden-La-Terrazza-scaled-e1600071873644.jpg" rounded width="100%" height="auto" />
                            </Col>
                            <Col xs={6} md={6} lg={6} className="text-left">
                                <Row>
                                    <Col xs={12} lg={12} md={12}><h3>{this.state.restoraunt.name}</h3>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={12} md={12}><em>{this.state.restoraunt.address}</em></Col>
                                </Row>
                                <Row>
                                    <Col xs={12} lg={12} md={12}>
                                        <Rating rating={this.state.restoraunt.rating}/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    : "Loading Please Wait..."}
            </div>
        );
    }
}

export default Resturantdetails;