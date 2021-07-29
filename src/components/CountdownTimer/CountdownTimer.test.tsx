import React from 'react';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CountdownTimer } from './CountdownTimer';

configure({ adapter: new Adapter() });

afterEach(cleanup);

test('render without exception', () => {
  const component = shallow(<CountdownTimer end={new Date()} />);
  expect(component.text()).toMatch(/Countdown/);
  expect(component.find('*')).toHaveLength(2);
  expect(component.getElements()[0].props.children.props.intervalDelay).toBe(1000);
});
