'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { register } from '../utils';
import './register.css'


const Register: React.FC = ({}) => {

const[isRegistered,setIsRegistered] = useState(false);
const router = useRouter();
const [Data,setData] = useState({
  username:'',
  password:'',
  confirmPassword:'',
  subscribeToNewsLetter:false,
  gender:'',
  status:'',
  yearOfBirth:0,
});

const handleSubmit = (event:any) =>{
  event.preventDefauot();

  if(!!Form){
    register(Data).then(() => router.push('/products'));
    setIsRegistered(true);
  } else {console.error('something went wrong, try again');}
}

const handleChange = (event:any) => {
  const {name,value,type,checked} = event.target;
  setData((prevFormData) =>({
    ...prevFormData,
    [name]:type ==='checkbox' ?checked:value,
  }));
};

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
    <Field name="username" {...handleChange} type="text" className="border border-gray-400 p-1 w-full rounded-lg" />
    
  </div>
  
  <div className="mb-0">
     <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
    <label htmlFor="password" className="registerSubtitle">Password</label>
    <Field name="password"  {...handleChange} type="password" className="border border-gray-400 p-1 w-full rounded-lg" />
    

  <div className="mb-0">
    <ErrorMessage name="confirmPassword" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="confirmPassword" className="registerSubtitle">Confirm password</label>
    <Field name="confirmPassword"   {...handleChange} type="confirmPassword" className="border border-gray-400 p-1 w-full rounded-lg" />
    
  </div>

  <div className="mb-0">
    <ErrorMessage name="subscribeToNewsLetter" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="subscribeToNewsLetter" className="registerSubtitle">Subscribe to news letter</label>
    <Field name="subscribeToNewsLetter"   {...handleChange} type="checkbox" className="border border-gray-400 p-1 w-full rounded-lg" />
    
  </div>

  <div className="mb-1">
    <ErrorMessage name="gender" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="gender" className="registerSubtitle">Gender</label>
    <Field name="gender"   {...handleChange} as="select" className="border border-gray-400 p-1 w-full rounded-lg">
          <option className='text-sm font-bold text-gray-800' >male</option>
          <option  className='text-sm font-bold text-gray-800' >famale</option>
          <option   className='text-sm font-bold text-gray-800'>other</option></Field>
  </div>

  <div className="mb-1">
    <ErrorMessage name="Status" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="Status" className="registerSubtitle">Status</label>
    <Field name="Status" as="select"  {...handleChange} defaultValue="male" className="border border-gray-400 p-1 w-full rounded-lg" >
            <option   className='text-sm font-bold text-gray-800'>Active</option>
          <option  className='text-sm font-bold text-gray-800' >Inactive</option></Field>
  </div>

  <div className="mb-1">
    <ErrorMessage name="yearOfBirth" component="div" className="text-red-600 text-sm mt-0" />
    <label htmlFor="yearOfBirth" className="registerSubtitle">Year of birth</label>
    <Field name="yearOfBirth"  {...handleChange} type="text" pattern="[0-9]+(\.[0-9]{1,2})?" className="border border-gray-400 p-1 w-full rounded-lg" />  
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


