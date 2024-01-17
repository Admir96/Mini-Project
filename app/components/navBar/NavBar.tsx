import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="block lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded bg-indigo-500  hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
      </div>
      <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          <Link href="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Home
          </Link>
          <Link href="/ProductList" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
            Product list
          </Link>
          <Link href="/Login" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
          Authenticate
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar