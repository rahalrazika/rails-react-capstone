import * as types from '../actions/actionType';

const initialState = {
  partnerships: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PARTNERSHIP:
      return { ...state, favourites: payload };
    case types.REMOVE_PARTNERSHIP:
      return {
        ...state.favourites.filter((e) => e !== payload),
      };

    default:
      return state;
  }
};
