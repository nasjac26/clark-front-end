import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import whitelogo from '../assets/white-logo.png';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signup({ setUser, setIsSignedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && password === passwordConfirmation
    }

    let url = "http://localhost:3001/signup"

    function handleSubmit(event) {
        event.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then((response) => {
                if (response.ok) {
                    response.json().then((user) => setUser(user))
                    .then(setIsSignedIn(true));    
            } else(console.log("something went wrong on signup"))
        });
        navigate('/');
    }

    
    return (
        <div className='signup'>
            <div>
                <img style={{ maxWidth: 200 }} className="rounded m-5 mx-auto d-block" src={whitelogo} alt="The Clark Salon Logo"></img>
            </div>

            
            {/* form container */}
            <div style={{ backgroundColor: "#eed393" }} className="container rounded">
                <Form className="m-2" onSubmit={handleSubmit}>
                    <Form.Group size="lg"  controlId="email">
                        <Form.Label className="pt-2">Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" variant="dark" className="m-2" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Signup;
