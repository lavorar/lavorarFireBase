import React, { useState } from 'react'

const Header = (props) => {
  const [open, setopen] = useState(false)
  const Hamburger = () => {
    return (
      <div className={`${open ? "block" : "hidden"} items-center w-full md:hidden md:w-auto md:order-1`} id="navbar-sticky">
        <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-300">
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  ">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">Services</a>
          </li>
          <li>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
    )
  }

  const openMenu = () => {
    console.log("click")
    setopen(true)
  }
  return (
    <>
      <header>
        <nav className="flex bg-white-ghost px-2 sm:px-4 py-2.5 fixed w-full z-0 top-0 left-0 border-b border-gray-200 ">
          <div className={"flex justify-start"}>
                LOGO
          </div>
          <div className="container flex flex-wrap justify-end items-center mx-auto">
            <div className="flex md:order-2">
              <button type="button" className="text-white bg-orange-brand hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-brand dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
              <button onClick={() => setopen(!open)} type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
            <Hamburger />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header