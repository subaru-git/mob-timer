import React from 'react';
import { cleanup } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TimerSlider } from './TimerSlider';

configure({ adapter: new Adapter() });

afterEach(cleanup);

test('render without exception', () => {
  const component = shallow(<TimerSlider value={0} step={1} min={0} max={100} onSliderChange={() => {}} />);
  expect(component).not.toBeNull();
});
