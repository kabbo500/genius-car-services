import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
const Register = () => {
    const [agree, setAgree] = useState(false);


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate("/login")
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log(user)
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName });
        navigate('/home');

        // if (agree) {
        //     createUserWithEmailAndPassword(email, password);
        // }

    }

    return (
        <div className='register-form'>
            <h1 className='text-primary' style={{ textAlign: 'center' }}>Please register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='your-name' />

                <input type="email" name="email" placeholder='Email address' required />

                <input type="password" name="password" placeholder='password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accepts Terms and condition</label>
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accepts Terms and condition</label> */}

                <input
                    disabled={!agree}
                    style={{ border: 'none' }} className='bg-info w-50 d-block mx-auto mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account ?<span style={{ cursor: 'pointer' }} className='text-primary' onClick={navigateLogin}>Please Login</span></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;