import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from './form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ updateAuthentication }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLoginSuccess = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        dispatch(setUser(userData));
        updateAuthentication(true);
        navigate('/profile');
    };

    const handleLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userData = {
                uid: user.uid,
                email: user.email,
                token: await user.getIdToken(),
            };
            handleLoginSuccess(userData);
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please check your email and password.');
        }
    };

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className='text-center flex flex-col gap-5 items-center'>
                {/* <div className='text-white text-4xl'>Login</div> */}
                <Form title="Login" handleClick={handleLogin} setNickname={() => {}} />
                <p className='text-cyan-300 text-4xl'>Еще нет аккаунта?</p>
                <Link to="/register" className='text-green-400 text-4xl'>Создать аккаунт</Link>
            </div>
        </div>
    );
};

export { Login };
