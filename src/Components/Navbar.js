import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex border space-x-8 item-center '>
        <img className='w-[80px]' src={logo} alt="" />
        
        <Link to="/" className='text-blue-400 my-3 text-2xl font-bold'>Movies</Link>
        <Link to="/watchlist" className='text-blue-400 my-3 text-2xl font-bold'>WatchList</Link>

    </div>
  )
}
