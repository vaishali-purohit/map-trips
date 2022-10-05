import 'jest-styled-components';

import App from '../App';
import { Provider } from 'react-redux';
import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('should render correctly in "debug" mode', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
