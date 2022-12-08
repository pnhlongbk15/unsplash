import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '~/controller/authController';

import { Google, AcUnitRounded } from '@mui/icons-material';
import { handleLoginGG } from '~/controller/handleLogin';

import logo from "~/assets/unsplash-logo.svg";

const Register = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const firstName = useRef();
   const lastName = useRef();
   const email = useRef();
   const username = useRef();
   const password = useRef();

   const submitForm = (e) => {
      e.preventDefault();
      const info = {
         firstName: firstName.current.value,
         lastName: lastName.current.value,
         email: email.current.value,
         username: username.current.value,
         password: password.current.value,
      }
      register(info, navigate, dispatch)
   }

   return (
      <div className='h-screen flex'>
         <div className='hidden md:block md:w-2/5'>

         </div>
         <div className='mx-auto bg-white flex-1 h-full overflow-y-scroll'>
            <div className='flex flex-col items-center gap-10 p-20'>
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
               <form className='w-full flex flex-col gap-5' onSubmit={submitForm}>
                  <div className='flex justify-between gap-5'>
                     <div>
                        <label htmlFor='firstName'>First name</label>
                        <input
                           id='firstName'
                           type='text'
                           className='w-full p-2 mt-1 outline-none border border-gray-500 rounded'
                           ref={firstName}
                        />
                     </div>
                     <div>
                        <label htmlFor='lastName'>Last name</label>
                        <input
                           id='lastName'
                           type='text'
                           className='w-full p-2 mt-1 outline-none border border-gray-500 rounded'
                           ref={lastName}
                        />
                     </div>
                  </div>
                  <div>
                     <label htmlFor='email'>Email</label>
                     <input
                        id='email'
                        type='text'
                        className='w-full p-2 mt-1 outline-none border border-gray-500 rounded'
                        ref={email}
                     />
                  </div>
                  <div>
                     <label htmlFor='username'>Username</label>
                     <input
                        id='username'
                        type='text'
                        className='w-full p-2 mt-1 outline-none border border-gray-500 rounded'
                        ref={username}
                     />
                  </div>
                  <div>
                     <div className='flex justify-between items-baseline'>
                        <label htmlFor="password">Password</label>
                        <span className="text-sm hover:underline">
                           <Link to="/">
                              Forgot your password?
                           </Link>
                        </span>
                     </div>
                     <input
                        id="password"
                        type='password'
                        className='w-full p-2 mt-1 outline-none border border-gray-500 rounded'
                        ref={password}
                     />
                  </div>
                  <div>
                     <button type='submit' className='w-full bg-black bg-opacity-85 text-white py-2 rounded hover:bg-opacity-100 hover:shadow-xl'>
                        Login
                     </button>
                  </div>
               </form>

            </div>
         </div >
      </div >
   )
}

export default Register;
