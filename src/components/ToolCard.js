import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link, Outlet } from "react-router-dom";
import Product from "./Product";



function ToolCard(props) {

    return (
        <div>
            <Card className="ms-3 mt-5 p-1 mobile-cards shadow bg-body rounded">
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
                            data-item-description={props.description}>
                                Add to Cart
                        </Button>
                    </Container>
                    <Container className="d-flex justify-content-center">
                        <Link className="nav-link text-secondary" to={`/tools/${props.id}`}> View More
                        </Link>
                    </Container>
                </Card.Body>
            </Card>
            <Outlet />

        </div>
        
    )
}

export default ToolCard;


