import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const ClassCard = (props) => {

    const classFactory = () => {
        return props.classList.map(e => {
            return (
            <div className="container">  
                <Card className="ms-3 mt-5 p-1 shadow bg-body rounded ">
                    <Card.Body className="">
                        <Card.Title className="d-flex justify-content-center">{e.name}</Card.Title>
                        <Card.Text className="d-flex justify-content-center">
                            ${e.price}
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-center">
                            {e.date}
                        </Card.Text>
                        <Card.Text className="d-flex justify-content-center">
                            {e.location.toUpperCase()}
                        </Card.Text>
                        <Container className="d-flex justify-content-center">
                            <Button
                                variant="dark"
                                className="snipcart-add-item"
                                data-item-id={e.id}
                                data-item-name={e.name}
                                data-item-price={e.price}
                                data-item-description={e.description}>
                                    Add to Cart
                            </Button>
                        </Container>
                    </Card.Body>
                </Card>
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