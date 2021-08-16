import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Logout from '../components/Logout';

it('renders Header  page correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Logout />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

