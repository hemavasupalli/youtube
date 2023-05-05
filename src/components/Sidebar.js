import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen =useSelector(store=> store.app.isMenuOpen);
    
    if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-xl w-48'>
         <h1 className='font-bold py-3'>Home</h1>
        <ul>
            <li>Music</li>
            <li>Movie</li>
            <li>Gaming</li>
            <li>Sports</li>
        </ul>
        <h1 className='font-bold py-3'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Movie</li>
            <li>Gaming</li>
            <li>Sports</li>
        </ul>
        <h1 className='font-bold py-3'>Watch later</h1>
        <ul>
            <li>Music</li>
            <li>Movie</li>
            <li>Gaming</li>
            <li>Sports</li>
        </ul>
       


    </div>
  )
}

export default Sidebar