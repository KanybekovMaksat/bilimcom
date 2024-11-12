import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../login'

const LogIn = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='text-center flex flex-col gap-5'>
        <div className='text-white text-4xl'>Login</div>
        <Login/>
        <p className='text-cyan-300 text-4xl'>
          or  <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  )
}

export default LogIn