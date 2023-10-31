import React from 'react'
import { useSelector } from 'react-redux'

const SideMenuBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  
  if(!isMenuOpen) return null;
  
  return (
    <div className='p-5 shadow-lg w-48 scroll-my-0'>
      <ul>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Home</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Shorts</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Subscriptions</li>
      </ul>
      <hr/>
      <h1 className='font-bold pt-5'>You</h1>
      <ul>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Your Channel</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>History</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Your videos</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Watch Later</li>
      </ul>
      <h1 className='font-bold pt-5'>Others</h1>
      <ul>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Movies</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Sports</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Games</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Movies</li>
        <li className='px-2 py-2 hover:shadow-md transition duration-300'>Music</li>
      </ul>
    </div>
  )
}

export default SideMenuBar