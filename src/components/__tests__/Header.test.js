import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';

let wrapped;

it('renders children passed to it',
  () => {
    wrapped = shallow(<Header><div data-test="child">Child</div></Header>);

    expect(wrapped.find('[data-test="child"]').length).toEqual(1);
  });
