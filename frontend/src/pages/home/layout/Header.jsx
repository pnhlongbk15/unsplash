import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { logout } from '~/controller/authController'
import logo from '~/assets/unsplash-logo.svg'
import { NotificationsActiveSharp, SearchSharp, CenterFocusWeakSharp, Menu } from '@mui/icons-material';

const Header = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user)
  const username = currentUser?.username

  console.log(username)
  const handleLogout = () => {
    logout(dispatch)
  }

  return (
    <div className='bg-white py-2 px-5'>
      <div className='flex justify-between items-center gap-5'>
        <div className='flex justify-center items-center'>
          <Link to='/'>
            <img alt='logo' src={logo} width="35" height="35" />
          </Link>
        </div>
        <div className='w-full md:w-2/4 bg-white rounded-full border border-gray-400 group'>
          <form className='flex bg-transparent py-1.5 px-3 rounded-full'>
            <button className='text-gray-500 hover:text-black text-sm'>
              <SearchSharp />
            </button>
            <input
              className='w-full outline-none bg-transparent text-sm px-2 placeholder:text-gray-500'
              placeholder='Search photos'
            />
            <button className='text-gray-500 hover:text-black text-sm'>
              <CenterFocusWeakSharp />
            </button>
          </form>
        </div>

        <div className='hidden md:block px-5'>
          <ul className='flex gap-5 text-sm'>
            <li className='text-gray-500 hover:text-black'><Link>Advertise</Link></li>
            <li className='text-gray-500 hover:text-black'><Link>Blog</Link></li>
            <li className='text-gray-500 hover:text-black'><Link>Unsplash+</Link></li>
          </ul>
        </div>

        {!username && (
          <div className='text-sm text-gray-500 whitespace-nowrap flex items-center gap-1'>
            <Link to="/login" className='hover:text-black'>Log in</Link>
            /
            <Link to="register" className='hover:text-black'>Sign up</Link>
          </div>
        )}

        <div className='hidden md:flex'>
          <button
            onClick={handleLogout}
            className='outline-none whitespace-nowrap px-3 py-1 border-gray-500 border rounded-md text-sm text-gray-500 hover:border-black hover:text-black'
          >
            Submit a photo
          </button>
        </div>

        {username && (
          <>
            <div className='hidden relative md:block group'>
              <div className='h-8 cursor-pointer text-center text-gray-500 hover:text-black'>
                <NotificationsActiveSharp />
              </div>
              <div className='hidden z-50 bg-white absolute bottom-0 right-0 translate-y-[110%] border-gray-300 border group-hover:flex flex-col rounded-sm shadow-lg'>
                <div className='absolute -top-[8px] right-5 decorate'>
                  <span className='decorate-border'></span>
                  <span className='decorate-bg'></span>
                </div>

                <div className='flex text-sm text-gray-500'>
                  <p className='px-10 py-5 border-b-[1.5px] cursor-pointer hover:text-black hover:border-b-[1.5px] hover:border-black'>Activity</p>
                  <p className='px-10 py-5 border-b-[1.5px] cursor-pointer hover:text-black hover:border-b-[1.5px] hover:border-black'>Highligts</p>
                </div>
                <div className='p-5 text-center text-sm text-gray-500 '>
                  Activity associated with your account will appear here.
                </div>
              </div>
            </div>

            <div className='relative group'>
              <img src={`api/photo/image_profile/${currentUser.profile_image}`} alt='user' className='w-[32px] h-[32px] rounded-full cursor-pointer' />
              <div className='hidden z-50 bg-white absolute bottom-2 right-0 translate-y-[110%] border-gray-300 border group-hover:flex flex-col rounded-sm  shadow-lg'>
                <div className='absolute -top-[8px] right-5 decorate'>
                  <span className='decorate-border'></span>
                  <span className='decorate-bg'></span>
                </div>
                <div className='whitespace-nowrap text-sm text-gray-500'>
                  <div className=' border-b-[1.5px] py-1'>
                    <p className=' md:hidden p-2 cursor-pointer hover:bg-gray-200'>Notifications</p>
                    <Link to={`/@${username}`}><p className=' p-2 cursor-pointer hover:bg-gray-200'>View profile</p></Link>
                    <p className=' p-2 cursor-pointer hover:bg-gray-200'>Stats</p>
                    <p className=' p-2 cursor-pointer hover:bg-gray-200'>Account settings</p>
                    <button
                      className=' whitespace-nowrap outline-none border-[1.5px] rounded-md py-1 px-10 m-2'
                    >
                      Submit a photo
                    </button>
                  </div>
                  <div className='py-1'>
                    <p className='p-2 cursor-pointer hover:bg-gray-200'>Logout {`@${username}`}</p>
                  </div>
                </div>

              </div>
            </div>
          </>
        )}

        <div className='relative group'>
          <div className='w-6 h-8 cursor-pointer text-gray-500 hover:text-black'>
            <Menu />
          </div>
          <div className='hidden z-50 bg-white absolute bottom-5 right-0 translate-y-[110%] border-gray-300 border group-hover:flex flex-col rounded-sm  shadow-lg'>
            <div className='absolute -top-[8px] right-5 decorate'>
              <span className='decorate-border'></span>
              <span className='decorate-bg'></span>
            </div>

            <div className='container'>
              <div className='hidden md:flex flex-col'>
                <div className='flex gap-20 border-b-[1.5px] p-5'>
                  <div className='text-sm whitespace-nowrap flex flex-col gap-2'>
                    <p className='text-black font-medium'>Company</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>About</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>History</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Join the team</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Press</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Contact us</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Help Center</p>
                  </div>
                  <div className='text-sm whitespace-nowrap flex flex-col gap-2'>
                    <p className='text-black font-medium'>Product</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Developers/API</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Unsplash Dataset</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Unsplash for iOS</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Apps & Plugins</p>
                  </div>
                  <div className='text-sm whitespace-nowrap flex flex-col gap-2'>
                    <p className='text-black font-medium'>Community</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Become a Contributor</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Topics</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Collections</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Trends</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Unsplash Awards</p>
                    <p className='text-gray-500 cursor-pointer hover:text-black '>Stats</p>
                  </div>
                </div>

                <div className='flex justify-between items-center p-5'>
                  <div className='flex gap-5 text-sm text-gray-500'>
                    <span className='cursor-pointer hover:text-black' >License</span>
                    <span className='whitespace-nowrap cursor-pointer hover:text-black'>Privacy Policy</span>
                    <span className='cursor-pointer hover:text-black'>Terms</span>
                    <span className='cursor-pointer hover:text-black'>Security</span>
                  </div>
                  <select className='outline-none text-sm text-gray-500 cursor-pointer'>
                    <option>English</option>
                    <option>Vietnamese</option>
                  </select>
                </div>
              </div>
              {/*-----mobile------- */}
              <div className='md:hidden'>
                <div className='border-b-[1.5px]'>
                  <div className='py-2 px-5 text-sm cursor-pointer group/list'>
                    <div>
                      <p className='font-medium'>Company</p>
                    </div>
                    <div className='hidden text-gray-500 group-hover/list:block'>
                      <p>About</p>
                      <p>Advertise</p>
                      <p>History</p>
                      <p>Join the team</p>
                      <p>Press</p>
                      <p>Contact us</p>
                      <p>Help Center</p>
                    </div>
                  </div>
                  <div className='py-2 px-5 text-sm cursor-pointer group/list'>
                    <div>
                      <p className='font-medium'>Product</p>
                    </div>
                    <div className='hidden text-gray-500 group-hover/list:block'>
                      <p>Unsplash+</p>
                      <p>Developers/API</p>
                      <p>Unsplash Dataset</p>
                      <p>Unsplash for iOS</p>
                      <p>App & Plugins</p>
                    </div>
                  </div>
                  <div className='py-2 px-5 text-sm cursor-pointer group/list'>
                    <div>
                      <p className='font-medium'>Community</p>
                    </div>
                    <div className='hidden text-gray-500 group-hover/list:block'>
                      <p>Become a Contributor</p>
                      <p>Topics</p>
                      <p>Collections</p>
                      <p>Trends</p>
                      <p>Unsplash Awards</p>
                      <p>Stats</p>
                    </div>
                  </div>
                  <div className='py-2 px-5 text-sm cursor-pointer group/list'>
                    <div>
                      <p className='font-medium'>Legal</p>
                    </div>
                    <div className='hidden text-gray-500 group-hover/list:block'>
                      <p>License</p>
                      <p>Privacy Policy</p>
                      <p>Terms</p>
                      <p>Security</p>
                    </div>
                  </div>
                  <div className='py-2 px-5 text-sm cursor-pointer group/list'>
                    <div>
                      <p className='font-medium'>English</p>
                    </div>
                    <div className='hidden text-gray-500 group-hover/list:block'>
                      <p>English</p>
                      <p>Vietnamese</p>
                    </div>
                  </div>
                </div>
                <div className='py-2 px-5'>
                  <button className='text-sm text-gray-500 whitespace-nowrap outline-none border-[1.5px] rounded-md py-1 px-10'>
                    Submit a photo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Header;
