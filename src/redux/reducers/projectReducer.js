import * as types from '../actions/actionType';

const initialState = {
  projects: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ALL_PROJECTS:
      return { ...state, projects: payload };

    default:
      return state;
  }
};
