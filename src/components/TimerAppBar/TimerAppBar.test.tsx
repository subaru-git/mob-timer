import React from 'react';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimerAppBar } from './TimerAppBar';

configure({ adapter: new Adapter() });

afterEach(cleanup);

test('render without exception', () => {
  const component = shallow(<TimerAppBar />);
  expect(component.type()).toBe('div');
  expect(component.getElements()[0].props.children.props.position).toBe('static');
});
