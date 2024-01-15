import React, { useState } from 'react';
import * as Yup from 'Yup';
import { useFormik } from 'formik';

type toggleProp = {
    onToggle: () => void;
   }
const Register: React.FC<toggleProp> = ({onToggle}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
  validationSchema: Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  }),

  onSubmit: (values) => {
    // Handle form submission logic here
    console.log('Form Values:', values);
  },
});

  return (
    <>
          <form onSubmit={formik.handleSubmit} className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Sign up
                </h1>
                <div className="w-full flex-1 mt-8">
                    
                    <div className="my-12 border-b text-center">
                        <div
                           className ="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                          Already have an account? <span onClick={onToggle}>Login</span>
                        </div>
                    </div>

                    <div className="mx-auto max-w-xs">
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Username" 
                            value={userName}
                            onTouchStart={formik.handleChange}               
                            onChange={x => setUserName (x.target.value)}
                            />
                      
                             {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
                     
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password"
                             value={password}
                             onTouchStart={formik.handleChange}
                            onChange={x => setPassword (x.target.value)}                
                           />

                                   {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}
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
            </form>
            </>
  );
};

export default Register;


