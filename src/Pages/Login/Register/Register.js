import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {

        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className="container w-50 mx-auto mt-3">
            <h3 className="text-center">Register now</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="dark" className="px-3" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <p><small>Already have an account? <Link to="/login" className='text-danger fw-bold text-decoration-none' onClick={navigateLogin}>Login Now</Link></small></p>
        </div>
    );
};

export default Register;