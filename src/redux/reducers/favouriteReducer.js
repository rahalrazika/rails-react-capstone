import * as types from '../actions/actionType';

const initialState = {
  favourites: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FAVOURITES:
      return { ...state, favourites: payload };
    case types.ADD_FAVOURITE:
      return { ...state, favourites: [...state.favourites, payload] };
    case types.REMOVE_FAVOURITE:
      return {
        ...state.favourites.filter((e) => e !== payload),
      };

    default:
      return state;
  }
};
