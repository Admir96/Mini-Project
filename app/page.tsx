'use client'
import './globals.css'
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Img from './components/image';
import Header from '@/app/components/header';
import Footer from './components/footer';


 const Home: React.FC = () => {
  const [showLogin, setShowLogin] = React.useState(true);

  return (

    <>  


<div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justiy-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            {showLogin ? (<Login onToggle ={() => setShowLogin(false)}></Login>)
          :
                         (<Register onToggle ={() => setShowLogin(true)}></Register>)
          }
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className ="m-10 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
              <Img></Img>
            </div>
        </div>
    </div>
</div>


</>
);};
export default Home;