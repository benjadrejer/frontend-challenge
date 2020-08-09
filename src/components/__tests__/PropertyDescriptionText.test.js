import React from 'react';
import { mount } from 'enzyme';
import PropertyDescriptionIcons from '../Descriptions/PropertyDescriptionIcons';

let wrapped;

const mockData = {
  id: 1,
  city: 'Canchayllo',
  country: 'Peru',
  numberOfBedrooms: 5,
  numberOfBathrooms: 3,
  guests: 5,
  pricePerNight: 151.9,
  image: 'https://image.novasol.com/pic/1024/ita/201907181542/ita761_pool_01.jpg',
};

beforeEach(() => {
  wrapped = mount(<PropertyDescriptionIcons content={mockData} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders 3 icons',
  () => {
    expect(wrapped.find('svg').length).toEqual(3);
  });
