import Link from "next/link";


function NavBar ({toggle = false}, props:any)  {

  const logout = () =>{
    localStorage.removeItem('token');
    window.location.href = '/';
  }



  return (
    <nav className="header justify-between flex-wrap bg-indigo-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div> 

      <div className= "w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        
        <Link href ="/" >
            <a>Home</a> 
           </Link>
{toggle ? <>
           <Link href ="/products">
            <a>Product list</a>
           </Link>

           <Link href ="/login">
           <a> Authenticate</a>    
            </Link>
            <button onClick={logout}>Log out</button>
            </> : <Link href="/login" className='text'><a>Log in</a></Link>
}
           </div>
        </div>       

    </nav>
  )
}

export default NavBar