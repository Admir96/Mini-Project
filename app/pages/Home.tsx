import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Register from './register';
import Login from './login';
import Products from './products';
import Link from 'next/link';
import { useRouter } from 'next/router';




function WelcomeSection() {
  const [isHidden, hide] = useState(false);
  useEffect(() => {
    hide(true);
  }, []);

  if (!isHidden) {
    return null;
  }
  return (
    <>
      <h1>Welcome to a World of Possibilities: Explore, Discover, and Thrive!</h1>
      <div >
        <p>
          Already have an account ? <Link href="/login" onClick={()=>hide(false)}><a>Log in.</a></Link>
        </p>
        <p>
          Dont have an account ? <Link href="/register" onClick={()=>hide(false)}><a>Sign up here.</a></Link>
        </p>
      </div>
    </>
  );
}

 const AppPage: React.FC = () =>  {
  const [LoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    if (userToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [])
  
if(!LoggedIn){
  return null;
}

  return (
  <>
<div className='"container mx-auto"'>
  <NavBar toggle ={LoggedIn}/>
        {!LoggedIn && <WelcomeSection />}     
           {!LoggedIn && router.push("/register")}
          {!LoggedIn && router.push("/login")}
           {router.push("/products")} 
      </div>
  </>

  );
}
export default AppPage;