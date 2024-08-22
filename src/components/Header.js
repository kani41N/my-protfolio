import React, { useState } from 'react';
import { RiMenu4Fill } from "react-icons/ri";

function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
   <header className='flex justify-between px-4 py-2 bg-blue-900'>
       <a href='' className='font-bold'>My Portfolio</a>
       <nav className='hidden md:block'>
           <ul className='flex gap-5 text-white'>
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
           </ul>
       </nav>
       {toggleMenu &&
       <nav className='block md:hidden '>
          <ul onClick={() => {setToggleMenu(!toggleMenu)}} className='flex flex-col gap-2 fixed top-10 bg-blue-950 w-full h-1/3 text-center left-0 py-1 text-white '>
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
           </ul>
      </nav>
        
       }
       <button onClick={() => {setToggleMenu(!toggleMenu)}} className='block md:hidden text-white'><RiMenu4Fill size={24}/></button>
   </header>
  )
}

export default Header;
