import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { connect } from 'react-redux';
import baseUrl from '../api/baseUrl';
import { saveToken, getUser } from '../redux/actions';

function SignUpPage(props) {
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const handleChange = (e) => {
    setData(() => ({ ...data, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { saveToken, getUser } = props;
    const config = {
      method: 'post',
      url: `${baseUrl}/users`,
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      data,
    };

    try {
      const fetch = await axios(config);
      const authData = fetch.data;
      window.localStorage.setItem('token', authData.token);
      saveToken(authData.token);

      const result = jwtDecode(authData.token);
      getUser(result);
      window.location.href = '/login';
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="h-screen flex">
      <div className="w-full max-w-md m-auto bg-white   py-10 px-1">
        <div className="text-2xl font-medium text-center">
          <h1>Sign up</h1>
        </div>
        <div className="flex items-center mt-3 justify-center">
          <h3 className="text-2xl font-medium text-primary mt-4 mb-14">
            Hello there! Sign up and create your account
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            type="username"
            name="username"
            onChange={handleChange}
            className="w-full p-2 text-primary border rounded-full text-center outline-none text-sm transition duration-150 ease-in-out mb-6 focus:ring-2 ring-yellow-500"
          />
          <input
            placeholder="Please enter your email"
            type="email"
            name="email"
            onChange={handleChange}
            className="w-full p-2 text-primary border rounded-full text-center outline-none text-sm transition duration-150 ease-in-out mb-6 focus:ring-2 ring-yellow-500"
          />
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
              value="Signup"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex items-center mt-6 justify-center">
          <button
            type="submit"
            className="justify-center text-gray-600 hover:underline"
          >
            You already have an account? Login and enjoy!
          </button>
        </div>
      </div>
    </div>
  );
}
SignUpPage.propTypes = {
  saveToken: PropTypes.func,
  getUser: PropTypes.func,
};
SignUpPage.defaultProps = {
  saveToken: null,
  getUser: null,
};
export default connect(null, { saveToken, getUser })(SignUpPage);
