import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../components/Loading';

it('expect to render loading components', () => {
  const result = renderer.create(<Loading />).toJSON;
  expect(result).toMatchSnapshot();
});
