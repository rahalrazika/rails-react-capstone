import axios from 'axios';
import * as types from './actionType';
import baseUrl from '../../api/baseUrl';

const allFavourites = (payload) => ({
  type: types.FAVOURITES,
  payload,
});

const getFavourites = (token) => async (dispatch) => {
  let favourites = [];
  const config = {
    method: 'get',
    url: `${baseUrl}/favourites`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    favourites = await axios(config);
  } catch (error) {
    throw new Error(error);
  }

  return dispatch(allFavourites(favourites.data));
};
export default getFavourites;
