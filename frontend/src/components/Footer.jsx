/* eslint-disable no-unused-vars */
import React from 'react'
import { Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='mt-4 w-full p-4 bg-indigo-700 text-white rounded-md shadow-lg'>
            <div className='flex flex-col items-center'>
                <div className='mb-2'>
                    <a target="_blank" href="https://icons8.com/icon/26015/rotary-dial-telephone"
                    className='hover:underline hover:underline-offset-1'>Rotary Dial Telephone </a> 
                    icon by 
                    <a target="_blank" href="https://icons8.com"
                    className='hover:underline hover:underline-offset-1'> Icons8</a>
                </div>
                <div className='flex items-center my-2'>
                    <a href="https://github.com/TommiNICE" target="_blank"
                    className='flex items-center space-x-2'>
                        <Github color="white" size={24} />
                        <p>GitHub</p>
                    </a>
                </div>
                <p>© {new Date().getFullYear()} MIT License</p>
            </div>
        </footer>
    )
}

export default Footer