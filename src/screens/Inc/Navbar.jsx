import React, { useState } from 'react';
import sukhanestate from '../../../src/assets/images/sukhanestate.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="main-nav ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="/" className="rtl:space-x-reverse">
            <img
              src={sukhanestate}
              className="h-16 max-sm:h-16 md:h-20 lg:h-20 xl:h-1/2 w-auto"
              alt="Flowbite Logo"
            />
          </a>
          <button
            onClick={toggleNavbar}
            type="button"
            className="inline-flex order-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto max-sm:order-3`} id="navbar-default">
            <ul className="xl:mr-[42px] lg:mr-[42px] md:mr-[42px] max-sm:mr-[0px] font-medium flex flex-col p-4 max-sm:p-0 md:p-0 mt-4 border border-[#fff] rounded-lg md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-gray-900 hover:text-[#00b2ff] transition-all duration-150 max-sm:border-b max-sm:border-dashed  border-[#001842]  md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 max-sm:border-b max-sm:border-dashed border-[#001842] hover:text-[#00b2ff] transition-all duration-150 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 max-sm:border-b max-sm:border-dashed border-[#001842] hover:text-[#00b2ff] transition-all duration-150 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 max-sm:border-b max-sm:border-dashed border-[#001842] hover:text-[#00b2ff] transition-all duration-150 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Upsize
                </a>
              </li>
            </ul>
          </div>

          <Link to='/Contactus'><button
            type="button"
            className="contact-us text-white focus:ring-blue-300 font-medium xl:px-6 xl:py-2 lg:px-6 lg:py-2 md:px-6 md:py-2 max-sm:px-5 max-sm:py-1 max-sm:hidden ml-auto xl:ml-0 lg:ml-0 md:ml-0"
          >
            Contact Us
          </button></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
