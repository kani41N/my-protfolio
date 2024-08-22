import React from 'react';
import WEBSITE from '../assets/website.webp';


import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

function Hero() {

  const config = {
    subtitle : 'Im a frontend developer',
    social:{
      linkedin: 'https://www.linkedin.com/in/kani-n-5babb4218',
      facebook: '',
      instagram: '',
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-blue-700 justify-center'>
      <div className='md:w-1/2'>
        <h1 className='text-white text-6xl font-hero-font'>Hi,<br/> Im <span className='text-orange-400'>Kani</span> 
        </h1>
        <p className='text-2xl text-white'>{config.subtitle}</p>

       <div className='flex gap-2 text-red-5000 py-8'>
        <a href={ config.social.linkedin } className='hover:text-white'><AiOutlineLinkedin size={35}/></a>
        <a href= '' className='hover:text-white cursor-not-allowed'><AiOutlineFacebook size={35}/></a>
        <a href= '' className='hover:text-white cursor-not-allowed'><FaInstagram size={35}/></a>
       </div>
      </div>
      <img src={ WEBSITE } alt='website-image' className='md:w-1/3 '/>
      
     
    </section>
  )
}

export default Hero;
