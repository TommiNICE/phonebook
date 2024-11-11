/* eslint-disable no-unused-vars */
import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col items-center p-6 rounded-lg'>
            <img src='./icons8-rotary-dial-telephone-100.png' alt='Old phone' className='w-24 h-24 mb-4' />
            <h1 className='text-5xl font-bold text-blue-600 mb-8 text-center'>Phone Book</h1>
        </header>
    )
}

export default Header