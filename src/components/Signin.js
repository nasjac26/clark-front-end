import React, { useDebugValue } from 'react'
import whitelogo from '../assets/white-logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Signin({ user, setUser, setIsSignedIn, isSignedIn, setToolList }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    let url = `https://clarks-backend.herokuapp.com/`

    function handleSubmit(event) {
        event.preventDefault();
        fetch(url + "login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
        }).then((response) => {
            if (response.ok) {
                response.json().then((user) => localStorage.setItem("user", JSON.stringify(user)))
            } else(alert("Incorrect Email or Password!"));
        });
        navigate('/');
    }





    return (
        <div className="container">
            <div>
                <img style={{ maxWidth: 200 }} className="rounded mt-5 mx-auto d-block" src={whitelogo}></img>
            </div>
            <div className="container text-white m-5 mx-auto">
                <p className="text-center"></p>
            </div>

            <div>
                Signup and email <b>phaneshairextensions@gmail.com</b> with a picture of your certificate with the email you registered with to be approved industry discounts.
            </div>

            {/* form container */}
            <div className="Login container p-3 rounded" style={{ backgroundColor: "#eed393" }}>
                <Form style={{ backgroundColor: "#eed393" }} onSubmit={handleSubmit}>
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
                    <Button block size="lg" variant="dark" type="submit" disabled={!validateForm()} className='mt-3'>
                    Login
                    </Button>

                    <a href="/signup" className="nav-link text-secondary">Signup</a>
                </Form>
        </div>
            </div>
    )
}

export default Signin;
