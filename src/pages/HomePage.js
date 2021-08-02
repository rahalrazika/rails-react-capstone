import React from 'react';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div className="homePage px-16">
      <Header />
      <div className=" text-4xl uppercase mt-24 ">
        <span className="main-text">rem Ipsum is simply dummy text of the printing.</span>
      </div>
    </div>
  );
}
