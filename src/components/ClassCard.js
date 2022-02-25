import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const ClassCard = (props) => {
    const classFactory = () => {

        return props.classList.map(e => {
            return (
            <div className="container w-25 p-2"> 
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
                                {e.location}
                            </Card.Text>
                            <Container className="d-flex justify-content-center">
                                <Button
                                    variant="dark"
                                    className="snipcart-add-item"
                                    data-item-id={e.id}
                                    data-item-name={e.name}
                                    data-item-price={e.price}
                                    data-item-description={e.description}
                                    data-item-url={`http://localhost:3001/events/`}>
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