import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  destroyPartnership,
  getPartnerships,
} from '../redux/actions/partnership';
import baseUrl from '../api/baseUrl';
import fetchProjects from '../redux/actions/project';

const Partnership = ({
  fetchProjects,
  getPartnerships,
  destroyPartnership,
  projects,
  partnerships,
}) => {
  useEffect(() => {
    getPartnerships(window.localStorage.getItem('token'));
    fetchProjects(window.localStorage.getItem('token'));
  }, []);

  const userId = JSON.parse(window.localStorage.getItem('user')).id;
  const partnershipProjects = partnerships.filter(
    (el) => el.user_id === userId,
  );

  const projectsList = projects.filter(
    (el) => partnershipProjects.find((favEl) => favEl.project_id === el.id),
  );

  const partnershipId = partnerships.find(
    (item) => `${item.project_id}`,
  );

  console.log(partnerships.id);
  async function RemovePartnership() {
    const token = window.localStorage.getItem('token');
    const config = {
      method: 'DELETE',
      url: `${baseUrl}/partnerships/${partnershipId.id}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios(config);
      destroyPartnership(partnershipId.id);
      window.location.reload();
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center">
      {projectsList.map((el) => (
        <div key={el.id} className=" min-w-full px-20 mb-9">
          <div className="bg-white p-8 rounded-lg shadow-lg  hover:shadow-2xl transition duration-500">
            <h1 className="text-2xl text-gray-800 font-semibold mb-3">
              {el.name}
            </h1>
            <button
              onClick={() => RemovePartnership(partnershipId.id)}
              type="button"
              className="py-2 mr-2 px-4 mt-8 bg-red-500 text-white rounded-md shadow-xl"
            >
              Remove
            </button>
            <button
              type="button"
              className="py-2 px-4 mt-8 bg-blue-500 text-white rounded-md shadow-xl"
            >
              Get link To the zoom call
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
Partnership.propTypes = {
  partnerships: PropTypes.instanceOf(Array),
  projects: PropTypes.instanceOf(Array),
  fetchProjects: PropTypes.func.isRequired,
  getPartnerships: PropTypes.func.isRequired,
  destroyPartnership: PropTypes.func.isRequired,
};
Partnership.defaultProps = {
  projects: [],
  partnerships: [],
};
const mapStateToProps = (state) => ({
  partnerships: state.partnershipReducer.partnerships,
  projects: state.projectReducer.projects,
});

export default connect(mapStateToProps, {
  fetchProjects,
  getPartnerships,
  destroyPartnership,
})(Partnership);
