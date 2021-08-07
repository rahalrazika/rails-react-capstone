import axios from 'axios';
import * as types from './actionType';
import baseUrl from '../../api/baseUrl';

const allProjects = (payload) => ({
  type: types.ALL_PROJECTS,
  payload,
});

const fetchProjects = (token) => async (dispatch) => {
  console.log(token);
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
    console.log(projects);
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(allProjects(projects.data));
};
// const fetchProjects = (token) => async (dispatch) => {
//   console.log('sdfsdfsdf');
//   const config = {
//     method: 'get',
//     url: `${baseUrl}/main`,
//     headers: {
//       'Content-Type': 'application/json',
//       accept: 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   try {
//     const projects = await axios(config);
//     console.log(projects);
//     dispatch(allProjects(projects));
//   } catch (error) {
//     throw new Error(error);
//   }
// };

/* const fetchProjects = () => (dispatch) => {
  fetch(config).then((res) => {
    if (res.ok) {
      res.json().then((result) => {
        dispatch(allProjects(result));
      });
    }
  });
}; */

/* const fetchProjects = async (dispatch) => {
  const response = await axios
    .get(`${baseUrl}/main`)
    .catch((err) => err);
  dispatch(allProjects(response.data));
}; */
export default fetchProjects;
