/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function NavLayout(props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowSize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  return (
    <div className="relative min-h-screen flex">
      {width > 900 ? (
        <NavBar />
      ) : (
        <div id="menuButton" className="p-2 h-12 ">
          <img
            alt="menu"
            src="https://img.icons8.com/ios-filled/50/000000/menu--v3.png"
          />
        </div>
      )}

      {props.children}
    </div>
  );
}

export default NavLayout;
