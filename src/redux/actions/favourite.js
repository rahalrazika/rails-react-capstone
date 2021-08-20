import axios from 'axios';
import * as types from './actionType';
import baseUrl from '../../api/baseUrl';

const allFavourites = (payload) => ({
  type: types.FAVOURITES,
  payload,
});

export const getFavourites = (token) => async (dispatch) => {
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
    dispatch(allFavourites(favourites.data));
  } catch (error) {
    throw new Error(error);
  }
};

const addFavouriteToRedux = (payload) => ({
  type: types.ADD_FAVOURITE,
  payload,
});

const removeFavouriteFromRedux = (payload) => ({
  type: types.REMOVE_FAVOURITE,
  payload,
});

export { addFavouriteToRedux, removeFavouriteFromRedux };
