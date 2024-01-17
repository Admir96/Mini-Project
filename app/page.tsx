'use client'
import './globals.css'
import React from 'react';

import Navbar from './components/navBar/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';


 const page: React.FC = () => {

  return (

    <>  
<Navbar/> 
<Home/> 

</>
);};
export default page;