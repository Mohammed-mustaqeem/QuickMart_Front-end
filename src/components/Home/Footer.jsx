import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    
  return (
    <div className="pt-10">
      <div className="border-t border-gray-200 bg-gray-950 div-2">
        <div className="  container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div class="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label for="footer-field" class="leading-7 text- text-white">
                Subscribe Newsletter
              </label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                class="w-full bg-white bg-opacity-0 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Button
            </button>
            <p class="text-white text- md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
              Subscribe newsletter to get 5% on all products.
            </p>
          </div>
          <span class="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a class="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >



                
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>

      <footer class="text-gray-600 body-font bg-gray-950">
        <div class="container border_B px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-400 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl text-white">QuickMart</span>
            </a>
            <p class="mt-2 text-sm text-white">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3 ">
                Shop Men
              </h2>
              <nav class="list-none  mb-10">
                <li>
                  {/* <a class="text-gray-600 hover:text-gray-800">First Link</a> */}
                  <NavLink className="text-gray-400 hover:text-white no-underline">
                    Clothing Fashion
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-400 hover:text-white no-underline">
                    Winter
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-400 hover:text-white no-underline">
                    Summer
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-400 hover:text-white no-underline">
                    Formal
                  </NavLink>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                Baby Collection
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                Tools
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">
                Quick Link
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    
                  </NavLink>
                </li>
                <li>
                  <NavLink className="text-gray-600 hover:text-gray-800">
                    First link
                  </NavLink>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-950 ">
          <div class="container border_B mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-white text-sm text-center sm:text-right">
              Copyright ©2025 All rights reserved |{" "}
              <span className="text-red-400">QuickMart</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
