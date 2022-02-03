import React from 'react'
import whitelogo from '../assets/white-logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signin({ user, setUser, setIsSignedIn, isSignedIn }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    let url = "http://localhost:3001/login"

    function handleSubmit(event) {
        event.preventDefault();
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user))
                .then(setIsSignedIn(true));
            } else(console.log("something went wrong", email, password))
            
        });
        navigate('/');
    }





    return (
        <div className="container">
            <div>
                <img style={{ maxWidth: 200 }} className="rounded mt-5 mx-auto d-block" src={whitelogo}></img>
            </div>
            <div className="container text-white m-5 mx-auto">
                <p className="text-center">Signup to register for industry discounts</p>

            </div>
            
            {/* form container */}
            <div className="Login">
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
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
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                    </Button>
                </Form>
        </div>
            </div>
    )
}

export default Signin;
