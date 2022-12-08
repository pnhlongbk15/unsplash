import React, { useState } from 'react'

import { updateInfo } from '~/controller/userController'

const Password = () => {
  const [currPassword, setCurrPassword] = useState(null)
  const [newPassword, setNewPassword] = useState(null)
  const [confirmPass, setConfirmPass] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPassword === confirmPass) {
      updateInfo({ currPassword, newPassword })
    } else {
      console.log('pass not match')
    }
  }
  return (
    <div>
      <h1 className='text-lg font-medium mb-5'>Change password</h1>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='current'>Current password</label>
          <input
            id='current'
            type='password'
            value={currPassword}
            onChange={(e) => setCurrPassword(e.target.value)}
            className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
          />
        </div>
        <div>
          <label htmlFor='confirm'>Password confirmation</label>
          <input
            id='confirm'
            type='password'
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
          />
        </div>
        <button type='submit' className='bg-black text-white p-2 rounded'>Change password</button>
      </form>
    </div>
  )
}

export default Password
