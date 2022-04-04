import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const ClassCard = (props) => {
    const classFactory = () => {

        return props.classList.map(e => {
            return (
            <div className="container p-2"> 
                <Col className="container">
                    <Card className="shadow bg-body rounded">
                        <Card.Body className="">
                            <Card.Title className="d-flex justify-content-center">{e.name}</Card.Title>
                            <Card.Text className="d-flex justify-content-center">
                                ${e.price}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-center">
                                {e.date}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-center">
                                Location of Class: 
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-around">
                                {e.location}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-center">
                                Time of class: 
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-around">
                                {e.time}
                            </Card.Text>
                            <Container className="d-flex justify-content-center">
                                <Button
                                    variant="dark"
                                    className="snipcart-add-item"
                                    data-item-id={e.id}
                                    data-item-name={e.name}
                                    data-item-price={e.price}
                                    data-item-shippable={false}
                                    data-item-description={`Instructional class on ${e.date} at ${e.time} in ${e.location}`}
                                    data-item-url={`https://clarks-backend.herokuapp.com/events/`}>
                                        Add to Cart
                                </Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </div> 
            )
            }
        )  
    }

    return (
        <div>
                {classFactory()}
        </div>
    )
}

export default ClassCard;