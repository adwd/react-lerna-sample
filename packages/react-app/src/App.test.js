import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import { SampleComponent } from 'my-react-components';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders sample component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<SampleComponent />)).toEqual(true);
});
