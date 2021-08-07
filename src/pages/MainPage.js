import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectLink from '../components/ProjectLink';
import fetchProjects from '../redux/actions/project';

const MainPage = ({ fetchProjects, projects }) => {
  useEffect(() => {
    fetchProjects(window.localStorage.getItem('token'));
  }, []);
  const projectList = (
    <div>
      <>
        {projects.map((project) => (
          <ProjectLink key={project.id} projectData={project} id={project.id} />
        ))}
      </>
    </div>
  );
  return (
    <div className="relative min-h-screen flex">
      <div className="flex-1 p-10">{projectList}</div>
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
