import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from './Carousel';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <div className={THEMES.LIGHT}>
    <Carousel {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Carousel',
};
