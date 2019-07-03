import React from 'react';
import { shallow } from 'enzyme';
import ProductAlert from './ProductAlert';



describe('<Product Item />', () => {
  it('Init', () => {
    const wrapper = shallow(<ProductAlert />);
    expect(wrapper);
  });
});


