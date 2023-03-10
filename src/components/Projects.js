import React from "react";

export default function Projects({image, name, link}) {
    return (
        <div  className='flex justify-center mb-3'>
            <div className='border border-4 border-green text-center w-80'>
                <img className='border-b-4 border-green' src={image} alt='project preview'/>
                <div className='flex justify-center gap-4 '>
                    <h1 className='font-neon text-lg md:text-xl lg:text-2xl'> {name} </h1>
                    <a href={link}>
                        <i className='fa-brands fa-github text-xl hover:text-cambridge'></i>
                    </a>    
                </div>
            </div>
        </div>
    )
}