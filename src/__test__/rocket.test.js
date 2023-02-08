import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import renderer from 'react-test-renderer';
import Rockets from '../pages/Rockect';

describe('Test Rockets Component', () => {
  it('should render Rockets component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
