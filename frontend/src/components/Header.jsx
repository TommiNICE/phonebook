import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header className='flex flex-col items-center'>
            <img src='./icons8-rotary-dial-telephone-100.png' alt='phone' />
            <h1 className='text-center text-blue-600 uppercase text-5xl'>Phone Book</h1>
        </header>
    )
}

export default Header