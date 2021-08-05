import * as types from './actionType';

export const getUser = (payload) => ({
  type: types.GET_USER,
  payload,
});
export const saveToken = (payload) => ({
  type: types.SAVE_TOKEN,
  payload,
});
