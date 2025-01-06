// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 bg-opacity-80 backdrop-blur-md text-white fixed top-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wider">Contact Manager</h1>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:text-teal-400 transition duration-200">
              Home
            </li>
            <li className="hover:text-teal-400 transition duration-200">
              About
            </li>
            <li className="hover:text-teal-400 transition duration-200">
              Contacts
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
