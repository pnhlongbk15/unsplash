import React from 'react'
import { Link } from 'react-router-dom'
import { Add, Favorite, Download, Check } from '@mui/icons-material';

const Pin = ({ pin }) => {
  // console.log(pin)
  const { urls, links, user } = pin
  return (
    <>
      <div className='relative w-full group/curtain'>
        <img
          className="w-full h-full object-cover"
          alt="pic_post"
          src={urls.full}
        />
        <div className='hidden absolute top-0 bottom-0 left-0 right-0 p-5 bg-black bg-opacity-40 cursor-zoom-in group-hover/curtain:block'>
          <div className='w-full h-full flex flex-col justify-between text-sm text-white'>
            <div className='flex justify-between items-center'>
              <div>
                <p>title</p>
              </div>
              <div className='flex gap-2 items-center'>
                <button type='button' className='bg-white py-1 px-2 rounded flex items-center'>
                  <Favorite
                    fontSize='small' color='action'
                    className='hover:text-black'
                  />
                </button>
                <button type='button' className='bg-white py-1 px-2 rounded flex items-center'>
                  <Add
                    fontSize='small' color='action'
                    className='hover:text-black'
                  />
                </button>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <img
                  className='rounded-full'
                  alt='user_photo'
                  src={user.profile_image.small}
                />
                <div className='flex flex-col'>
                  <p className='text-base text-gray-300 cursor-pointer hover:text-white'>
                    <Link to='#'>
                      {user.name}
                    </Link>
                  </p>
                  <p className='text-[0.7rem] text-gray-300 cursor-pointer hover:text-white group/check'>
                    <Link to='#'>
                      Available for hire
                      <Check
                        className='bg-gray-300 rounded-full p-[1px] ml-1 group-hover/check:bg-white'
                        sx={{ fontSize: 10, color: 'black' }}
                      />
                    </Link>
                  </p>
                </div>
              </div>
              <div>
                <button type='button' className='bg-white py-1 px-2 rounded flex items-center'>
                  <a
                    href={`${links.download}&force=true`}
                    download
                  >
                    <Download
                      fontSize='small' color='action'
                      className='hover:text-black'
                    />
                  </a>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Pin
