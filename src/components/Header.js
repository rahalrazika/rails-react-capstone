import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className=" h-16 flex justify-between">
      <img src={logo} alt="logo" />
      <div className="font-semibold text-gray-700 flex justify-around mr-10 ">
        <Link to="/login" className="p-2 uppercase nav-links flex align-middle ">
          Login
        </Link>
        <Link to="/signup" className="p-2 uppercase nav-links ">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Header;
