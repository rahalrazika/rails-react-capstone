/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchProjects from '../redux/actions/project';

import {
  getFavourites,
  removeFavouriteFromRedux,
} from '../redux/actions/favourite';

const Fav = ({
  fetchProjects,
  getFavourites,
  removeFavouriteFromRedux,
  projects,
  favourites,
}) => {
  const userId = JSON.parse(window.localStorage.getItem('user')).id;
  const favouriteProjects = favourites.filter((el) => el.user_id === userId);

  const projectsToShow = projects.filter((el) => favouriteProjects.find((favEl) => favEl.project_id === el.id));

  useEffect(() => {
    fetchProjects(window.localStorage.getItem('token'));
    getFavourites(window.localStorage.getItem('token'));
  }, []);
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center">
      {projectsToShow.map((el) => (
        <div key={el.id} className=" min-w-full px-20 mb-9">
          <div className="bg-white p-8 rounded-lg shadow-lg  hover:shadow-2xl transition duration-500">
            <h1 className="text-2xl text-gray-800 font-semibold mb-3">
              {el.name}
            </h1>
            <button
              type="button"
              className="py-2 px-4 mt-8 bg-red-500 text-white rounded-md shadow-xl"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

Fav.propTypes = {
  favourites: PropTypes.instanceOf(Array),
  projects: PropTypes.instanceOf(Array),
  fetchProjects: PropTypes.func.isRequired,
  getFavourites: PropTypes.func.isRequired,
  removeFavouriteFromRedux: PropTypes.func.isRequired,
};
Fav.defaultProps = {
  favourites: [],
  projects: [],
};
const mapStateToProps = (state) => ({
  favourites: state.favouriteReducer.favourites,
  projects: state.projectReducer.projects,
});

/* const mapStateToProps = (state) => console.log(state.favouriteReducer.favourites);
 */
export default connect(mapStateToProps, {
  fetchProjects,
  getFavourites,
  removeFavouriteFromRedux,
})(Fav);
