/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsHeart, BsHeartFill, AiOutlineArrowLeft } from 'react-icons/all';
import axios from 'axios';
import port2 from '../assets/proj.jpg';
import user from '../assets/user.png';
import baseUrl from '../api/baseUrl';
import {
  addFavouriteToRedux,
  removeFavouriteFromRedux,
} from '../redux/actions/favourite';
import { addPartnershipToRedux } from '../redux/actions/partnership';

const ProjectDetail = ({
  history,
  match,
  favourites,
  addFavouriteToRedux,
  removeFavouriteFromRedux,
  addPartnershipToRedux,
}) => {
  const { name, description, price } = history.location.state.data;
  const userId = JSON.parse(window.localStorage.getItem('user')).id;
  const token = window.localStorage.getItem('token');
  const projectId = match.params.id;
  const getId = favourites.find(
    (item) => `${item.project_id}` === `${projectId}`,
  );
  async function addFavourite(e) {
    e.preventDefault();

    const token = window.localStorage.getItem('token');
    const config = {
      method: 'post',
      url: `${baseUrl}/favourites`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        user_id: userId,
        project_id: projectId,
      },
    };

    try {
      await axios(config);
      addFavouriteToRedux({
        user_id: userId,
        project_id: projectId,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async function destroyFavourite() {
    const token = window.localStorage.getItem('token');
    const config = {
      method: 'DELETE',
      url: `${baseUrl}/favourites/${getId.id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios(config);
      removeFavouriteFromRedux(getId.id);
    } catch (error) {
      throw new Error(error);
    }
  }
  const renderHearts = (favourites) => {
    const isFavourite = favourites.find(
      (el) => `${el.project_id}` === `${projectId}`,
    );

    return (
      <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
        {isFavourite ? (
          <BsHeartFill onClick={destroyFavourite} className="text-yellow-300" />
        ) : (
          <BsHeart onClick={addFavourite} />
        )}
      </div>
    );
  };

  async function addPartnerships(e) {
    e.preventDefault();
    const config = {
      method: 'post',
      url: `${baseUrl}/partnerships`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        user_id: userId,
        project_id: projectId,
        date: new Date(),
      },
    };

    try {
      await axios(config);
      addPartnershipToRedux({
        user_id: userId,
        project_id: projectId,
        date: new Date(),
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <div className="w-full h-screen">
      <div className="bg-gray-100 h-7  flex ">
        <Link to="/main" className="hover:text-yellow-500">
          <AiOutlineArrowLeft className="text-2xl " />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:h-screen sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
        <div className="relative text-yellow-700 flex justify-between z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
          <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
            {name}
          </h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
          {renderHearts(favourites)}
        </div>
        <div className="col-start-1 row-start-3 space-y-3 px-4">
          <h3 className="text-center font-semibold text-xl">
            {price}
            $
          </h3>
          <p className="flex items-center text-black text-sm font-medium">
            <img
              src={user}
              alt="user"
              className="w-6 h-6 rounded-full mr-2 bg-gray-100"
            />
            username
          </p>
          <p>{description}</p>
          <button
            onClick={addPartnerships}
            type="button"
            className="bg-yellow-100 hover:bg-yellow-400 hover:text-black  text-yellow-700 text-base font-semibold px-6 mt-11 py-2 rounded-lg"
          >
            Apply For partnership
          </button>
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="w-full relative grid grid-cols-1  gap-2">
            <img
              src={port2}
              alt=""
              className="absolute inset-0 w-full h-full object-fill bg-gray-100 sm:rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectDetail.propTypes = {
  history: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
  favourites: PropTypes.instanceOf(Array),
  addFavouriteToRedux: PropTypes.func.isRequired,
  addPartnershipToRedux: PropTypes.func.isRequired,
  removeFavouriteFromRedux: PropTypes.func.isRequired,
};
ProjectDetail.defaultProps = {
  history: {},
  match: {},
  favourites: [],
};
export default connect(null, {
  addFavouriteToRedux, removeFavouriteFromRedux, addPartnershipToRedux,
})(
  ProjectDetail,
);
