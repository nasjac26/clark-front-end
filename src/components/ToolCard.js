import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ToolCard(props) {
    return (
        <Card className="ms-3 mt-5 p-1 mobile-cards">
            <Row>
                <Col>
                    <Card.Img className="img-thumbnail" src={props.picture} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                            {props.color}
                        </Card.Text>
                        <Card.Text>
                            ${props.price}
                        </Card.Text>
                        <Card.Text>
                            Left in Stock: {props.stock}
                        </Card.Text>
                        <Button
                            variant="dark"
                            className="snipcart-add-item"
                            data-item-id={props.id}
                            data-item-name={props.name}
                            data-item-price="13"
                            data-item-weight="20"
                            data-item-description="Some fresh bacon">
                                Add to Cart
                        </Button>

    
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default ToolCard;


