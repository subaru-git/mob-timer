import React from 'react';
import { Story } from '@storybook/react';
import { DrawerHeader, DrawerHeaderProps } from './DrawerHeader';

export default {
  component: DrawerHeader,
  title: 'DrawerHeader',
};

const Template: Story<DrawerHeaderProps> = (args: DrawerHeaderProps) => <DrawerHeader {...args} />;

export const Default = Template.bind({});
