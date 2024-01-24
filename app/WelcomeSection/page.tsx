'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './welcome.css'


const WelcomeSection = () => {
  const router = useRouter();

  const [isHidden, hide] = useState(false);
  useEffect(() => {
    hide(true);
  }, []);

  const handleClick =(event:any) =>{
   router.push('/register')
  hide(false);
  }

  return (
    <>
    <div className='welcome'>
<div className='welcomeContent'>
  <h1 className= 'welcomeTitl' >Welcome to My App!</h1>
  <p className= 'welcomeSubtitle' >
    This is a simple welcome page using Next.js and Tailwind CSS in dark mode.
  </p>
  <p  className= 'welcomeSubtitle'>
  In case you didnt register, press the button below !
  </p>

  <button className='welcomeButton' onClick={handleClick}>Register</button>

</div>
</div>    
    </>
  );
}

export default WelcomeSection;