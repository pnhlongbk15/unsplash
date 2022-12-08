import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import RouterHome from '~/pages/home/routes'
import RouterAccount from '~/pages/account/routes'

import Login from '~/pages/Login'
import Register from '~/pages/Register'


const Switch = () => {
   const { currentUser } = useSelector((state) => state.user)

   return (
      <Routes>
         <Route
            path="/*"
            element={<RouterHome />}
         />
         <Route path='/account/*' element={
            currentUser ?
               <RouterAccount />
               :
               <Navigate to="/login" />
         } />

         <Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
         <Route path="/register" element={<Register />} />
      </Routes>

   )
}

export default Switch
