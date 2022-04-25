import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto mt-3'>
            <h3 className='text-center'>Login now</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="dark" className="px-3" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <p><small>New to GeniusCar? <Link to="/register" className='text-danger fw-bold text-decoration-none' onClick={navigateRegister}>Register Now</Link></small></p>
        </div>
    );
};

export default Login;