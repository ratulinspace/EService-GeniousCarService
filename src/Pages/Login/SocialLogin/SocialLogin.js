import React from 'react';
import "./SocialLogin.css";
import logo1 from "../../../images/social/google-logo.png";
import logo2 from "../../../images/social/facebook-icon.png";
import logo3 from "../../../images/social/github-logo.png";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error || error1 || error2) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    };

    if (user || user1 || user2) {
        navigate('/home');
    }

    if (loading || loading1 || loading2) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-dark bg-opacity-10 w-50"></div>
                <p className="mt-2 px-3">or</p>
                <div style={{ height: '1px' }} className="bg-dark bg-opacity-10 w-50"></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-evenly mt-2 mb-2'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn-dgn-google w-75 d-block mx-auto'>
                    <img style={{ height: "30px" }} className='mx-2' src={logo1} alt="" />
                    Google Sign In
                </button>
            </div>
            <div className='d-flex justify-content-evenly mt-2 mb-2'>
                <button
                    onClick={() => signInWithFacebook()}
                    className='btn-dgn-google w-75 d-block mx-auto'>
                    <img style={{ height: "30px" }} className='mx-2' src={logo2} alt="" />
                    Facebook Sign In
                </button>
            </div>
            <div className='d-flex justify-content-evenly mt-2 mb-2'>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn-dgn-google w-75 d-block mx-auto'>
                    <img className='mx-2' src={logo3} alt="" />
                    Github Sign In
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;