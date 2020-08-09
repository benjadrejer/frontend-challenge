import React from 'react';
import { shallow } from 'enzyme';
import PropertyDescriptionText from '../Descriptions/PropertyDescriptionText';

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
  wrapped = shallow(<PropertyDescriptionText content={mockData} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('renders a button',
  () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

it('renders 5 paragraphs',
  () => {
    expect(wrapped.find('p').length).toEqual(5);
  });
