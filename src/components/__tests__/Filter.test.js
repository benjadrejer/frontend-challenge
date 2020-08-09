import React from 'react';
import { mount } from 'enzyme';
import Filter from '../Filter/Filter';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Filter
      label="test"
      min={100}
      max={500}
      step={10}
      callback={() => {}}
    />,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders the rc-slider',
  () => {
    expect(wrapped.find('.rc-slider').length).toEqual(1);
  });
