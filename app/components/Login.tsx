import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'
import {login, setAuthToken} from '../api/Auth';
import {JWT} from '../types/JWT'



type toggleProp = {
     onToggle: () => void;
    }

 const Login: React.FC<toggleProp> = ({onToggle}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (username: string, password: string): Promise<void> => {
      try {
        const jwt: JWT = await login(username, password) 
        const token =    (await login(username,password)).token
       localStorage.setItem('token', token)
        // redirect to home page
      } catch (error: any) {
         console.log(ErrorMessage)
      };
    };

   const onsubmit = async () => {
     await handleLogin(userName, password);
    }  
    return (
        <>
          <h3 className='text-sm font-bold text-gray-800'>You dont have an account ? <span  className='text-sm font-bold text-gray-800 cursor-pointer' onClick={onToggle}>Register</span></h3>
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
    
    <Form className="bg-white p-6 rounded-lg">
      
      <div className="mb-2" onSubmit={onsubmit}>
        <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-0" />
        <label htmlFor="username" className="block mb-1 text-sm font-bold text-gray-800">Username</label>
        <Field name="username" values = {userName} onChange={(e: any) => setUserName(e.target.values)} type="text" className="border border-gray-400 p-1 w-full rounded-lg" />
        
      </div>
      
      <div className="mb-2">
         <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
        <label htmlFor="password" className="block mb-1 text-sm font-bold w-1/3 text-gray-800">Password</label>
        <Field name="password" type="password" values = {password} onChange={(e: any) => setPassword(e.target.values)}className="border border-gray-400 p-1 w-full rounded-lg" />
 
      
      </div>
      <button type="submit" disabled={isSubmitting}  className="bg-indigo-500 text-white p-2 mt-7 w-full rounded-lg">
        Submit
      </button>
    
    </Form>
    
    )}  
    </Formik>
                </>
      );
    };
 
export default Login;