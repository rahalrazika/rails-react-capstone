/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import MainPage from '../pages/MainPage';
import Fav from '../pages/Favourite';
import Partnership from '../pages/Partnership';
import ProjectDetail from '../pages/ProjectDetail';
import NavLayout from '../layouts/navLayout';

function Routes() {
  // get the favourites from redux
  // pass the data to project details
  const favourites = useSelector((state) => state.favouriteReducer.favourites);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route
        path="/project/:id"
        render={(props) => <ProjectDetail favourites={favourites} {...props} />}
      />
      <Route
        exact
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
