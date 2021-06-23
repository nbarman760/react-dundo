import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import {addItems} from '../features/cart/cartSlice'; 
function Resto (props) {
    const cart = useSelector(state => state.cart)
    const dispatch  = useDispatch();
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.resturant.image} />
                <Card.Body>
                    <Card.Title>{props.resturant.name}</Card.Title>
                    <Card.Text>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />   <i>{props.resturant.address}</i>
                    </Card.Text>
                    <Card.Body>
                        <Rating rating={props.resturant.rating} />
                    </Card.Body>

                    <Link to={"/details/" + props.resturant.id}>
                        View Details
                    </Link>
                    <Button onClick={ () => dispatch(addItems(props.resturant))}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
export default Resto;