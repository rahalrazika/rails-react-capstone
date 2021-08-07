import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectLink from '../components/ProjectLink';
import fetchProjects from '../redux/actions/project';
import Loading from '../components/Loading';

const MainPage = ({ fetchProjects, projects }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProjects(window.localStorage.getItem('token'));
    setLoading(true);
  }, []);
  const projectList = (
    <div>
      <>
        { loading ? projects.map((project) => (
          <ProjectLink key={project.id} projectData={project} id={project.id} />
        )) : <Loading />}
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
