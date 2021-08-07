import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/all';
import port from '../assets/por1.png';

const ProjectLink = ({ projectData, id }) => {
  const { name, price } = projectData;
  return (
    <Link className="link" to={`/main/${projectData.id}`}>
      <div className="relative h-screen flex">
        <div className="flex-1 p-10">
          <div className="container flex justify-center">
            <div className="max-w-sm py-32">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img className="rounded-t-lg" src={port} alt="" />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <Link to={`/project/${id}`}>
                    <h1 className="text-gray-700 font-bold text-2xl mb-3 capitalize rounded transition duration-100  hover:bg-yellow-400 hover:text-white hover:cursor-pointer ">
                      {name}
                    </h1>
                  </Link>

                  <div className="mt-6 py-2 px-4 text-gray-800 font-bold ">
                    <span className="text-md">
                      $
                      {price}
                    </span>
                  </div>
                </div>
                <div className=" top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <BsHeart />
                  <BsHeartFill className="text-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
ProjectLink.propTypes = {
  id: PropTypes.string.isRequired,
  projectData: PropTypes.instanceOf(Object),
};

ProjectLink.defaultProps = {
  projectData: {},
};

export default ProjectLink;
