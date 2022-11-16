import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Google, AcUnitRounded } from '@mui/icons-material';
import { handleLoginGG } from '../controller/handleLogin'
import { login } from '../controller/authController';

import logo from "../assets/unsplash-logo.svg";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    const info = { email, password };
    login(info, navigate);
  }

  return (
    <div className='p-5'>
      <div className='w-3/4 md:w-2/4 lg:w-1/3 mx-auto bg-gray-100 rounded shadow-xl'>
        <div className='flex flex-col items-center gap-5 p-5 pb-0'>
          <div className='flex flex-col items-center gap-2'>
            <Link to="/" >
              <img
                alt='logo'
                src={logo}
              />
            </Link>
            <h1 className='text-2xl font-bold'>Login</h1>
            <p className='text-lg'>Welcome back.</p>
          </div>
          <div className='w-full'>
            <button
              onClick={handleLoginGG}
              className='ouline-none bg-white shadow-lg w-full flex items-center justify-center gap-1 py-2 rounded-lg hover:shadow-2xl hover:bg-yellow-200 hover:font-medium'
            >
              <Google
                sx={{ fontSize: 20 }}
              />
              Login with Google
            </button>
          </div>
          <div className='text-sm font-medium'>
            <p>OR</p>
          </div>
          <form className='w-full flex flex-col gap-2' onSubmit={submitForm}>
            <label >
              Email: <br />
              <input
                type='text'
                placeholder='email'
                className='w-full p-2 mt-1 outline-none border border-gray-500 rounded-lg'
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <div>
              <div className='flex justify-between items-baseline'>
                <label htmlFor="password">Password:</label>
                <span className="text-sm hover:underline">
                  <Link to="/">
                    Forgot your password?
                  </Link>
                </span>
              </div>
              <input
                id="password"
                type='password'
                placeholder="password"
                className='w-full p-2 mt-1 outline-none border border-gray-500 rounded-lg'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type='submit' className='w-full bg-black bg-opacity-85 text-white py-2 rounded-lg hover:bg-opacity-100 hover:shadow-xl'>
                Login
              </button>
            </div>
          </form>
          <div className='w-full bg-white relative border border-black border-b-0 py-5'>
            <p className='text-center'>
              Don't have an account?{' '}
              <Link to="#" className='hover:underline'>Join Unsplash</Link>
            </p>
            <AcUnitRounded
              className='absolute top-2 left-5'
            />
            <AcUnitRounded
              className='absolute bottom-0 left-1/3'
            />
            <AcUnitRounded
              className='absolute bottom-0 left-0'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
