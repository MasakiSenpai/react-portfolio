import React from "react";

export default function Footer() {
    return (
        <div  className='bg-raisin h-24 flex flex-wrap justify-center items-center'>
            <a href='https://github.com/MasakiSenpai' className='text-tropical font-neon mx-6 hover:text-mauve'>
                <i className='fa-brands fa-github text-2xl'></i>
            </a>
            <a href='https://www.linkedin.com/in/amanda-johns-a46993258/' className='text-tropical font-neon mx-6 hover:text-mauve'>
                <i className='fa-brands fa-linkedin text-2xl'></i>
            </a>
            <a href='https://stackoverflow.com/' className='text-tropical font-neon mx-6 hover:text-mauve'>
                <i class="fa-brands fa-stack-overflow text-2xl"></i> 
            </a>
        </div>
    )
}