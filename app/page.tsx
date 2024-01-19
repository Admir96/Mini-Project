'use client'
import './globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react'
import Navbar from './components/navBar/NavBar';


 function home ({Component, pageProps} : AppProps) {

  return (
    <>
<Navbar/>
    <SessionProvider

    session={pageProps.session}
  >
    <Component {...pageProps} />
  </SessionProvider>
  </>
);
};

export default home;