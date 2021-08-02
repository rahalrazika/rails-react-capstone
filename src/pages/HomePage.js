import React from 'react';
import Header from '../components/Header';
import logo from '../assets/logo.png';

export default function HomePage() {
  return (
    <div className="homePage px-16">
      <Header />
      <div className=" text-4xl uppercase mt-24 ">
        <img src={logo} alt="banner" className="main-img" />
        <span className="main-text">Find your Successful Partnership</span>
      </div>
    </div>
  );
}
