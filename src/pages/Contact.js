import React from 'react';
import social from '../images/social.svg'

export default function Contact() {
    return (
        <div className='h-100'>
            <div className='border border-4 border-steel bg- p-12 flex flex-col text-center'>
                <div>
                    <img src={social} alt='social media' className='max-w-md'/>
                </div>
                <p className='text-2xl text-blue-400'> I'll be hinding in these places </p>
                <a href='https://github.com/MasakiSenpai' className='text-xl mt-5 text-steel hover:text-blue-400'>
                    <i class="fa-brands fa-github"></i> GitHub </a>
                <a href='https://www.linkedin.com/in/amanda-johns-a46993258/' className='text-xl my-2 text-steel hover:text-blue-400'>
                    <i class="fa-brands fa-linkedin"></i> LindedIn </a>
                <a href='https://stackoverflow.com/' className='text-xl text-steel hover:text-blue-400'>
                    <i class="fa-brands fa-stack-overflow"></i> Stackoverflow </a>
            </div>
        </div>
    )
}