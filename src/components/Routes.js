import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import MainPage from '../pages/MainPage';
import Fav from '../pages/Favourite';
import Partnership from '../pages/Partnership';
import ProjectDetail from '../pages/ProjectDetail';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/main" component={MainPage} />
      <Route path="/fav" component={Fav} />
      <Route path="/part" component={Partnership} />
    </Switch>
  );
}

export default Routes;
