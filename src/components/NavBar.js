import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';

function NavBar() {
  return (
    <div className="flex">
      <div className="bg-gray-100 text-white w-64 px-2 ">
        <div>
          <img
            className="inline-block object-cover w-24 h-24 rounded-full  mt-6 mb-4 "
            src={user}
            alt="user"
          />
          <div className="text-gray-500 font-semibold uppercase space-y-6 ">
            Wesley Larson
          </div>
        </div>
        <nav>
          <Link
            to="/main"
            className="block py-2.5 px-4 text-gray-500 font-semibold capitalize rounded transition duration-100  hover:bg-yellow-400 hover:text-white "
          >
            Projects
          </Link>
          <Link
            to="/fav"
            className="block py-2.5 px-4 text-gray-500 font-semibold capitalize rounded transition duration-100  hover:bg-yellow-400 hover:text-white "
          >
            Favourites
          </Link>
          <Link
            to="/partner"
            className="block py-2.5 px-4 text-gray-500 font-semibold capitalize rounded transition duration-100  hover:bg-yellow-400 hover:text-white "
          >
            Partnerships
          </Link>
        </nav>
        <div className="py-52 text-gray-500 ">
          <p className="border-t-2 border-gray-300 py-4 ">logout</p>
          <p>help</p>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
