import React, { useState } from 'react';

function LoginPage() {
  const [data, setData] = useState({ email: '', password: '' });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
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

        <form>
          <input
            placeholder="Please enter your email"
            type="email"
            onChange={handleChange}
            className="w-full p-2 text-primary border rounded-full text-center outline-none text-sm transition duration-150 ease-in-out mb-6 focus:ring-2 ring-yellow-500"
          />
          <input
            placeholder="Password"
            type="password"
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
          <button type="submit" className="justify-center text-gray-600 hover:underline">
            Need to register? Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
