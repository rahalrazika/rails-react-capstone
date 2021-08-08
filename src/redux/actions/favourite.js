import * as types from './actionType';

const favourites = (payload) => ({
  type: types.FAVOURITES,
  payload,
});

export default favourites;
