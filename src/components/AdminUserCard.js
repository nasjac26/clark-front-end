import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const AdminUserCard = (props) => {
    let licensedBoolean = props.licensed

    licensedBoolean = licensedBoolean.toString()

    const handleSubmit = () => {
        fetch(`http://localhost:3001/users/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                licenced: !licensedBoolean,
                password: props.password_digest
            }),   
        })
    .then((response) => response.json())
    .then((json) => console.log(json));
    }

    return (
    <div className="container w-25 p-2"> 
        <Col className="container">
            <Card className="shadow bg-body rounded">
                <Card.Body className="">
                    <Card.Title className="d-flex justify-content-center">{props.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                        {props.email}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-center">
                        {props.date}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-center">
                        {licensedBoolean}
                    </Card.Text>
                    <Container className="d-flex justify-content-center">
                    </Container>
                </Card.Body>
                <button onClick={(handleSubmit)}>Update user to licensed?</button>
            </Card>
        </Col>
    </div> 
    )
}

export default AdminUserCard;