'use client'
import Link from "next/link";


const  Header = ({toggle = false}, props:any)  => {
  const logout = () =>{
    localStorage.removeItem('token');
    window.location.href = '/';
  }

  return (
    <header className="bg-gray-800 text-white py-4 display: inline;">  
      <div className= "flex space-x-4">    
        <Link href="/WelcomeSection">
            Home 
           </Link>
{toggle ? <>
  <Link href="/products">
            Product list
           </Link>

            <button onClick={logout}>Log out</button>
            </> :   <Link href="/login">Log in</Link>
}
   
          </div>
    </header>
  )
}

export default Header