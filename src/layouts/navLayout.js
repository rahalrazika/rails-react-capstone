import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GrMenu } from 'react-icons/gr';
import NavBar from '../components/NavBar';

const NavLayout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="submit"
          id="menuButton"
          className="p-2 h-12 "
        >
          <GrMenu className="text-5xl" />
          {isOpen && <NavBar />}
        </button>
      )}

      {children}
    </div>
  );
};
NavLayout.propTypes = {
  children: PropTypes.instanceOf(Object),
};
NavLayout.defaultProps = {
  children: null,
};
export default NavLayout;
