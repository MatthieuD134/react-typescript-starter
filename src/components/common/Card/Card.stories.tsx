import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from './Card';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div className={THEMES.LIGHT}>
    <Card {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Card',
};
