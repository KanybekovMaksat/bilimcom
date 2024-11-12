import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form } from '../form';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../store/slices/userSlice';
import { auth } from '../../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase';

const Register = ({ updateAuthentication }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');

  const handleRegisterSuccess = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('lessonProgress', '1');
    dispatch(setUser(userData));
    updateAuthentication(true);
    navigate('/profile');
  };
  

  const handleRegister = async (email, password, nickname) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      const userData = {
        uid: user.uid,
        email: user.email,
        token: user.stsTokenManager.accessToken,
        nickname: nickname,
      };
  
      handleRegisterSuccess(userData);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };
  

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='text-center flex flex-col gap-5 items-center'>
        {/* <div className='text-white text-4xl'>Register</div> */}
        <Form title="Register" handleClick={handleRegister} setNickname={setNickname} />
        <p className='text-cyan-300 text-4xl'>Уже есть аккаунт?</p>
        <Link to="/login" className='text-green-400 text-4xl'>Войти</Link>
      </div>
    </div>
  );
};

export default Register;
