import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import baseUrl from '../api/baseUrl';
import { saveToken, getUser } from '../redux/actions';

function LoginPage(props) {
  const history = useHistory();
  const [data, setData] = useState({ email: '', password: '' });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.email && !data.password) {
      setEmailError('email');
      setPasswordError('password');
    } else if (!data.email) {
      setEmailError('email');
    } else if (!data.password) {
      setPasswordError('password');
    } else {
      setEmailError('');
      setPasswordError('');
      const { saveToken, getUser } = props;
      const config = {
        method: 'post',
        url: `${baseUrl}/login`,
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
        data,
      };

      try {
        const fetchUser = await axios(config);

        const authData = fetchUser.data;
        window.localStorage.setItem('token', authData.token);
        window.localStorage.setItem('user', JSON.stringify(authData.user));
        saveToken(authData.token);
        const result = jwtDecode(authData.token);
        getUser(result);
        history.push('/main');
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  return (
    <div className="h-screen flex">
      <div className="w-full max-w-md m-auto bg-white   py-10 px-1">
        <div className="text-2xl font-medium text-center">
          <h1>Welcome Back!</h1>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <h3 className="text-2xl font-medium text-primary mt-4 mb-14">
            Login to your account
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          {emailError && (
            <p className="text-red-600">Please enter your email</p>
          )}
          <input
            placeholder="Please enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 text-primary border rounded-full text-center outline-none text-sm transition duration-150 ease-in-out mb-6 focus:ring-2 ring-yellow-500"
          />
          {passwordError && (
            <p className="text-red-600">Please enter your password</p>
          )}
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            className="w-full p-2 text-primary border rounded-full text-center outline-none text-sm transition duration-150 ease-in-out mb-4  focus:ring-2 ring-yellow-500"
          />
          <div className="flex items-center mt-3 justify-center">
            <button
              className=" background-orange py-2 px-4 text-md text-white rounded-full border border-white focus:outline-none focus:border-white"
              value="Login"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex items-center mt-6 justify-center">
          <Link
            to="/signup"
            className="justify-center text-gray-600 hover:underline"
          >
            Need to register? Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}
LoginPage.propTypes = {
  saveToken: PropTypes.func,
  getUser: PropTypes.func,
};
LoginPage.defaultProps = {
  saveToken: null,
  getUser: null,
};

export default connect(null, { saveToken, getUser })(LoginPage);
