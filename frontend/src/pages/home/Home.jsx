import React from 'react'
import Feed from './components/Feed'
import MainSearch from './components/MainSearch'

const Home = () => {
  return (
    <>
      <div className='h-[310px] md:h-screen'>
        <MainSearch />
      </div>
      <div className='mt-12'>
        <Feed />
      </div>
    </>


  )
}

export default Home
