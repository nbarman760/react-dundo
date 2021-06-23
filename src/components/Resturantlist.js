import React, { Component } from 'react';
import Resto from './Resto';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Resturantlist extends Component {
    constructor() {
        super();
        this.state = {
            resto: null
        };
    }
    componentDidMount() {
         fetch('http://localhost:3000/restoruants').then((response)=>{
             response.json().then((result)=>{
                 console.log(result);
                 this.setState({
                     ...this.state,
                     resto: result
                 })
             })
         })
    }
    render() {
        return (
            <div>
                {this.state.resto ?
                    <Container fluid>
                        <Row>
                            {this.state.resto.map((resturant, i) =>
                                <Col key={i}>  <Resto resturant={this.state.resto[i]} /></Col>
                            )}
                        </Row>
                    </Container>
                    : "No resturant found"}
            </div>
        );
    }
}

export default Resturantlist;