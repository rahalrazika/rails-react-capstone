import * as types from '../actions/actionType';

const initialState = {
  user: null,
  token: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_USER:
      return { ...state, user: payload };
    case types.SAVE_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};
