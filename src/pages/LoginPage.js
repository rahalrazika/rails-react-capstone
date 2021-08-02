import React from 'react';

function LoginPage() {
  return (
    <form>
      <h1>Login</h1>
      <h3>Welcome Back!</h3>
      <input placeholder="Please enter your email" type="email" />
      <input placeholder="Password" type="password" />
      <button type="submit">Login</button>

    </form>
  );
}

export default LoginPage;
