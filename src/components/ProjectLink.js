/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import port from '../assets/por.png';

const ProjectLink = (props) => {
  const { projectData, id } = props;
  const { name, price } = projectData;

  return (
    <Link
      className="hover:link hover:cursor-pointer"
      to={{
        pathname: `/project/${id}`,
        state: { data: projectData },
      }}
    >
      <div className="relative h-screen flex">
        <div className="container flex justify-center">
          <div className="w-full mt-20 px-7">
            <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img className="rounded-t-lg" src={port} alt="" />
              <div className="py-6 px-8 rounded-lg bg-white">
                <div>
                  <h1 className="  text-gray-700 font-bold text-2xl mb-3 capitalize rounded transition duration-100  ">
                    {name}
                  </h1>
                </div>

                <div className="mt-6 py-2 px-4 text-gray-800 font-bold ">
                  <span className="text-md">${price}</span>
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
  id: PropTypes.number.isRequired,
  projectData: PropTypes.instanceOf(Object),
};

ProjectLink.defaultProps = {
  projectData: {},
};

export default ProjectLink;
