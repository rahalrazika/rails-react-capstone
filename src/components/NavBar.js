import React from 'react';
import user from '../assets/user.png';

function NavBar() {
  return (
    <div className="bg-gray-200 text-white w-64">
      <div>
        <img
          className="inline-block object-cover w-24 h-24 rounded-full  mt-6 mb-4 "
          src={user}
          alt="user"
        />
        <div className="text-gray-500 font-semibold uppercase ">Wesley Larson</div>

      </div>
      <nav>nav</nav>
    </div>
  );
}

export default NavBar;
