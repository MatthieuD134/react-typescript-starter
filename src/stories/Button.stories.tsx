import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/common/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary md',
  size: 'md',
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  label: 'Primary Outline lg',
  size: 'md',
  variant: 'primaryOutline',
  boxShadow: true,
};
