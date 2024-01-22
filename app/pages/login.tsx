import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'
import Link from 'next/link';   
import { useRouter } from 'next/router';
import { login } from '../utils';



 const Login: React.FC = () => {

   const [Data,SetData] = useState({
    username: "user",
    password:"password"
   });
   const router = useRouter();
      
   const handleSubmit = (x:any) =>{
    x.preventDefault();

    if(!!Form){
      login(Data.username,Data.password).then(() => router.push('/products')); }

      else{console.log("soething went wrong", ErrorMessage)}

    }

    const handleChange = (event:any) =>{
      const{name,value} = event.target;
      switch(name){
        case 'username':
          SetData({
            ...Data,
            username:value,
          });
          break;
          case 'password':
            SetData({
              ...Data,
              password:value,
            });
            break; default:break;
      }
    }
   
    return (
        <>
         You dont have an account ? <Link  className = "signIn-next" href="/login">Register</Link>
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
    
    <Form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      
      <div className="mb-2" >
        <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-0" />
        <label htmlFor="username" className="block mb-1 text-sm font-bold text-gray-800">Username</label>
        <Field {...handleChange} name="username" type="text" className="border border-gray-400 p-1 w-full rounded-lg" />
        
      </div>
      
      <div className="mb-2">
         <ErrorMessage name="password" component="div" className="text-red-600 w-2/3 text-sm mt-0 " />
        <label htmlFor="password" className="block mb-1 text-sm font-bold w-1/3 text-gray-800">Password</label>
        <Field name="password" {...handleChange} type="password" className="border border-gray-400 p-1 w-full rounded-lg" />
 
      
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