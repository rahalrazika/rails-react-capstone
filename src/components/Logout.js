import { useHistory } from 'react-router';

const Logout = () => {
  const history = useHistory();

  const handleClick = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    history.push('/login');
  };
  return (
    <button
      onClick={handleClick}
      type="button"
      className="p-2 uppercase nav-links "
    >
      Logout
    </button>
  );
};

export default Logout;
