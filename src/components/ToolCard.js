import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function ToolCard(props) {


    return (
        <Card className="ms-3 mt-5 p-1 mobile-cards">
                    <Card.Img className="img-thumbnail" src={props.picture} />
                    <Card.Body className="">
                        <Card.Title className="d-flex justify-content-center">{props.name}</Card.Title>
                        <Card.Text className="d-flex justify-content-center">
                            ${props.price}
                        </Card.Text>
                        <Container className="d-flex justify-content-center">
                            <Button
                                variant="dark"
                                className="snipcart-add-item"
                                data-item-id={props.id}
                                data-item-name={props.name}
                                data-item-price={props.price}
                                data-item-description="Some fresh bacon">
                                    Add to Cart
                            </Button>                            
                        
                        </Container>
                        
                    </Card.Body>
        </Card>
    )
}

export default ToolCard;


