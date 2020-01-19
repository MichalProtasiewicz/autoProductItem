import React from 'react';
import { shallow } from 'enzyme';
import {ProductAlertSuccess, ProductAlertWarning, ProductAlertWrong} from '../../components/ProductAlert/ProductAlert'

describe('<Product Item />', () => {
  it('AlertSuccess', () => {
    const wrapper = shallow(<ProductAlertSuccess data={{car: "MERCEDES S500 (8E2, B6) 1.8 T queattro, 140 PS, 103 kW"}}/>);
    expect(wrapper);
  });
  it('AlertWarning', () => {
    const wrapper = shallow(<ProductAlertWarning data={{car: "MERCEDES S500 (8E2, B6) 1.8 T queattro, 140 PS, 103 kW"}}/>);
    expect(wrapper);
  });
  it('AlertWrong', () => {
    const wrapper = shallow(<ProductAlertWrong data={{car: "MERCEDES S500 (8E2, B6) 1.8 T queattro, 140 PS, 103 kW"}}/>);
    expect(wrapper);
  });
});
