import axios from 'axios';
import * as types from './actionType';
import baseUrl from '../../api/baseUrl';

const allPartnerships = (payload) => ({
  type: types.PARTNERSHIP,
  payload,
});
const destroyPartnership = (payload) => ({
  type: types.REMOVE_PARTNERSHIP,
  payload,
});

export const getPartnerships = (token) => async (dispatch) => {
  let partnerships = [];
  const config = {
    method: 'get',
    url: `${baseUrl}/partnerships`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    partnerships = await axios(config);
    dispatch(allPartnerships(partnerships.data));
  } catch (error) {
    throw new Error(error);
  }
};

export { destroyPartnership };
