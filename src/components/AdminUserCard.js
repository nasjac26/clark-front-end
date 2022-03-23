import React from "react";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'


const AdminUserCard = (props) => {
    let licensedBoolean = props.licensed

    licensedBoolean = licensedBoolean.toString()
    // const updatedUser = {
    //     id: props.id,
    //     name: props.name,
    //     password_digest: props.password_digest,
    //     email: props.email,
    //     licenced: !props.licensed,
    //     admin: props.admin
    // }

    const handleSubmit = () => {
        fetch(`https://clarks-backend.herokuapp.com/users/${props.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({licenced: !props.licensed})  
        })
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert("Successfully updated! Please refresh and relogin to reflect changes")
    licensedBoolean = !licensedBoolean
    }

    return (
    <div className=""> 
        <Col className="">
            <Card className="">
                <Card.Body className="">
                    <Card.Title className="d-flex justify-content-center ">{props.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-center">
                        {props.email}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-center">
                        {props.date}
                    </Card.Text>
                    <Card.Text className="d-flex justify-content-center">
                        Licensed? {licensedBoolean}
                    </Card.Text>
                    <Container className="d-flex justify-content-center">
                    </Container>
                </Card.Body>
                <button onClick={(handleSubmit)}>Change Licensed</button>
            </Card>
        </Col>
    </div> 
    )
}

export default AdminUserCard;