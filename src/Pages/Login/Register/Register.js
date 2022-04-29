import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        // loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [agree, setAgree] = useState(false);

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {

        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const agree = event.target.terms.checked;

        if (agree) {
            // console.log(email, password);

            createUserWithEmailAndPassword(email, password);
        }

    }

    return (
        <div className="container w-50 mx-auto mt-3">
            <h3 className="text-center">Register now</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                    <input onClick={() => setAgree(!agree)} type="checkbox" className="mx-2 mt-3" name="terms" id="terms" />
                    <label className={agree ? 'text-success' : 'text-danger'} htmlFor='terms'>Accept GeniusCar terms and conditions</label>
                </Form.Group>

                <input
                    disabled={!agree}
                    className="bg-dark text-light p-1 px-3 w-25 d-block mx-auto border border-dark rounded"
                    type="submit"
                    value="Register" />
            </Form>
            <br />
            <p><small>Already have an account? <Link to="/login" className='text-danger fw-bold text-decoration-none' onClick={navigateLogin}>Login Now</Link></small></p>
            <SocialLogin></SocialLogin>
        </div >
    );
};

export default Register;