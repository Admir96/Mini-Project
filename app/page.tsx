'use client'
import './globals.css'
import React from 'react';
import { AppProps } from 'next/app';
import {SessionProvider} from 'next-auth/react'


 const page = ({Component, pageProps} : AppProps) => {

  return (

    <SessionProvider
    // Provider options are not required but can be useful in situations where
    // you have a short session maxAge time. Shown here with default values.
    session={pageProps.session}
  >
    <Component {...pageProps} />
  </SessionProvider>
);
};
export default page;