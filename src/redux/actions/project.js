import * as types from './actionType';

const allProjects = (payload) => ({
  type: types.ALL_PROJECTS,
  payload,
});

export default allProjects;
