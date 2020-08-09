import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../Grid/Grid';

let wrapped;

it('renders children passed to it',
  () => {
    wrapped = shallow(<Grid><div data-test="child">Child</div></Grid>);

    expect(wrapped.find('[data-test="child"]').length).toEqual(1);
  });
