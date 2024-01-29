'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm';
import Link from 'next/link';   
import { useRouter } from 'next/navigation';
import { login } from '../utils';
import './login.css'
import { logUser } from "../interfaces/interfaces";





 const Login: React.FC= ({}) => {

   const [username] = useState('');
   const [password] = useState('');

   const router = useRouter();


    
   const handleSubmit = (event:any) =>{

    try{
    if(!!Form){
      const temp:logUser = {
         name : username,
         password: password
        }
     login(temp).then(() => router.push('/products')); 
    }
  } catch(error){
    console.log(error);
    alert('your username or password are not correct') ;
  }
}
  
    return (
        <>
        <Formik
    initialValues={initialValues}
    validationSchema={RegisterValidationSchema}
    onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
       }, 400)
    
    }}>
        {({ isSubmitting }) => (
    
    <Form onSubmit={handleSubmit} className="login">
        <div className='loginContent'>
        <h1>You dont have an account ? <Link className = "signIn-next" href="/register">Register</Link></h1>
 
        <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-0" />
        <label htmlFor="username" className="loginSubtitle">Username</label>
        <Field  name="username" type="text" values = {username} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />
        

         <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
        <label htmlFor="password" className="loginSubtitle">Password</label>
        <Field name="password" type="password"  values = {password} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />
 
      <button type="submit" disabled={isSubmitting}  className="loginButton">
        Submit
      </button>
    </div>
    </Form>
    
    )}  
    </Formik>
                </>
      );
  }
export default Login;


  