import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'
type toggleProp = {
     onToggle: () => void;
    }

 const Login: React.FC<toggleProp> = ({onToggle}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

   
  
    return (
        <>
           <h3>You dont have an account ? <span onClick={onToggle}>Register</span></h3>
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
      
      <div className="mb-2">
        <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-0" />
        <label htmlFor="username" className="block mb-1 text-sm font-bold text-gray-800">Username</label>
        <Field name="username" type="text" className="border border-gray-400 p-1 w-full rounded-lg" />
        
      </div>
      
      <div className="mb-2">
         <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
        <label htmlFor="password" className="block mb-1 text-sm font-bold w-1/3 text-gray-800">Password</label>
        <Field name="password" type="password" className="border border-gray-400 p-1 w-full rounded-lg" />
 
      
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