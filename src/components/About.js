import React from 'react';
import AboutHero from '../assets/second.png';

function About() {
  const config = {
    line1: 'Hi, My name is Kani. I am frontend developer. I build beautiful Websites and React js and Tailwind CSS.',
    line2: 'I am proficient in Frontend skills link React.js, Redux, Redux Toolkit, Axios, Tailwind CSS, Bootstrap, CSS3, HTML and many more.'
  }
  return (
    <section id='about' className='flex flex-col gap-5 md:flex-row bg-blue-900 py-20 px-5'>
            <div className='md:w-1/2'>
              <img src={ AboutHero } alt='about_image'/>
            </div>

            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 mb-4 w-[170px] border-blue-700 font-bold'>About Me</h1>
                    <p className='pb-5'> { config.line1 } </p>
                    <p> { config.line2 } </p>  
                </div>
            </div>
    </section>

  )
}

export default About;
