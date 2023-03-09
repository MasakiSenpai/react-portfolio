import React from "react";
import photo from '../images/snapchathead.jpg'

export default function Home() {
    return (
        <div className='h-100 flex flex-col'>
            <div className='m-5 min-w-[170px] flex justify-center'>
                <img className='h-96 border border-4 border-rose' src={photo} alt='Headshot'></img>
            </div>
            <div className='border border-4 border-rose bg-lavender p-12'>
                <h2> Hey, My name is Amanda </h2>
                <p> Nice to meet you. I am a junior web devloper who loves never leaving my house. </p>
            </div>
        </div>
    )
}