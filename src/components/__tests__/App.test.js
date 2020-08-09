import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import client from '../../utils/client';
import App from '../App/App';

// As the app basically composes all the other components, testing the app is akin to making integration tests.

let wrapped;

const mockData = [
  {
    id: 1,
    city: 'Canchayllo',
    country: 'Peru',
    numberOfBedrooms: 5,
    numberOfBathrooms: 3,
    guests: 5,
    pricePerNight: 151.9,
    image: 'https://image.novasol.com/pic/1024/ita/201907181542/ita761_pool_01.jpg',
  },
];

beforeEach(() => {
  wrapped = mount(<App endpoint="Properties" />);

  moxios.install(client);
  moxios.stubRequest(/\*/,
    {
      status: 200,
      response: mockData,
    },
    5);
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall(client);
});

it('can fetch a list of houses and display them',
  (done) => {
    moxios.wait(() => {
      console.log('moxios: ', moxios);
      wrapped.update();
      expect(wrapped.find('[data-test="listing"]').length).toEqual(1);
      done();
    });
  });

// it('displays error message on invalid request',
//   (done) => {
//     moxios.stubRequest(/\*/,
//       {
//         status: 400,
//         response: { message: 'error' },
//       });
//     wrapped = mount(<App endpoint="Invalid_Endpoint" />);
//     moxios.wait(() => {
//       wrapped.update();
//       expect(wrapped.find('[data-test="error"]').length).toEqual(1);
//       expect(wrapped.find('[data-test="listing"]').length).toEqual(0);
//       done();
//     });
//   });
