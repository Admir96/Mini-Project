'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { register } from '../utils';
import './register.css'
import { regUser } from '../interfaces/interfaces';


const Register: React.FC = ({}) => {

const[isRegistered,setIsRegistered] = useState(false);
const router = useRouter();
const [Data,setData] = useState<regUser>();

const handleSubmit = () =>{

  try{
  if(!!Form){
    const temp:regUser =  Data as regUser;
    register(temp).then(() => router.push('/products'));
    setIsRegistered(true);
  }
}catch(error){
  console.log(error);
  alert('something went wrong, check :' + `${error}`) ;
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

       <div className='register'>
     <div className='registerContent'>
      <h1 className='registerTitle'>You  have an account ? <Link href ="/login">Login</Link></h1>
<Form className="registerForm" onSubmit={handleSubmit}>

  <div className="m-0 ">
    <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="username" className="registerSubtitle">Username</label>
    <Field name="username" type="text" values={Data?.username} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />
    
  </div>
  
  <div className="mb-0">
     <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
    <label htmlFor="password" className="registerSubtitle">Password</label>
    <Field name="password"  type="password" values={Data?.password} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />
    

  <div className="mb-0">
    <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="confirmPassword" className="registerSubtitle">Confirm password</label>
    <Field name="confirmPassword" type="password" values={Data?.confirmPassword} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />
    
  </div>

  <div className="mb-0">
    <ErrorMessage name="subscribeToNewsLetter" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="subscribeToNewsLetter" className="registerSubtitle">Subscribe to news letter</label>
    <Field name="subscribeToNewsLetter" type="checkbox" values={Data?.subscribeToNewsLetter} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />
    
  </div>

  <div className="mb-1">
    <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="gender" className="registerSubtitle">Gender</label>
    <Field name="gender" as="select" values={Data?.gender} className="border border-gray-400 p-1 w-full rounded-lg text-gray-800">
          <option className='text-sm font-bold text-gray-800' >male</option>
          <option  className='text-sm font-bold text-gray-800' >famale</option>
          <option   className='text-sm font-bold text-gray-800'>other</option></Field>
  </div>

  <div className="mb-1">
    <ErrorMessage name="Status" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="Status" className="registerSubtitle">Status</label>
    <Field name="Status" as="select" values={Data?.status} defaultValue="male" className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" >
            <option   className='text-sm font-bold text-gray-800'>Active</option>
          <option  className='text-sm font-bold text-gray-800' >Inactive</option></Field>
  </div>

  <div className="mb-1">
    <ErrorMessage name="yearOfBirth" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="yearOfBirth" className="registerSubtitle">Year of birth</label>
    <Field name="yearOfBirth" type="text" values={Data?.yearOfBirth} pattern="[0-9]+(\.[0-9]{1,2})?" className="border border-gray-400 p-1 w-full rounded-lg text-gray-800" />  
  </div>

  </div>
  <button type="submit" disabled={isSubmitting} className="registerButton">
    Submit
  </button>
</Form>
</div>
</div>
)}
</Formik>
      </>
  );
};

export default Register;


