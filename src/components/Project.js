import React from 'react';
import CRUDOPERATION from '../assets/crud_operation.PNG';
import ECOMMERCE from '../assets/ecommerce.PNG';
import COFFEE from '../assets/coffee.jpeg';

function Project() {

  const config = {
    projects: [
      {
        image: CRUDOPERATION,
        description: 'A simple Ecommerce website, It is built with React JS and Redux, Redux Toolkit.',
        link: 'https://kani41-crud-operation.netlify.app'
      },
      {
        image: ECOMMERCE,
        description: 'A CRUD Operation, It is built with React JS, Redux, Redux Toolkit.',
        link: 'https://kani41-ecommerce.netlify.app'
      },
      {
        image: COFFEE,
        description: 'Coffee website, It is built with React JS & Bootstrap.',
        link: 'https://github.com/kani41N/WP_Bootstrap'
      }
    ]
  }

  return (
   <section id='project' className='flex flex-col px-5 py-20 text-white bg-blue-700'>
      <div className='w-full'>
       <div className='flex flex-col px-10'>
          <h1 className='text-4xl font-bold border-b-4 border-blue-900 w-[120px]'>Project</h1>
          <p className='py-5'>These are some of my best project. I have built these React, Redux, Redux Toolkit, Tailwind CSS, Bootstrap using. check them out. </p>
         </div>
      </div>

      <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5 '>
         {config.projects.map((project) => (
              <div className='relative'>
                <img className='h-[200px] w-[500px]' src={ project.image }  />
                <div className='absolute left-0 right-0 bottom-0 top-0 bg-blue-900  opacity-0 duration-500 hover:opacity-100'>
                  <p className='text-center px-5 py-5'>{ project.description }</p>
                  <div className='flex justify-center'>
                  <a className='py-2 px-3 bg-blue-700 rounded font-bold hover:border-2 border-white' target='_blank' href= { project.link }>View Project</a>
                </div>
                </div>
              </div>
        

         ))}
         
        </div>

      </div>
   </section>
  )
}

export default Project;
