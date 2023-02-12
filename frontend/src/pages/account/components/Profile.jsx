import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { updateInfo, updateImage } from '~/controller/userController'

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user)

  const [firstName, setFirstName] = useState(currentUser.first_name)
  const [lastName, setLastName] = useState(currentUser.last_name)
  const [email, setEmail] = useState(currentUser.email)
  const [username, setUsername] = useState(currentUser.username)
  const [imgProfile, setImgProfile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateInfo({ firstName, lastName, email, username })
  }

  useEffect(() => {
    imgProfile && updateImage(imgProfile)
  }, [imgProfile])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='mb-5'>
          <h1 className='text-lg font-medium mb-5'>Edit profile</h1>
          <div className='flex'>
            <div className='w-1/3'>
              <div className='flex flex-col items-center'>
                <img 
                  src={`api/image/image_profile/${currentUser.profile_image}`} 
                  alt='user'                   
                  className='rounded-full h-[128px] w-[128px] object-cover'
                  />
                <div>
                  <label htmlFor='file' className='text-xs underline text-gray-500 cursor-pointer hover:text-black'>Change profile image</label>
                  <input type="file" name="file" id="file" onChange={(e) => setImgProfile(e.target.files[0])} hidden />
                </div>
              </div>
              <div>
                <p className='text-md font-[450]'>Badge</p>
                <p className='text-xs text-gray-500'>You don't have any badges yet! </p>
              </div>
            </div>
            <div className='w-2/3 flex flex-col gap-3' >
              <div className='flex gap-5'>
                <div className='flex-1'>
                  <label htmlFor='firstName'>First name</label>
                  <input
                    id='firstName'
                    type='text'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                  />
                </div>
                <div className='flex-1'>
                  <label htmlFor='lastName'>Last name</label>
                  <input
                    id='lastName'
                    type='text'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                  />
                </div>
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                />
              </div>
              <div>
                <div className='flex'>
                  <label htmlFor='username'>Username</label>
                  <p className='text-gray-500 ml-1'>(only letters, numbers, and underscores)</p>
                </div>
                <input
                  id='username'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                />
                <p className='text-xs text-gray-600 mt-1'>localhost:3000/@<span className='font-medium'>{currentUser.username}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h1 className='text-lg font-medium mb-5'>About</h1>
          <div className='grid gap-3'>
            <div className='flex justify-between gap-5'>
              <div className='flex-1'>
                <label htmlFor='location'>Location</label>
                <input
                  id='location'
                  type='text'
                  className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded '
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='personal'>Personal site/portfolio</label>
                <input
                  id='personal'
                  type='text'
                  placeholder='https://'
                  className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                />
              </div>
            </div>
            <div className='flex justify-between gap-5'>
              <div className='flex-1'>
                <label htmlFor='bio'>Bio</label>
                <textarea
                  rows="4"
                  cols="250"
                  className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                />
              </div>
              <div className='flex-1'>
                <label htmlFor='interests'>interests{' '}<span className='text-gray-500'>(maximum 5)</span></label>
                <input
                  id='personal'
                  type='text'
                  placeholder='https://'
                  className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded'
                />
                <p className='text-xs text-gray-500 mt-1'>
                  Your interests are generated from the types of photos you like, collect, and contribute.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h1 className='text-lg font-medium mb-5'>Social</h1>
          <div className='flex justify-between gap-5'>
            <div className='flex-1'>
              <label htmlFor='instagram'>Instagram username</label>
              <div className='flex border items-stretch border-gray-500 rounded mt-1'>
                <div className='px-1 border-r-[0.5px] border-gray-500 grid place-items-center'>@</div>
                <input
                  id='instagram'
                  type='text'
                  className='w-full px-2 py-1 outline-none rounded'
                />
              </div>
              <p className='mt-1 text-xs text-gray-500'>So that we can feature you on <a className='underline' href='#'>@unsplash</a></p>
            </div>
            <div className='flex-1'>
              <label htmlFor='twitter'>Twitter username</label>
              <div className='flex border items-stretch border-gray-500 rounded mt-1'>
                <div className='px-1 border-r-[0.5px] border-gray-500 grid place-items-center'>@</div>
                <input
                  id='twitter'
                  type='text'
                  className='w-full px-2 py-1 outline-none rounded'
                />
              </div>
              <p className='mt-1 text-xs text-gray-500'>So that we can feature you on <a className='underline' href='#'>@unsplash</a></p>
            </div>
          </div>
        </div>
        <div className='mb-5 w-1/2 pr-2.5'>
          <h1 className='text-lg font-medium mb-5'>Donations</h1>
          <div>
            <label htmlFor='twitter'>PayPal email or username for donations</label>
            <input
              id='twitter'
              type='text'
              placeholder='name@domain.com'
              className='w-full px-2 py-1 mt-1 outline-none border border-gray-500 rounded '
            />
            <p className='mt-1 text-xs text-gray-500'>Note: This email/username will be public</p>
          </div>
        </div>
        <div className='mb-5'>
          <h1 className='text-lg font-medium mb-5'>Messaging</h1>
          <div className='flex items-center gap-2 px-2 py-3 bg-gray-100 rounded'>
            <input type='checkbox' />
            <p>Display a 'Message' button on your profile</p>
          </div>
          <p className='text-xs text-gray-500 mt-1'>Messages will be sent to your email</p>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='w-full bg-black text-white p-2 rounded'
          >
            Update account
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
