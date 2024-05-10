import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './styles/login.css';

const Login = () => {

  const [hasToken, setHasToken] = useState();
  const loginUser = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setHasToken(localStorage.getItem('token'));
  }, []);

  const {handleSubmit, register, reset} = useForm();

  const submit = async(data) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    await loginUser(url, data);
    reset({
      email: '',
      password: '',
    });
    setHasToken(localStorage.getItem('token'));
    setTimeout(() => {
      navigate('/cart');
    }, 2000);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setHasToken();
  }
  
  return (
    <>
      {
        hasToken ?
        <section>
          <button className='logout' onClick={handleLogout}>Logout</button>
        </section>
        :
        <section>
          <div className='card__login'>
            <form className='form' onSubmit={handleSubmit(submit)}>
              <div>
                <label htmlFor="email">Email</label>
                <input {...register('email')} id='email' type="email" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input {...register('password')} id='password' type="password" />
              </div>
              <button className='login'>Log in</button>
            </form>
          <p>If you are not registered yet <Link className='register' to = '/register'>Register</Link></p>
        </div>
        </section>
      }
    </>
  )
}

export default Login;