import React from 'react'
import { Link } from 'react-router-dom'
import { SearchSharp, CenterFocusWeakSharp } from "@mui/icons-material"

const MainSearch = () => {
    return (
        <div className="relative h-full text-white">
            <div className="absolute w-full h-full -z-10">
                <picture className="block h-full w-full relative after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-black after:opacity-30">
                    <source
                        media='(max-width:768px)'
                        srcSet='https://images.unsplash.com/photo-1666096968009-f8b7bdd51ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=799&h=594'
                    />
                    <source
                        media='(min-width:769px)'
                        srcSet='https://images.unsplash.com/photo-1666096968009-f8b7bdd51ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=999&h=594'
                    />
                    <img
                        className='w-full h-full object-cover'
                        alt='bg'
                        src='https://images.unsplash.com/photo-1666096968009-f8b7bdd51ba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&auto=format%2Ccompress&fit=crop&w=1000&h=1000' />
                </picture>
            </div>
            <div className="h-full">
                <div className='flex flex-col h-full'>
                    <div className='px-[20px] my-auto w-full'>
                        <div className='md:mx-auto w-2/3'>
                            <span className='text-[28px] md:text-[46px] font-bold leading-tight mb-4'>Unsplash</span>
                            <div>
                                <h1 className='text-[15px] md:text-[18px] font-normal mt-4'>The internet's source for visuals.</h1>
                                <p className='text-[15px] md:text-[18px] font-normal'>Powered by creators everywhere.</p>
                                <div className='my-4 hidden md:block'>
                                    <div className='bg-white rounded'>
                                        <form className='flex text-gray-500 text-lg h-[54px]'>
                                            <button
                                                className='flex items-center mx-4 cursor-pointer hover:text-black '
                                                type='submit'
                                            >
                                                <SearchSharp />
                                            </button>
                                            <input
                                                className='flex-1 outline-none text-black placeholder:text-gray-500'
                                                placeholder='Search free high-resolution photos'
                                            />
                                            <button
                                                className='flex items-center mx-4 cursor-pointer hover:text-black '
                                                type='button'
                                            >
                                                <CenterFocusWeakSharp />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:grid grid-cols-3 text-sm text-gray-400 mx-5 mb-5'>
                        <div>
                            <Link className='text-white text-opacity-90 hover:text-opacity-100 cursor-zoom-in' to='#'>Photo</Link>
                            {' '}by{' '}
                            <span className='text-white text-opacity-90 hover:text-opacity-100'>
                                <Link to='#'>Clay Banks</Link>
                            </span>
                        </div>
                        <div className='text-center '>
                            Read more about the{' '}
                            <Link className='text-white text-opacity-90 hover:text-opacity-100' to='#'>Unsplash License</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSearch
