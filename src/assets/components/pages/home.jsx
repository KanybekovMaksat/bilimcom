import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../../store/slices/userSlice';
import Navbar from '../Banbar';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  return (
    <div>
      <Navbar />
      {isAuth ? (
        <div>
          <h1>Welcome, {email}!</h1>
          <button onClick={() => {
            dispatch(removeUser());
            navigate('/login');
          }}>
            Log out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
