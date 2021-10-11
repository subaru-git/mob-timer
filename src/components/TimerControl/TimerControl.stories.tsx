import React from 'react';
import { Story } from '@storybook/react';
import { TimerControl, TimerControlProps } from './TimerControl';

export default {
  component: TimerControl,
  title: 'TimerControl',
};

const Template: Story<TimerControlProps> = (args: TimerControlProps) => <TimerControl {...args} />;

export const Default = Template.bind({});
