import { Link, NavLink } from "react-router-dom";
import logo from "../images/newlogo.png";
import { useState } from "react";

function Navbar() {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-800 p-5 z-50">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex items-center">
          <img src={logo} class="h-8 mr-3" alt="Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JobSprinter
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
            <li class="text-black">
              <NavLink
                exact
                to="/"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:text-white`}
                style={({ isActive }) => ({
                  color: isActive ? "rgb(59 130 246 / var(--tw-text-opacity))": '',
                })}
                aria-current="page"
                onClick={() => handleOptionSelect("home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/postings"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:text-white`}
                style={({ isActive }) => ({
                  color: isActive ? "rgb(59 130 246 / var(--tw-text-opacity))": '',
                })}
                onClick={() => handleOptionSelect("postings")}
              >
                Postings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:text-white`}
                style={({ isActive }) => ({
                  color: isActive ? "rgb(59 130 246 / var(--tw-text-opacity))": '',
                })}
                onClick={() => handleOptionSelect("new")}
              >
                New
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/delete"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:text-white`}
                style={({ isActive }) => ({
                  color: isActive ? "rgb(59 130 246 / var(--tw-text-opacity))": '',
                })}
                onClick={() => handleOptionSelect("delete")}
              >
                Delete
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/edit"
                className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:text-white`}
                style={({ isActive }) => ({
                  color: isActive ? "rgb(59 130 246 / var(--tw-text-opacity))": '',
                })}
                onClick={() => handleOptionSelect("edit")}
              >
                Edit
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
