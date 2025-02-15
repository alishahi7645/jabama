import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='py-6 mb-2 border-b'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link to='/'>
            <img src='https://cdn.jabama.com/original/statics/desktop/img/jabama-logo-dark.5cca32e.svg' className='w-15'/>
          </Link>
          <div className='flex items-center gap-6'>
            <Link to='/' className='hover:bg-red-600 px-4 py-3 rounded-lg transition'>ورود به حساب</Link>
            <Link to='/' className='bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg'>ثبت نام</Link>
          </div>
        </div>
    </header>
  )
}

export default Header
