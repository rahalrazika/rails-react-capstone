import axios from 'axios';
import baseUrl from './baseUrl';

const removeFavourite = async (el = null, favourites, removeFavouriteFromRedux) => {
  const getId = favourites.find(
    (item) => `${item.project_id}` === `${el.id}`,
  );

  const token = window.localStorage.getItem('token');
  const config = {
    method: 'DELETE',
    url: `${baseUrl}/favourites/${getId.id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios(config);
    removeFavouriteFromRedux(getId.id);
  } catch (error) {
    throw new Error(error);
  }
};
export default removeFavourite;
