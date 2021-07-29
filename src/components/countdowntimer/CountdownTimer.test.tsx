import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CountdownTimer } from './CountdownTimer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

afterEach(cleanup);

test('renders learn react link', () => {
  const component = shallow(<CountdownTimer end={new Date()} />);
  expect(component.text()).toMatch(/Countdown/);
  expect(component.find('*')).toHaveLength(2);
  expect(component.getElements()[0].props.children.props.intervalDelay).toBe(1000);
});
