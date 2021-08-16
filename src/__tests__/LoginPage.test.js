import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import LoginPage from '../pages/LoginPage';
import store from '../redux/store';

it('renders Login page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <LoginPage />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
