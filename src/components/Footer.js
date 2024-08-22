import React from 'react';

function Footer() {
    const currectYear = new Date().getFullYear();
  return (
   <div className='py-4 bg-blue-900 text-center text-white'>
     &copy; Kani_N { currectYear }
   </div>
  )
}

export default Footer;
