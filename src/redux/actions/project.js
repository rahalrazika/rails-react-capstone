import axios from 'axios';
import * as types from './actionType';
import baseUrl from '../../api/baseUrl';

const allProjects = (payload) => ({
  type: types.ALL_PROJECTS,
  payload,
});

const fetchProjects = (token) => async (dispatch) => {
  let projects = [];
  const config = {
    method: 'get',
    url: `${baseUrl}/projects`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    projects = await axios(config);
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(allProjects(projects.data));
};
export default fetchProjects;
