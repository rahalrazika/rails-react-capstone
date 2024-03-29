import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ProjectLink from '../components/ProjectLink';
import fetchProjects from '../redux/actions/project';
import Loading from '../components/Loading';
import { getFavourites } from '../redux/actions/favourite';

const MainPage = ({ fetchProjects, getFavourites, projects }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    {
      width: 550,
      itemsToShow: 2,
      itemsToScroll: 2,
      pagination: false,
    },
    { width: 500, itemsToShow: 1 },
    { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 2 },
    { width: 1750, itemsToShow: 3 },
  ];
  const [loading, setLoading] = useState(false);

  let projectList;
  if (!window.localStorage.getItem('token')) {
    useHistory().push('/login');
  } else {
    useEffect(() => {
      fetchProjects(window.localStorage.getItem('token'));
      getFavourites(window.localStorage.getItem('token'));
      setLoading(true);
    }, []);
    projectList = (
      <div>
        <>
          {loading ? (
            <Carousel className="slide" breakPoints={breakPoints}>
              {projects.map((project) => (
                <ProjectLink
                  key={project.id}
                  projectData={project}
                  id={project.id}
                />
              ))}
            </Carousel>
          ) : (
            <Loading />
          )}
        </>
      </div>
    );
  }

  return (
    <div className="flex-1 p-10 main-page ">
      <h1 className="text-yellow-400 text-2xl font-semibold uppercase">
        new Projects
      </h1>
      <div>{projectList}</div>
    </div>
  );
};
MainPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  fetchProjects: PropTypes.func.isRequired,
  getFavourites: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
});

export default connect(mapStateToProps, { fetchProjects, getFavourites })(
  MainPage,
);
