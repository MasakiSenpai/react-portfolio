import React from 'react';
import social from '../images/social.svg'

export default function Contact() {
    return (
        <div className='h-100'>
            <div className='border border-4 border-steel bg-pblue p-12 flex flex-col text-center'>
                <div className='w-100 flex justify-center'>
                    <img src={social} alt='social media' className=''/>
                </div>
                <p className='text-2xl text-blue-400 md:text-4xl'> I'll be hiding in these places </p>
                <a href='https://github.com/MasakiSenpai' className='text-xl mt-5 text-steel hover:text-blue-400 md:text-2xl'>
                    <i class="fa-brands fa-github"></i> GitHub </a>
                <a href='https://www.linkedin.com/in/amanda-johns-a46993258/' className='text-xl my-2 text-steel hover:text-blue-400 md:text-2xl'>
                    <i class="fa-brands fa-linkedin"></i> LindedIn </a>
                <a href='https://stackoverflow.com/' className='text-xl text-steel hover:text-blue-400 md:text-2xl'>
                    <i class="fa-brands fa-stack-overflow"></i> Stackoverflow </a>
            </div>
        </div>
    )
}