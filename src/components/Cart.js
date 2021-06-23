import { useSelector } from "react-redux";
import { Row, Col, Container, Image } from "react-bootstrap";

function Cart() {
    const mycartItems = useSelector(state => state.cart.cartItems);
    console.log("from cart page", mycartItems)
    return (
        <div className="cart-page">
            <Container fluid className="text-left">
                <Row>
                    <Col>
                        Image
                    </Col>
                    <Col> Name</Col>
                    <Col>Rating</Col>
                    <Col></Col>
                </Row>
                {mycartItems.length > 0 ?
                    mycartItems.map((item, i) =>
                        <Row key={i} className="cart__item">
                            <Col>
                                <Image src={item.image} width="100" rounded></Image>
                            </Col>
                            <Col>
                                <span>{item.name}</span>
                            </Col>
                            <Col>
                                <span>{item.rating}</span>
                            </Col>
                            <Col></Col>
                        </Row>
                    )
                    : "No Items Available"
                }
            </Container>
        </div>
    )
}

export default Cart;