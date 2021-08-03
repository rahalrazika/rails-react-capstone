import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import MainPage from '../pages/MainPage';
import Fav from '../pages/Favourite';
import Partnership from '../pages/Partnership';
import ProjectDetail from '../pages/ProjectDetail';
import NavLayout from '../layouts/navLayout';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route
        path="/project/:id"
        render={() => (
          <NavLayout>
            <ProjectDetail />
          </NavLayout>
        )}
      />
      <Route
        path="/main"
        render={() => (
          <NavLayout>
            <MainPage />
          </NavLayout>
        )}
      />
      <Route
        path="/fav"
        render={() => (
          <NavLayout>
            <Fav />
          </NavLayout>
        )}
      />
      <Route
        path="/partner"
        render={() => (
          <NavLayout>
            <Partnership />
          </NavLayout>
        )}
      />
    </Switch>
  );
}

export default Routes;
