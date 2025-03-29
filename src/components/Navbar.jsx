import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="shadow-md w-full sticky z-50 top-0 left-0 bg-lime-200">
        <div className="md:flex flex items-center justify-between py-5 lg:px-32 md:px-30 px-7">
          <div className="cursor-pointer flex items-center">
            <NavLink to="/">
              <img src="/logo.png" alt="logo" width="45" height="45" />
            </NavLink>
            <div className="ml-1 pt-1 text-xs font-semibold font-mono flex flex-col justify-center">
              <NavLink to="/"> Ecell </NavLink>
              <NavLink to="/"> Dr.Aitd </NavLink>
            </div>
          </div>
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
          <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="md:flex md:items-center md:pb-0 pb-5 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in uppercase bg-lime-200 md:bg-transparent mt-10 md:mt-0">
              <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                <NavLink to="/service">INITIATIVES</NavLink>
              </li>
              <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                <NavLink to="/about">ACHIEVEMENTS</NavLink>
              </li>
              <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {isLoggedIn ? (
                <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                  <NavLink to="/logout">LOGOUT</NavLink>
                </li>
              ) : (
                <>
                  <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                  <li className="md:mx-5 text-lg font-medium md:my-0 my-5 text-gray-700 hover:text-lime-600">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
