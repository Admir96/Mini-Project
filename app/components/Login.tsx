
import React, { useState } from 'react';


type toggleProp = {
     onToggle: () => void;
    }

 const Login: React.FC<toggleProp> = ({onToggle}) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

   
  
  return (
    <>   
          <form  className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Sign in
                </h1>
                <div className="w-full flex-1 mt-8">
                    
                    <div className="my-12 border-b text-center">
                        <div
                           className ="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                           You dont have an account ? <span onClick={onToggle}>Register</span>
                        </div>
                    </div>

                    <div className="mx-auto max-w-xs">
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                            type="text" placeholder="Username" value={userName}            
                            onChange={x => setUserName (x.target.value)}/>
                           
                            
                       
                        <input
                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                            type="password" placeholder="Password"  value={password}               
                            onChange={x => setPassword (x.target.value)}/>
                           
                        

                        <button type='submit' 
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
  )};
export default Login;