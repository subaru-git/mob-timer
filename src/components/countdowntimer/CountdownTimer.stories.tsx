import React from 'react';
import { Story } from '@storybook/react';
import { CountdownTimer, CountdownTimerProps } from './CountdownTimer';

export default {
  component: CountdownTimer,
  title: 'CountdownTimer',
};

const Template: Story<CountdownTimerProps> = (args: CountdownTimerProps) => (
  <CountdownTimer {...args} />
);

const timerdate = new Date();
timerdate.setSeconds(120);

export const Default = Template.bind({});
Default.args = {
  end: timerdate,
};
