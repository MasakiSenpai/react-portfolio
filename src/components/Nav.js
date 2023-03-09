import React from 'react';


export default function Nav() {
    return (
        <div  className='bg-raisin h-16 flex flex-wrap justify-around items-center'>
            <a href='./' className='text-white font-neon'>
                About me
            </a>
            <a href='./' className='text-white font-neon'>
                Portfolio
            </a>
            <a href='./' className='text-white font-neon'>
                Contact
            </a>
            <a href='./' className='text-white font-neon'>
                Resume
            </a>
        </div>
    )
}