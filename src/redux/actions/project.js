import axios from 'axios';
import * as types from './actionType';
import Config from '../../api/Config';

const allProjects = (payload) => ({
  type: types.ALL_PROJECTS,
  payload,
});

const fetchProjects = () => async (dispatch) => {
  let projects = [];

  try {
    projects = await axios(Config());
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(allProjects(projects.data));
};
export default fetchProjects;
