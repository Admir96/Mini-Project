import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import RegisterValidationSchema, {initialValues} from '../Validation/ValidationForm'


type toggleProp = {
    onToggle: () => void;
   }
const Register: React.FC<toggleProp> = ({onToggle}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [subscribeToNewsLetter, setSubscribeToNewsLetter] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');
  
<Formik
initialValues={initialValues}
validationSchema={RegisterValidationSchema}
onSubmit={(values, { setSubmitting }) => {
   setTimeout(() => {
     alert(JSON.stringify(values, null, 2));
     setSubmitting(false);
   }, 400);

}}></Formik>

  return (
    <>
          <Form>
                <h1 className="font-extrabold align-text-top">
                    Sign up
                </h1>
                <div className="w-full flex-1 mt-8">
                    
                    <div className="my-1 border-b text-center">
                        <div
                           className ="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                          Already have an account? <span onClick={onToggle}>Login</span>
                        </div>
                    </div>

                    <div className="mx-auto max-w-xs">
                        <input 
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"

                            placeholder="Username" 
                            value={userName}            
                            onChange={x => setUserName (x.target.value)}
                            />
                               <input
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password"
                             value={password}                     
                            onChange={x => setPassword (x.target.value)}                
                           />
                              <input
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Repeat password" 
                            value={repeatPassword}            
                            onChange={x => setRepeatPassword (x.target.value)}
                            />
                        <input
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Subscribe to newsLetter" 
                            value={subscribeToNewsLetter}            
                            onChange={x => setSubscribeToNewsLetter (x.target.value)}
                            />
                        <input
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Gender" 
                            value={gender}            
                            onChange={x => setGender (x.target.value)}
                            />
                        <input
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="status" 
                            value={status}            
                            onChange={x => setStatus (x.target.value)}
                            />
                        <input
                            className="w-full px-7 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Year of birth" 
                            value={yearOfBirth}            
                            onChange={x => setYearOfBirth (x.target.value)}
                            />                                      
                        <button type="submit"
                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-3">
                                Sign Up
                            </span>
                        </button>
                    </div>
                </div>
            </Form>
            </>
  );
};

export default Register;


