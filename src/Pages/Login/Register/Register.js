import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = event => {
        navigate("/login")
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

    }

    return (
        <div className='register-form'>
            <h1 className='text-primary' style={{ textAlign: 'center' }}>Please register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='your-name' />

                <input type="email" name="email" placeholder='Email address' required />

                <input type="password" name="password" placeholder='password' required />

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ?<span style={{ cursor: 'pointer' }} className='text-danger' onClick={navigateLogin}>Please Login</span></p>
        </div>
    );
};

export default Register;