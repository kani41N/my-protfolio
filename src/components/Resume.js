import React from 'react';
import ResumeIcon from '../assets/resume_icon.png';
import RESUME from '../assets/kani&2024.pdf';

function Resume() {

  // const config = {
  //   link: ''
  // }

  return (
    <section id='resume' className='flex flex-col gap-5 md:flex-row bg-blue-900 py-20 px-5'>
            <div className='md:w-1/2 flex justify-center'>
              <img src={ ResumeIcon } alt='about_image'/>
            </div>

            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 mb-4 w-[135px] border-blue-700 font-bold'>Resume</h1>
                    <p className=''>You can view my resume <a href={ RESUME } download='Kani_Resume' className='py-2 px-3 bg-blue-700 rounded font-bold hover:border-2 border-white'>Download</a>  </p>
                    
                </div>
            </div>
    </section>

  )
}

export default Resume;
