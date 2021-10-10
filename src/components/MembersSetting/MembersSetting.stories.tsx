import React from 'react';
import { Story } from '@storybook/react';
import { MembersSetting, MembersSettingProps } from './MembersSetting';

export default {
  component: MembersSetting,
  title: 'MembersSetting',
};

const Template: Story<MembersSettingProps> = (args: MembersSettingProps) => <MembersSetting {...args} />;

export const Default = Template.bind({});
