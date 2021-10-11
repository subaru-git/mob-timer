import React from 'react';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimerNotification } from './TimerNotification';

configure({ adapter: new Adapter() });

afterEach(cleanup);

test('render without exception', () => {
  const component = shallow(<TimerNotification show onClose={() => {}} />);
  expect(component.type()).toBe('div');
});
