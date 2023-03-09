import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    // const active = (event) => {
    //    const nav = document.querySelectorAll('.nav');
    //    console.log(nav)
    //    nav.forEach( (link) => {
    //         if(link.classList.contains('active')) {
    //             link.classList.remove('active');
    //         }
    //    })
    //    event.target.children.classList.add('active');
    //    console.log(event.target.children)
    // }

    return (
        <div  className='bg-raisin h-16 flex flex-wrap justify-around items-center'>
            <Link  to='/' className='text-white font-neon'>
               <div className='nav active'>
                    About me
               </div>
            </Link>
            <Link to='/portfolio' className='text-white font-neon'>
                <div className='nav'>
                    Portfolio
                </div>
            </Link>
            <Link to='/contact' className='text-white font-neon'>
                <div className='nav'>
                    Contact
                </div>
            </Link>
            <Link to='/resume' className='text-white font-neon'>
                <div className='nav'>
                    Resume
                </div>
            </Link>
        </div>
    )
}