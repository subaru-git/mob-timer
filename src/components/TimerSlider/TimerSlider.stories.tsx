import React from 'react';
import { Story } from '@storybook/react';
import { TimerSlider, TimerSliderProps } from './TimerSlider';

export default {
  component: TimerSlider,
  title: 'TimerSlider',
};

const Template: Story<TimerSliderProps> = (args: TimerSliderProps) => <TimerSlider {...args} />;

export const Default = Template.bind({});
