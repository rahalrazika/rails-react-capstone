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
  console.log('ghghgh');
  console.log(token, baseUrl);
  try {
    projects = await axios(config);
    console.log(projects);
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(allProjects(projects.data));
};
export default fetchProjects;
