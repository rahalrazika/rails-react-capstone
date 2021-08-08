import baseUrl from './baseUrl';

const Config = () => {
  const token = localStorage.getItem('token');
  return {
    method: 'get',
    url: `${baseUrl}/projects`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

export default Config;
