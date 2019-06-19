import React from 'react';
import renderer from 'react-test-renderer';
import ProductAlert from './ProductAlert';

it('renders correctly', () => {
  const tree = renderer.create(<ProductAlert />).toJSON();
  expect(tree).toMatchSnapshot();
});
