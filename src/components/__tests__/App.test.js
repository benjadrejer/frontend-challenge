import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { act } from 'react-dom/test-utils';
import client from '../../utils/client';
import App from '../App/App';

// As the app basically composes all the other components, testing the app is akin to making integration tests.
/*
  Turns out Enzyme has an annoying semi-bug, warning about having to wrap state changes inside act(),
  despite Enzyme supposedly wrapping calls to .mount or .update in act already.
  It can be somewhat bypassed by waiting ever so slightly, which is what the waitForComponentToPaint function does.
  If I knew this before I started these tests (which I didn't as I haven't actually used Enzyme with Hooks before),
  I would have just kept to React-Testing-Library. Oh well!
*/

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve,
      0));
    wrapper.update();
  });
};

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
  {
    id: 2,
    city: 'Wengaingo',
    country: 'Indonesia',
    numberOfBedrooms: 4,
    numberOfBathrooms: 3,
    guests: 5,
    pricePerNight: 467.8,
    image: 'https://image.novasol.com/pic/1024/itf/201708081552/itf013_main_02.jpg'
  },
];

beforeEach(() => {
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall(client);
});

describe('The App',
  () => {
    it('can fetch a list of houses and display them',
      (done) => {
        moxios.install(client);
        moxios.stubRequest('Properties',
          {
            status: 200,
            response: mockData,
          });
        wrapped = mount(<App endpoint="Properties" />);
        waitForComponentToPaint(wrapped);
        moxios.wait(() => {
          wrapped.update();
          waitForComponentToPaint(wrapped);
          expect(wrapped.find('[data-test="listing"]').length).toEqual(2);
          done();
        });
      });
  });

// Could also run a test checking for the error message appearing on wrong link / no link.
// But feel I spent enough time on this by now.
