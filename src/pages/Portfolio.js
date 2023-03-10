import React from 'react';
import Projects from '../components/Projects';
import { ProjectList } from '../helpers/ProjectList';
import image from '../images/portfolio.svg'

export default function Portfolio() {
    return (
        <div className='h-100'>
            <div className='border border-4 border-green bg-ash grid'>
                <div className='grid justify-center m-4'>
                    <img src={image} alt='portfolio girl' className='lg:w-[975px] flex justify-self-center'/>
                    <h2 className='text-2xl md:text-4xl text-center'> My projects </h2>
                </div>
                <div className='w-full flex justify-center gap-5'>
                    <div className='md:grid md:grid-cols-2 md:w-4/5'>
                        {ProjectList.map((project) => {
                            return <Projects name={project.name} image={project.image} link={project.link}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}