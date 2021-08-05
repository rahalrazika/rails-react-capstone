import * as types from '../actions/actionType';

const initialState = {
  project: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALL_PROJECTS:
      return { ...state, project: payload };
    default:
      return state;
  }
};
