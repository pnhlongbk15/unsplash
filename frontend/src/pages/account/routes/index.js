import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Account from '~/pages/account/Account'

import {
   Profile,
   Hiring,
   History,
   EmailSetting,
   Password,
   Connect,
   AuthApplication,
   Close
} from '../components'

const router = [
   {
      path: '/',
      element: <Profile />
   },
   {
      path: '/hiring',
      element: <Hiring />
   },
   {
      path: '/history',
      element: <History />
   },
   {
      path: '/email_settings',
      element: <EmailSetting />
   },
   {
      path: '/password',
      element: <Password />
   },
   {
      path: '/connect',
      element: <Connect />
   },
   {
      path: '/authorized_applications',
      element: <AuthApplication />
   },
   {
      path: '/close',
      element: <Close />
   },
]



export default function () {
   return (
      <Routes>
         <Route
            path="/*"
            element={
               <Account >
                  <Routes>
                     {
                        router.map((route, i) => (
                           <Route key={i} {...route} />
                        ))
                     }
                  </Routes>
               </Account>
            }
         />
      </Routes>
   )
}

