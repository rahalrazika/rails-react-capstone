import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Logout from './Logout';

const Header = () => (
  <div className=" h-16 flex justify-between">
    <img src={logo} alt="logo" />
    {!window.localStorage.getItem('token') ? (
      <div className="font-semibold text-gray-700 flex justify-around mr-10 ">
        <Link
          to="/login"
          className="p-2 uppercase nav-links flex align-middle "
        >
          Login
        </Link>
        <Link to="/signup" className="p-2 uppercase nav-links ">
          Sign up
        </Link>
      </div>
    ) : (
      <div className="font-semibold text-gray-700 flex justify-around mr-10 align-middle ">
        <div className="p-2 uppercase nav-links flex align-middle ">
          {JSON.parse(window.localStorage.getItem('user')).username}
        </div>
        <div className="log">
          <Logout />
        </div>
      </div>
    )}
  </div>
);

export default Header;
