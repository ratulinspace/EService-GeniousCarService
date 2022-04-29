import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Login.css";

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        // loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    };

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // console.log(email, password);

        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
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

                <Button variant="dark" className="px-3 w-25 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <br />
            <p><small>New to GeniusCar? <Link to="/register" className='text-danger fw-bold text-decoration-none' onClick={navigateRegister}>Register Now</Link></small></p>
            <p><small>Forget password? <Link to="/register" className='text-danger fw-bold text-decoration-none' onClick={resetPassword}>Reset password</Link></small></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;