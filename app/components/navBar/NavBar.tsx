import Link from 'next/link';
import React , {useState} from 'react'  

const Navbar = () => {

  const [session, setSession] = React.useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <Link href="/">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div> </Link>

      <div className= "w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
         {!session}
        
           <button onClick= {() => setSession(true)}> Home </button>
        
             
           <button onClick= {() => setSession(true)}> Product list</button> 
          
            <button onClick= {() => setSession(true)}> Authenticate </button>     

           </div>
        </div>       
    </nav>
  )
}

export default Navbar