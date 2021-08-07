import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-elastic-carousel';
import { connect } from 'react-redux';
import ProjectLink from '../components/ProjectLink';
import fetchProjects from '../redux/actions/project';
import Loading from '../components/Loading';

const MainPage = ({ fetchProjects, projects }) => {
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
  useEffect(() => {
    fetchProjects(window.localStorage.getItem('token'));
    setLoading(true);
  }, []);
  const projectList = (
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
  return (
    <div className="relative min-h-screen flex">
      <div className="flex-1 p-10">
        <div className="flex-1 p-10">{projectList}</div>
      </div>
    </div>
  );
};
MainPage.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
  fetchProjects: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  projects: state.projectReducer.projects,
});

export default connect(mapStateToProps, { fetchProjects })(MainPage);
