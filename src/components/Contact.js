import React from 'react';

function Contact() {
  const config = {
    email: 'kanineethiraj2000@gmail.com',
    phone: '+91 9843242883'
  }
  return (
    <section id='contact' className='flex flex-col bg-blue-700 py-20 px-5'>
           
                <div className='flex flex-col items-center text-white'>
                    <h1 className='text-4xl font-bold border-b-4 mb-4 w-[135px] border-blue-900'>Contact</h1>
                    <p className='py-2'>If you want to discuss more in detail, please contact me. </p>
                    <p className='py-2'><span className='font-bold'>Email : </span> {config.email} </p>
                    <p className=''><span className='font-bold'>Phone : </span>  {config.phone} </p>
                </div>
           
    </section>

  )
}

export default Contact;
