import React from 'react';
import { Story } from '@storybook/react';
import { TimerAppBar, TimerAppBarProps } from './TimerAppBar';

export default {
  component: TimerAppBar,
  title: 'TimerAppBar',
};

const Template: Story<TimerAppBarProps> = (args: TimerAppBarProps) => <TimerAppBar {...args} />;

export const Default = Template.bind({});
