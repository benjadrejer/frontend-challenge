import React from 'react';
import { shallow } from 'enzyme';
import Listing from '../Listing/Listing';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Listing imageUrl="" link=""><div data-test="child">Child</div></Listing>);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders children passed to it',
  () => {
    expect(wrapped.find('[data-test="child"]').length).toEqual(1);
  });

it('render one image',
  () => {
    expect(wrapped.find('img').length).toEqual(1);
  });

it('renders one anchor tag',
  () => {
    expect(wrapped.find('a').length).toEqual(1);
  });
