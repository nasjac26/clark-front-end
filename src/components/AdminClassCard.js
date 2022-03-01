import React, { useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'



const AdminClassCard = (props) => { 

    function handleDeleteClick() {
        fetch(`http://localhost:3001/events/${props.id}`, {
            method: "DELETE",
        }).then(props.setClassList(props.classList.filter(e => e.id != props.id)))
    }
    

    return (
        <div>
            <div className="container w-25 p-2"> 
                <Col className="container">
                    <Card className="shadow bg-body rounded">
                        <Card.Body className="">
                            <Card.Title className="d-flex justify-content-center">{props.name}</Card.Title>
                            <Card.Text className="d-flex justify-content-center">
                                ${props.price}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-center">
                                {props.date}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-center">
                                {props.location}
                            </Card.Text>
                            <Container className="d-flex justify-content-center">
                                <Button variant="dark" onClick={handleDeleteClick}>Remove from site</Button>
                            </Container>
                        </Card.Body>
                    </Card>
                </Col>
            </div> 
        </div>
    )
}

export default AdminClassCard;