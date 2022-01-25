import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ProductCard(props) {
    return (
        <Card className="ms-3 mt-5 p-1" style={{ width: '30rem', backgroundColor: "grey" }}>
            <Row>
                <Col>
                    <Card.Img className="img-fluid" src="https://picsum.photos/780/1000" />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.color}
                        </Card.Text>
                        <Card.Text>
                            {props.length} Inches
                        </Card.Text>
                        <Card.Text>
                            ${props.price}
                        </Card.Text>
                        <Card.Text>
                            Left in Stock: {props.stock}
                        </Card.Text>
                        <Button variant="warning">Go somewhere</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ProductCard;


