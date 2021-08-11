/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { getFavourites } from '../redux/actions/favourite';

function Fav() {
  const favouriteList = useSelector((state) => state.data.favourites);

  useEffect(() => {
    getFavourites(window.localStorage.getItem('token'));
  }, []);

  // const favouriteList = favourites;
  console.log(favouriteList);
  /* {
    favouriteList.map((favourite) => {
      console.log(favourite);
    });
  } */

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center">
      <div className=" mx-auto px-20 mb-9">
        <div className="bg-white p-8 rounded-lg shadow-lg  hover:shadow-2xl transition duration-500">
          <h1 className="text-2xl text-gray-800 font-semibold mb-3">
            The Project Name
          </h1>
          <button
            type="button"
            className="py-2 px-4 mt-8 bg-red-500 text-white rounded-md shadow-xl"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

/* Fav.propTypes = {
  favourites: PropTypes.instanceOf(Array).isRequired,
  // getFavourites: PropTypes.func.isRequired,
}; */
const mapStateToProps = (state) => ({
  favourites: state.favouriteReducer.favourites,
});

export default connect(mapStateToProps, { getFavourites })(Fav);
