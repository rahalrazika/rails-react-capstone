import React from 'react';
// import { connect, useSelector } from 'react-redux';

// import { getFavourites } from '../redux/actions/favourite';

function Fav() {
/*   const favouriteList = useSelector((state) => state.data.favourites);

  console.log(favouriteList); */

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
  // favourites: PropTypes.instanceOf(Array).isRequired,
  // getFavourites: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  favourites: state.favouriteReducer.favourites,
});
 */
export default (Fav);
