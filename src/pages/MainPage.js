import React from 'react';
import NavBar from '../components/NavBar';
import ProjectPage from './ProjectPage';

function MainPage() {
  return (
    <div className="relative min-h-screen flex">
      <NavBar />

      <ProjectPage />
    </div>
  );
}

export default MainPage;
