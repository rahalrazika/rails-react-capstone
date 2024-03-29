import * as types from '../actions/actionType';

const initialState = {
  partnerships: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PARTNERSHIP:
      return { ...state, partnerships: payload };
    case types.ADD_PARTNERSHIP:
      return { ...state, partnerships: [...state.partnerships, payload] };
    case types.REMOVE_PARTNERSHIP:
      return {
        ...state,
        partnerships: state.partnerships.filter((el) => `${el.id}` !== `${payload}`),

      };

    default:
      return state;
  }
};
