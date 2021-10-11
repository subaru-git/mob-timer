import React from 'react';
import { Story } from '@storybook/react';
import { TimerNotification, TimerNotificationProps } from './TimerNotification';

export default {
  component: TimerNotification,
  title: 'TimerNotification',
};

const Template: Story<TimerNotificationProps> = (args: TimerNotificationProps) => <TimerNotification {...args} />;

export const Default = Template.bind({});
