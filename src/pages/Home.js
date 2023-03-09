import React from "react";
import photo from '../images/snapchathead.jpg'

export default function Home() {
    return (
        <div className='h-100 flex flex-col'>
            <div className='m-5 min-w-[170px] flex justify-center'>
                <img className='h-96 border border-4 border-rose' src={photo} alt='Headshot'></img>
            </div>
            <div className='flex justify-center my-5 mb-10'> 
                <div className='border border-4 border-rose bg-pale p-12 text-center max-w-[424px]'>
                    <h2> Hey, My name is Amanda </h2>
                    <p> Nice to meet you. I am a junior web devloper with the MERN stack who loves never leaving my house.
                        Recently graduated from Georgia Tech Full Stack Web Devlopemt BootCamp! ♪ \(´。`˵)／♪ </p>
                </div>
            </div>
        </div>
    )
}