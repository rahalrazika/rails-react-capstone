import * as types from '../actions/actionType';

const initialState = {
  favourites: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FAVOURITES:
      return { ...state, favourites: payload };

    default:
      return state;
  }
};
