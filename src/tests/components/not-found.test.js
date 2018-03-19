import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/not-found';

test('test render NotFound correctly', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});